import { Account } from '../../state/interfaces/generalLedger';
import { filterAccountCategory } from '../Filtering/filterAccountCategory';
import { filterValueType } from '../Filtering/filterValueType';
import { sumTotalValue } from './sumTotalValue';

export const calculateGrossProfitMargin = (accounts: Account[], revenue: number): number => {
	let grossProfitMargin = 0;
	const saleAccounts = filterAccountCategory(accounts, 'sales');
	const saleDebitAccounts = filterValueType(saleAccounts, 'debit');

	if (saleDebitAccounts.length > 0) {
		const sumSaleDebitAccountsTotalValue = sumTotalValue(saleDebitAccounts);
		grossProfitMargin = sumSaleDebitAccountsTotalValue / revenue;

		return grossProfitMargin;
	}

	return grossProfitMargin;
};
