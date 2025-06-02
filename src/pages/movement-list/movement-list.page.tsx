import { AppLayout } from "@/layouts";
import React from "react";
import { AccountListTableComponent } from "./components/movement-table.components";
import { accountMovement } from "./movement-list.vm";
import classes from "../movement-list/movement-list.component.module.css"
const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;
const regEX = /[0-9]$/
const cuentaActual = regEX.exec(window.location.href)
if (cuentaActual != null && cuentaActual != undefined){
console.log(urlMovements)
console.log(urlMovements +"?accountId_like="+ cuentaActual[0])
console.log(cuentaActual)
}

export const MovementListPage: React.FC = () => {
const [listaMovemiento, setMovimientos] = React.useState<accountMovement[]>([]);
if (cuentaActual != null && cuentaActual != undefined){React.useEffect(() => {
  
  fetch(urlMovements +"?accountId_like="+cuentaActual[0])
  .then((response) => response.json())
  .then((json) => setMovimientos(json))
  .catch((error) => console.log(error));},[]) }

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Movimientos</h1>
        </div>
       <div className={classes.gridContainer}>
       <div className={classes.headerTable}>
          <span className={classes.headerCell}>FECHA</span>
          <span className={classes.headerCell}>FECHA VALOR</span>
          <span className={classes.headerCell}>DESCRIPCIÓN</span>
          <span className={classes.headerCell}>IMPORTE</span>
          <span className={classes.headerCell}>SALDO DISPONIBLE</span>
      </div>
          {listaMovemiento.map((movimiento) => (
              <span key={movimiento.id}>
                <AccountListTableComponent accountLista={movimiento}/>
              </span>

          ))}
          </div>
        </div>
    </AppLayout>
  )
};
