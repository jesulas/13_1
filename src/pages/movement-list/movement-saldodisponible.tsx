import React from "react";

import { AccountMovement } from "./movement-list.vm";

interface Props {
    accountSaldo: AccountMovement;
}

export const AccountSaldo: React.FC<Props> = (props) => {
    const {accountSaldo} = props;

    return (
        <h2>{accountSaldo.saldo}€</h2>
    )
}