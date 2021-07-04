import { Account } from '../state/interfaces/generalLedger';

export const mockData: Account[] = [
	{
		account_category: 'revenue',
		account_code: '200',
		account_currency: 'AUD',
		account_identifier: 'e2bacdc6-2006-43c2-a5da-3c0e5f43b452',
		account_status: 'ACTIVE',
		value_type: 'credit',
		account_name: 'Sales',
		account_type: 'sales',
		account_type_bank: '',
		system_account: '',
		total_value: 32431.0
	},
	{
		account_type_bank: '',
		value_type: 'debit',
		total_value: 310.0,
		account_name: 'Cleaning',
		account_type: 'overheads',
		account_currency: 'AUD',
		account_identifier: 'ff09eac3-5b17-44fb-9eea-e2e9375e91b4',
		account_status: 'ACTIVE',
		system_account: '',
		account_category: 'expense',
		account_code: '408'
	},
	{
		account_category: 'assets',
		account_name: 'Office Equipment',
		total_value: 750.0,
		account_status: 'ACTIVE',
		account_type: 'fixed',
		account_type_bank: '',
		system_account: '',
		value_type: 'debit',
		account_code: '710',
		account_currency: 'AUD',
		account_identifier: '2d69b4ee-37d4-4f67-b950-32cbdd5765ed'
	},
	{
		account_code: '840',
		account_currency: 'AUD',
		account_name: 'Historical Adjustment',
		account_status: 'ACTIVE',
		total_value: 19212.21,
		value_type: 'credit',
		account_category: 'liability',
		account_identifier: '305b05b3-01f3-4f47-a45d-edfa66ea03e7',
		account_type: 'current',
		account_type_bank: '',
		system_account: 'HISTORICAL'
	}
];
