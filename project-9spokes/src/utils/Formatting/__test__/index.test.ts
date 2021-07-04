import { formatToCurrency } from '../formatToCurrency';
import { formatToPercentage } from '../formatToPercentage';

it('formats the number to percentage', () => {
	const input = 0.1334332;
	const decimalDigit = 0;
	const expectedOutput = '13%';

	expect(formatToPercentage(input, decimalDigit)).toEqual(expectedOutput);
});

it('formats the number to currency', () => {
	const input = 34567.98;
	const decimalDigit = 0;
	const expectedOutput = '$34,568';

	expect(formatToCurrency(input, decimalDigit)).toEqual(expectedOutput);
});
