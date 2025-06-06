import * as apiModel from "./api/account-list.api-model";
import * as viewModel from "./account-list.vm";

export const mapAccountListFromApiToVm = (
  accountList: apiModel.Account[]
): viewModel.AccountVm[] =>
  accountList.map((account) => ({
    id: account.id,
    iban: account.iban,
    name: account.name,
    balance: account.balance.toString(),
    lastTransaction: new Date(account.lastTransaction),
  }));


  export const mapAccountFromApiToVm = (
  accountList: apiModel.Account
): viewModel.AccountVm => ({
    id: accountList.id,
    iban: accountList.iban,
    name: accountList.name,
    balance: accountList.balance.toString(),
    lastTransaction: new Date(accountList.lastTransaction),
})
