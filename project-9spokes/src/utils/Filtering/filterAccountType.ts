import { Account } from '../../state/interfaces/generalLedger';

export const filterAccountType = (accounts: Account[], accountTypes: string[]): Account[] => {
	const result = accounts.filter((account) => accountTypes.indexOf(account.account_type) >= 0);

	return result;
};
