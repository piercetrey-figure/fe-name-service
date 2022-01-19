import { useState, useEffect } from "react";
import {useWalletConnect, QRCodeModal, WINDOW_MESSAGES as WINDOW_MESSAGE} from "@provenanceio/walletconnect-js";
import styled from "styled-components";
import {
  Action,
  Connect,
  Disconnect,
  Dropdown,
  Input,
  Popup,
} from "Components";
import { ALL_ACTIONS, GRPC_URL, ROOT_NAME } from "consts";
import { REACT_APP_WCJS_VERSION } from "./version"; // eslint-disable-line
import { EXPLORER_URL } from "consts";
import { useWallet } from "@provenanceio/wallet-lib";
import { TEXT_ACCENT, PRIMARY_BACKGROUND, TEXT } from "./consts/colors";
import { Header, SubHeader } from "Components/Headers";
import { RegisterName } from "Components/RegisterName";
import { WasmService } from "Services";
import { NameContractService } from "./Services/NameContractService";
import { ConversionUtil } from "./util/ConversionUtil";


const Wrapper = styled.div`
  background: ${PRIMARY_BACKGROUND};

  a {
    color: ${TEXT_ACCENT};
    &:hover {
      color: ${TEXT};
    }
  }
`;
const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: 100vh;
  position: relative;
`;
const Text = styled.p`
  font-size: 1.6rem;
  line-height: 3rem;
  margin: 0;
`;
const Content = styled.div`
  min-width: 600px;
  padding: 30px 50px;
  border-radius: 4px;
  margin-bottom: 40px;
`;

const NameList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  border-radius: 5px;
  border: 1px solid black;
  overflow: hidden;
`;
const Name = styled.li`
  font-weight: 600;
  font-size: 1.2rem;
  padding: 10px;
  background: white;
  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

export const App = () => {
  const [popupContent, setPopupContent] = useState("");
  const [popupStatus, setPopupStatus] = useState("success");
  const [popupDuration, setPopupDuration] = useState(2500);
  const [activeMethod, setActiveMethod] = useState("");
  const [hashAmount, setHashAmount] = useState(null);
  const [listenersAdded, setListenersAdded] = useState(false);

  const { walletConnectService: wcs, walletConnectState } = useWalletConnect();
  const { address, connected, peer } = walletConnectState;

  const setPopup = (message, status, duration) => {
    setPopupContent(message);
    if (status) {
      setPopupStatus(status);
    }
    if (duration) {
      setPopupDuration(duration);
    }
  };

  useEffect(() => {
    if (!listenersAdded) {
      console.log("Adding event listeners");
      setListenersAdded(true);
      wcs.addListener(WINDOW_MESSAGE.CUSTOM_ACTION_COMPLETE, (result) => {
        // TODO: Reload names after a successful custom action
        console.log(`WalletConnectJS | Custom Action Complete | Result: `, result);
      });

      wcs.addListener(WINDOW_MESSAGE.CUSTOM_ACTION_FAILED, (result) => {
        const { error } = result;
        console.log(`WalletConnectJS | Custom Action Failed | result, error: `, result, error);
      });
    }
  }, [listenersAdded]);


  const dropdownOptions = ALL_ACTIONS.map(({ method }) => method);
  dropdownOptions.sort();
  dropdownOptions.unshift("Select Method/Action...");

  const { grpcService } = useWallet();
  const wasmService = new WasmService();
  const nameContractService = new NameContractService(ROOT_NAME);

  const [registeredNames, setRegisteredNames] = useState([]);
  useEffect(() => {
    if (address) {
      nameContractService
        .listNames(address)
        .then((names) => setRegisteredNames(names));
    } else {
      setRegisteredNames([]);
    }
  }, [address]);

  useEffect(() => {
    if (address) {
      grpcService.getBalancesList(address)
          .then(balances => {
            let hashAmount = ConversionUtil.getHashBalance(balances);
            if (hashAmount) {
              setHashAmount(hashAmount);
            }
          });
    } else {
      setHashAmount(null);
    }
  })

  const renderActions = () =>
    ALL_ACTIONS.map(({ method, fields, buttonTxt, windowMessage }) =>
      activeMethod === method ? (
        <Action
          key={method}
          method={method}
          setPopup={setPopup}
          fields={fields}
          buttonTxt={buttonTxt}
          windowMessage={windowMessage}
        />
      ) : null
    );

  return (
    <Wrapper>
      <HomeContainer>
        {popupContent && (
          <Popup
            delay={popupDuration}
            onClose={() => setPopupContent("")}
            status={popupStatus}
          >
            {popupContent}
          </Popup>
        )}
        <Header>Names "R" Us</Header>
        <Content>
          {connected ? (
            <>
              {peer?.name && (
                <Text>
                  Wallet:{" "}
                  {peer.url ? (
                    <a href={peer.url} target="_blank" rel="noreferrer">
                      {peer.name}
                    </a>
                  ) : (
                    peer.name
                  )}
                </Text>
              )}
              <Text>
                Address:{" "}
                <a
                  href={`${EXPLORER_URL}/accounts/${address}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {address}
                </a>
              </Text>
              {hashAmount && (
                  <Text>
                    Hash Balance:{" "}{hashAmount}
                  </Text>
              )}
              <SubHeader>Your registered names</SubHeader>
              <NameList>
                {registeredNames.map((name) => (
                  <Name key={name}>{name}</Name>
                ))}
              </NameList>
              <RegisterName
                  onRegister={(name) => {
                    return nameContractService
                        .generateNameRegisterBase64Message(name, address)
                        .then((msg) => {
                          wcs.customAction({
                            message: msg,
                            description: `Register ${name} to ${address}`,
                            method: "provenance_sendTransaction",
                          });
                        });
                  }}
              />
              <Disconnect walletConnectService={wcs} setPopup={setPopup} />
            </>
          ) : (
            <Connect walletConnectService={wcs} setPopup={setPopup} />
          )}
        </Content>
        <QRCodeModal
          walletConnectService={wcs}
          walletConnectState={walletConnectState}
          title="Scan to initiate walletConnect-js session"
        />
        <div>
          WalletConnect-JS Version: {REACT_APP_WCJS_VERSION || "??.??.??"}
        </div>
      </HomeContainer>
    </Wrapper>
  );
};
