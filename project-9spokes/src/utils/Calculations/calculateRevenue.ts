import { Account } from '../../state/interfaces/generalLedger';
import { filterAccountCategory } from '../Filtering/filterAccountCategory';
import { sumTotalValue } from './sumTotalValue';

export const calculateRevenue = (accounts: Account[]): number => {
	let revenue = 0;
	const revenueAccounts = filterAccountCategory(accounts, 'revenue');

	if (revenueAccounts.length > 0) {
		revenue = sumTotalValue(revenueAccounts);
		return revenue;
	}

	return revenue;
};
