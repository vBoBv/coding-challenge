import { Account } from '../../state/interfaces/generalLedger';
import { filterAccountCategory } from '../Filtering/filterAccountCategory';
import { filterValueType } from '../Filtering/filterValueType';
import { filterAccountType } from '../Filtering/filterAccountType';
import { sumTotalValue } from './sumTotalValue';

export const calculateLiability = (accounts: Account[]): number => {
	let liabilities = 0;
	const liabilityAccounts = filterAccountCategory(accounts, 'liability');

	const creditLiabilityAccounts = filterValueType(liabilityAccounts, 'credit');
	const creditAccountTypes = filterAccountType(creditLiabilityAccounts, ['current', 'current_accounts_payable']);

	const debitLiabilityAccounts = filterValueType(liabilityAccounts, 'debit');
	const debitAccountTypes = filterAccountType(debitLiabilityAccounts, ['current', 'current_accounts_payable']);

	if (debitAccountTypes.length > 0 || creditAccountTypes.length > 0) {
		const creditLiabilities = sumTotalValue(creditAccountTypes);
		const debitLiabilities = sumTotalValue(debitAccountTypes);
		liabilities = creditLiabilities - debitLiabilities;

		return liabilities;
	}

	return liabilities;
};
