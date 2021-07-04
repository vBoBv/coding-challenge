import { Account } from '../../state/interfaces/generalLedger';
import { filterAccountCategory } from '../Filtering/filterAccountCategory';
import { sumTotalValue } from './sumTotalValue';

export const calculateExpense = (accounts: Account[]): number => {
	let expenses = 0;
	const expenseAccounts = filterAccountCategory(accounts, 'expense');

	if (expenseAccounts.length > 0) {
		expenses = sumTotalValue(expenseAccounts);
		return expenses;
	}

	return expenses;
};
