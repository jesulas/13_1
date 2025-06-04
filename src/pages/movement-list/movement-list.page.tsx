import { AppLayout } from "@/layouts";
import React from "react";
import {useParams} from 'react-router-dom'
import { AccountListTableComponent } from "./components/movement-table.components";
import { AccountMovement } from "./movement-list.vm";
import classes from "../movement-list/movement-list.component.module.css"
import { getMovements } from "./movement-ejemplo";
import { mapTransfersFromtoApi } from "./components/movements.mapper";

export const MovementListPage: React.FC = () => {
const {id} = useParams<{id: string}>()

const [listaMovemiento,setMovimientos] = React.useState<AccountMovement[]>([]);

React.useEffect(() => {
  getMovements(id).then(result => setMovimientos(mapTransfersFromtoApi(result)))
}, [])

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1 className={classes.headerText}>Saldos y Últimos movimientos</h1>
        </div>
       <div className={classes.gridContainer}>
          <h2>Alias: Gastos mes</h2>
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