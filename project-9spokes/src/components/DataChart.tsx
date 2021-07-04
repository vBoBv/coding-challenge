import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Grid } from '@material-ui/core';
import { useStyles } from './ComponentStyles';
import { ChartData } from '../state/interfaces/chartData';

interface DataChartProps {
	chartData: ChartData[];
}

const DataChart: React.FC<DataChartProps> = ({ chartData }) => {
	const { figureContainer } = useStyles();

	return (
		<Grid container direction='column' alignItems='center' className={figureContainer}>
			<Grid item>
				<h3>Revenue & Expenses</h3>
			</Grid>
			<Grid item>
				<BarChart
					width={500}
					height={400}
					data={chartData}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5
					}}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />
					<Bar dataKey='amount' fill='#8884d8' />
				</BarChart>
			</Grid>
		</Grid>
	);
};

export default DataChart;
