export const calculateNetProfitMargin = (expenses: number, revenue: number): number => {
	const netProfitMargin = (revenue - expenses) / revenue;

	return netProfitMargin;
};
