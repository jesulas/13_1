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
