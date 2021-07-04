import { Account } from '../../state/interfaces/generalLedger';

export const sumTotalValue = (accounts: Account[]): number => {
	const reducer = (accumulator: number, account: Account) => accumulator + account.total_value;
	const result = accounts.reduce(reducer, 0);

	return result;
};
