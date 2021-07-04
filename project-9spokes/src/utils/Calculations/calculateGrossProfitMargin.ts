import { Account } from '../../state/interfaces/generalLedger';
import { filterAccountType } from '../Filtering/filterAccountType';
import { filterValueType } from '../Filtering/filterValueType';
import { sumTotalValue } from './sumTotalValue';

export const calculateGrossProfitMargin = (accounts: Account[], revenue: number): number => {
	let grossProfitMargin = 0;
	const saleAccountTypes = filterAccountType(accounts, ['sales']);
	const saleDebitAccounts = filterValueType(saleAccountTypes, 'debit');

	if (saleDebitAccounts.length > 0) {
		const sumSaleDebitAccountsTotalValue = sumTotalValue(saleDebitAccounts);
		grossProfitMargin = sumSaleDebitAccountsTotalValue / revenue;

		return grossProfitMargin;
	}

	return grossProfitMargin;
};
