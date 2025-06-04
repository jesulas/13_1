
import Axios from "axios";
import { accountMovement } from "./movement-list.vm";
const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;



export const getMovements = (accountId: string | undefined): Promise<accountMovement[]> =>
  Axios.get<accountMovement[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );

  //13.3.3 pdf Login pg11
