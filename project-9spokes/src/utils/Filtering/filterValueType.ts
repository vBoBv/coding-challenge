import { Account } from '../../state/interfaces/generalLedger';

export const filterValueType = (accounts: Account[], valueType: string): Account[] => {
	const result = accounts.filter((account) => account.value_type === valueType);

	return result;
};
