import { AppLayout } from "@/layouts";
import React from "react";
import {useParams} from 'react-router-dom'
import { AccountListTableComponent } from "./components/movement-table.components";
import { AccountMovement } from "./movement-list.vm";
import classes from "../movement-list/movement-list.component.module.css"
import { getMovements } from "./movement-ejemplo";
import { mapTransfersFromtoApi } from "./components/movements.mapper";
import { mapAccountFromApiToVm } from "../account-list/account-list.mapper";
import { AccountListaDetalles } from "./movements-detalles";
import { AccountVm } from "../account-list/account-list.vm";
import { getAccountListSpecific } from "../account-list/api";

export const MovementListPage: React.FC = () => {
const {id} = useParams<{id: string}>()

const [listaMovemiento,setMovimientos] = React.useState<AccountMovement[]>([]);

React.useEffect(() => {
  getMovements(id).then(result => setMovimientos(mapTransfersFromtoApi(result)))
}, [])

const [listaDetalles,setDetalles] = React.useState<AccountVm>({id:"", iban:"",name:"",balance:"",lastTransaction: new Date()});

React.useEffect(() => {
  getAccountListSpecific(id).then(result => setDetalles(mapAccountFromApiToVm(result)))
}, [])


  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1 className={classes.headerText}>Saldos y Últimos movimientos</h1>
        </div>
       <div className={classes.gridContainer}>
        <div className={classes.headerData}>
          <AccountListaDetalles accountList={listaDetalles}></AccountListaDetalles>
        </div>
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