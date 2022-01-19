import { FunctionComponent, useState } from "react";
import { SubHeader } from 'Components/Headers';
import { Button, Input } from 'Components';
import styled from "styled-components";
import {BigParagraph} from "../Display";
import { Colors } from 'consts';

interface CostDisplayProps {
    registrationCost: number,
    notEnoughHash: boolean,
}

const CostDisplay: FunctionComponent<CostDisplayProps> = ({ registrationCost, notEnoughHash }) => (
    <BigParagraph style={{ color: notEnoughHash ? Colors.WARN : Colors.HASH_GREEN }}>Cost: {registrationCost} Hash + Gas Fees</BigParagraph>

);

interface RegisterNameProps {
    currentHash: number | null | undefined,
    registrationCostHash: number | null | undefined,
    onRegister: (s: string) => Promise<any>
}

export const RegisterName: FunctionComponent<RegisterNameProps> = ({ currentHash, registrationCostHash, onRegister }) => {
    const [newName, setNewName] = useState("");
    const [registering, setRegistering] = useState(false);
    const nameValid = newName.trim() != '';
    const notEnoughHash = (currentHash && registrationCostHash) ? currentHash < registrationCostHash : false;
    const registrationDisabled = registering || notEnoughHash;
    
    const handleRegistration = () => {
        setRegistering(true);
        onRegister(newName)
            .then(() => setNewName(''))
            .finally(() => setRegistering(false));
    };

    return <RegisterWrapper>
        <SubHeader>Register a new name</SubHeader>
        {registrationCostHash && <CostDisplay registrationCost={registrationCostHash} notEnoughHash={notEnoughHash} />}
        <Input disabled={registrationDisabled} value={newName} onChange={(n) => setNewName(n)} />
        <Button disabled={registrationDisabled || !nameValid} type="submit" onClick={handleRegistration}>Register</Button>
    </RegisterWrapper>;
}

const RegisterWrapper = styled.div`
    margin-bottom: 20px;
`
