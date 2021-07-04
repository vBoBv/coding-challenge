import { Dispatch } from 'redux';
import { AccountActionType } from '../action-types';
import { AccountAction } from '../actions';
import { Ledgers } from '../../api/generalLedgers';

export const getAccountsData = () => {
	return async (dispatch: Dispatch<AccountAction>) => {
		dispatch({ type: AccountActionType.GET_ACCOUNT });

		try {
			const accounts = await Ledgers.getGeneralLedger();

			dispatch({
				type: AccountActionType.GET_ACCOUNT_SUCCESS,
				payload: accounts.data
			});
		} catch (err) {
			dispatch({
				type: AccountActionType.GET_ACCOUNT_ERROR,
				payload: err.message
			});
		}
	};
};
