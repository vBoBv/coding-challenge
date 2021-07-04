export const formatToPercentage = (value: number, decimalDigit: number): string => {
	const result = `${(value * 100).toFixed(decimalDigit)}%`;

	return result;
};
