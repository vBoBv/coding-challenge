export const formatToCurrency = (value: number, decimalDigit: number): string => {
	const formatter = new Intl.NumberFormat('en-AU', {
		style: 'currency',
		currency: 'AUD',
		maximumFractionDigits: decimalDigit,
		minimumFractionDigits: decimalDigit
	});

	const result = formatter.format(value);

	return result;
};
