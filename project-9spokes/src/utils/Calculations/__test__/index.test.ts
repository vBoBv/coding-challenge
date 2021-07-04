import { calculateExpense } from '../calculateExpense';
import { calculateRevenue } from '../calculateRevenue';
import { calculateNetProfitMargin } from '../calculateNetProfitMargin';
import { calculateGrossProfitMargin } from '../calculateGrossProfitMargin';
import { calculateAsset } from '../calculateAsset';
import { calculateLiability } from '../calculateLiability';
import { calculateWorkingCapitalRatio } from '../calculateWorkingCapitalRatio';
import { sumTotalValue } from '../sumTotalValue';
import { sampleData, capitalSampleData } from '../../../data/mockData';

it('sums all the total value for each object in the accounts', () => {
	const expectedOutput = 40;

	expect(sumTotalValue(sampleData)).toEqual(expectedOutput);
});

it('calculates all the expenses', () => {
	const expectedOutput = 30;

	expect(calculateExpense(sampleData)).toEqual(expectedOutput);
});

it('calculates all the revenue', () => {
	const expectedOutput = 10;

	expect(calculateRevenue(sampleData)).toEqual(expectedOutput);
});

it('calculates the net profit margin', () => {
	const expenses = calculateExpense(sampleData);
	const revenue = calculateRevenue(sampleData);
	const expectedOutput = -2;

	expect(calculateNetProfitMargin(expenses, revenue)).toEqual(expectedOutput);
});

it('calculates the gross profit margin', () => {
	const revenue = calculateRevenue(sampleData);
	const expectedOutput = 1;

	expect(calculateGrossProfitMargin(sampleData, revenue)).toEqual(expectedOutput);
});

it('calculates the assets', () => {
	const expectedOutput = 70;

	expect(calculateAsset(capitalSampleData)).toEqual(expectedOutput);
});

it('calculates the liabilities', () => {
	const expectedOutput = 20;

	expect(calculateLiability(capitalSampleData)).toEqual(expectedOutput);
});

it('calculates the working capital ratio', () => {
	const assets = calculateAsset(capitalSampleData);
	const liabilities = calculateLiability(capitalSampleData);
	const expectedOutput = 3.5;

	expect(calculateWorkingCapitalRatio(assets, liabilities)).toBe(expectedOutput);
});
