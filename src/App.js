import { useState, useEffect } from "react";
import { useWalletConnect, QRCodeModal } from "@provenanceio/walletconnect-js";
import styled from "styled-components";
import {
  Action,
  Connect,
  Disconnect,
  Dropdown,
  Input,
  Popup,
} from "Components";
import { ALL_ACTIONS } from "consts";
import { REACT_APP_WCJS_VERSION } from "./version"; // eslint-disable-line
import { EXPLORER_URL } from "consts";
import { useWallet } from "@provenanceio/wallet-lib";
import { TEXT_ACCENT, PRIMARY_BACKGROUND, TEXT } from "./consts/colors";
import { Header, SubHeader } from "Components/Headers";
import { RegisterName } from "Components/RegisterName";

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

  const dropdownOptions = ALL_ACTIONS.map(({ method }) => method);
  dropdownOptions.sort();
  dropdownOptions.unshift("Select Method/Action...");

  const { grpcService } = useWallet();

  // TODO: remove this balances block, this is just a grpc-web test...
  const [balances, setBalances] = useState([]);
  useEffect(() => {
    console.log(`address is ${address}`);
    if (address) {
      console.log(`querying balances`);
      grpcService
        .getBalancesList(address)
        .then((balances) => setBalances(balances.balancesList));
    } else {
      console.log("clearing balances");
      setBalances([]);
    }
  }, [address]);

  const [registeredNames, setRegisteredNames] = useState([]);
  useEffect(() => {
    if (address) {
      setRegisteredNames(["todo:", "your", "names", "here"]);
    } else {
      setRegisteredNames([]);
    }
  }, [address]);

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
              <SubHeader>Your registered names</SubHeader>
              <NameList>
                {registeredNames.map((name) => (
                  <Name key={name}>{name}</Name>
                ))}
              </NameList>
              <RegisterName
                onRegister={(name) => {
                  alert(`todo: register name ${name}`);
                  return Promise.resolve();
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
