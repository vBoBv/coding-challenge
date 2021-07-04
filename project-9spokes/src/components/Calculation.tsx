import React, { useEffect } from 'react';
import { Account } from '../state/interfaces/generalLedger';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { calculateRevenue } from '../utils/Calculations/calculateRevenue';
import { calculateExpense } from '../utils/Calculations/calculateExpense';
import { calculateGrossProfitMargin } from '../utils/Calculations/calculateGrossProfitMargin';
import { calculateNetProfitMargin } from '../utils/Calculations/calculateNetProfitMargin';
import { calculateWorkingCapitalRatio } from '../utils/Calculations/calculateWorkingCapitalRatio';
import { calculateAsset } from '../utils/Calculations/calculateAsset';
import { calculateLiability } from '../utils/Calculations/calculateLiability';
import { formatToCurrency } from '../utils/Formatting/formatToCurrency';
import { formatToPercentage } from '../utils/Formatting/formatToPercentage';
import { ChartData } from '../state/interfaces/chartData';
import { TableData } from '../state/interfaces/tableData';
import { Grid } from '@material-ui/core';
import data from '../data.json';
import DataChart from './DataChart';
import DataTable from './DataTable';

const Calculation = () => {
	const { getAccountsData } = useActions();
	const { data: accounts, loading, error } = useTypedSelector((state) => state.account);

	useEffect(() => {
		getAccountsData();
	}, [getAccountsData]);

	const getAccountData = (): Account[] => {
		if (accounts.length > 0 && !loading && !error) return accounts;

		return data.data;
	};

	const revenue = calculateRevenue(getAccountData());
	const expenses = calculateExpense(getAccountData());
	const grossProfitMargin = calculateGrossProfitMargin(getAccountData(), revenue);
	const netProfitMargin = calculateNetProfitMargin(expenses, revenue);
	const assets = calculateAsset(getAccountData());
	const liabilities = calculateLiability(getAccountData());
	const workingCapitalRatio = calculateWorkingCapitalRatio(assets, liabilities);

	const chartData: ChartData[] = [
		{
			name: 'Revenue',
			amount: revenue
		},
		{
			name: 'Expenses',
			amount: expenses
		}
	];

	const tableData: TableData[] = [
		{
			name: 'Revenue',
			amount: formatToCurrency(revenue, 0)
		},
		{
			name: 'Expenses',
			amount: formatToCurrency(expenses, 0)
		},
		{
			name: 'Gross Profit Margin',
			amount: formatToPercentage(grossProfitMargin, 0)
		},
		{
			name: 'Net Profit Margin',
			amount: formatToPercentage(netProfitMargin, 0)
		},
		{
			name: 'Working Capital Ratio',
			amount: formatToPercentage(workingCapitalRatio, 0)
		}
	];

	return (
		<Grid container justify='center'>
			<Grid item>
				<DataTable tableData={tableData} />
			</Grid>
			<Grid item>
				<DataChart chartData={chartData} />
			</Grid>
		</Grid>
	);
};

export default Calculation;
