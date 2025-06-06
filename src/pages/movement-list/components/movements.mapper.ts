import { AccountMovement } from "../movement-list.vm";
import { ApiMovement } from "../movement-list-api";
export const mapTransfersFromtoApi = (movementsList: ApiMovement[]): AccountMovement[] => {
    return movementsList.map((movement) => {
       return{
        id: movement.id,
        fecha: new Date(movement.transaction).toLocaleDateString(),
        fechaValor: new Date(movement.realTransaction).toLocaleDateString(),
        descripcion: movement.description,
        importe: movement.amount,
        saldo: movement.balance,
        accountId: Number(movement.accountId)
        }
    })

}

  export const mapTransferFromtoApi = (
  movementsList: ApiMovement[]
): AccountMovement => ({

        id: movementsList[0].id,
        fecha: new Date(movementsList[0].transaction).toLocaleDateString(),
        fechaValor: new Date(movementsList[0].realTransaction).toLocaleDateString(),
        descripcion: movementsList[0].description,
        importe: movementsList[0].amount,
        saldo: movementsList[0].balance,
        accountId: Number(movementsList[0].accountId)
        }
)
