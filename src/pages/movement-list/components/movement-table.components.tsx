import React from "react";
import { accountMovement } from "../movement-list.vm";
import classes from "../components/movement-table.component.module.css"
interface Props {
    accountLista: accountMovement;
}
export const AccountListTableComponent: React.FC<Props> = (props) => {
const { accountLista } = props;
return (
<React.Fragment>
    <div className={classes.row}>
<span className={classes.dataCell}>{accountLista.fecha.toLocaleDateString()}</span>
<span className={classes.dataCell}>{accountLista.fechaValor.toLocaleDateString()}</span>
<span className={classes.dataCell}>{accountLista.descripcion}</span>
<span className={classes.dataCell}>{accountLista.importe}</span>
<span className={classes.dataCell}>{accountLista.saldo}</span>
    </div>
</React.Fragment>
);
};