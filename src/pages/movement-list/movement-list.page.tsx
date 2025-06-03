import { AppLayout } from "@/layouts";
import React from "react";
import {useParams} from 'react-router-dom'
import { AccountListTableComponent } from "./components/movement-table.components";
import { accountMovement } from "./movement-list.vm";
import classes from "../movement-list/movement-list.component.module.css"
const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;


export const MovementListPage: React.FC = () => {
const {id} = useParams<{id: string}>()
const [listaMovemiento,setMovimientos] = React.useState<accountMovement[]>([]);
React.useEffect(() => {

  fetch(urlMovements +"?accountId_like=" + id)
  .then((response) => response.json())

  .then((json) => setMovimientos(json))
  .catch((error) => console.log(error));
}, [])


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
