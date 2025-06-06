import React from "react";
import classes from "../movement-list/movement-list.component.module.css"
import { AccountVm } from "../account-list/account-list.vm";

interface Props {
    accountList: AccountVm;
}

export const AccountListaDetalles: React.FC<Props> = (props) => {
    const {accountList} = props;

    return (
        <div className={classes.headerData}>
            <p>Alias:{accountList.name}</p>
            <p>IBAN:{accountList.iban}</p>
        </div>
    )
}