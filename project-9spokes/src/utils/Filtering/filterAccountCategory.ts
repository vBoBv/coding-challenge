import { Account } from '../../state/interfaces/generalLedger';

export const filterAccountCategory = (accounts: Account[], category: string): Account[] => {
	const result = accounts.filter((account) => account.account_category === category);

	return result;
};
