import { accountMovement } from "../movement-list.vm";
import { apiMovement } from "../movement-list-api";
export const mapTransfersFromtoApi = (movementsList: apiMovement[]): accountMovement[] => {
    return movementsList.map((movement) => {
       return{
        id: movement.id,
        fecha:new Date(movement.transaction),
        fechaValor: new Date(movement.realTransaction),
        descripcion: movement.description,
        importe: movement.amount.toString,
        saldo: movement.balance.toString,
        accountId: movement.accountId
        }
    })

}
