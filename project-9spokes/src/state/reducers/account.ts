import produce from 'immer';
import { AccountActionType } from '../action-types';
import { AccountAction } from '../actions';
import { Account } from '../interfaces/generalLedger';

interface AccountState {
	loading: boolean;
	error: string | null;
	data: Account[];
}

const initialState = {
	loading: false,
	error: null,
	data: []
};

const reducer = produce((state: AccountState = initialState, action: AccountAction) => {
	switch (action.type) {
		case AccountActionType.GET_ACCOUNT:
			state.loading = true;
			state.error = null;
			return state;

		case AccountActionType.GET_ACCOUNT_SUCCESS:
			state.data = action.payload;
			state.loading = false;
			return state;

		case AccountActionType.GET_ACCOUNT_ERROR:
			state.loading = false;
			state.error = action.payload;
			return state;

		default:
			return state;
	}
}, initialState);

export default reducer;
