import { Account } from '../../state/interfaces/generalLedger';
import { filterAccountCategory } from '../Filtering/filterAccountCategory';
import { filterValueType } from '../Filtering/filterValueType';
import { filterAccountType } from '../Filtering/filterAccountType';
import { sumTotalValue } from './sumTotalValue';

export const calculateAsset = (accounts: Account[]): number => {
	let assets = 0;
	const assetAccounts = filterAccountCategory(accounts, 'assets');

	const debitAssetAccounts = filterValueType(assetAccounts, 'debit');
	const debitAccountTypes = filterAccountType(debitAssetAccounts, ['current', 'bank', 'current_accounts_receivable']);

	const creditAssetAccounts = filterValueType(assetAccounts, 'credit');
	const creditAccountTypes = filterAccountType(creditAssetAccounts, ['current', 'bank', 'current_accounts_receivable']);

	if (debitAccountTypes.length > 0 || creditAccountTypes.length > 0) {
		const debitAssets = sumTotalValue(debitAccountTypes);
		const creditAssets = sumTotalValue(creditAccountTypes);
		assets = debitAssets - creditAssets;

		return assets;
	}

	return assets;
};
