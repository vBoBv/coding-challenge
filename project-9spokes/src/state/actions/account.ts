import { AccountActionType } from '../action-types';
import { Account } from '../interfaces/generalLedger';

export interface GetAccountAction {
	type: AccountActionType.GET_ACCOUNT;
}

export interface GetAccountSuccessAction {
	type: AccountActionType.GET_ACCOUNT_SUCCESS;
	payload: Account[];
}

export interface GetAccountErrorAction {
	type: AccountActionType.GET_ACCOUNT_ERROR;
	payload: string;
}

export type AccountAction = GetAccountAction | GetAccountSuccessAction | GetAccountErrorAction;
