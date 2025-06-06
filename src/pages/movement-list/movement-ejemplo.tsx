
import Axios from "axios";
import { ApiMovement } from "./movement-list-api";
const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;



export const getMovements = (accountId: string | undefined): Promise<ApiMovement[]> =>
  Axios.get<ApiMovement[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );

export const getMovement = (accountId: string | undefined): Promise<ApiMovement> =>
Axios.get<ApiMovement>(urlMovements, { params: { accountId } }).then(
  ({ data }) => data
);

