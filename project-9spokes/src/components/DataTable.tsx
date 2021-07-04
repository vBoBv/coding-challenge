import React from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@material-ui/core';
import { useStyles } from './ComponentStyles';
import { TableData } from '../state/interfaces/tableData';

interface DataTableProps {
	tableData: TableData[];
}

const DataChart: React.FC<DataTableProps> = ({ tableData }) => {
	const { figureContainer } = useStyles();

	return (
		<Grid container direction='column' alignItems='center' justify='center' className={figureContainer}>
			<Grid item>
				<h3>Overall Data</h3>
			</Grid>
			<Grid item>
				<TableContainer component={Paper}>
					<Table>
						<TableBody>
							{tableData.map((data) => (
								<TableRow key={data.name}>
									<TableCell component='th' scope='row'>
										{data.name}
									</TableCell>
									<TableCell align='right'>{data.amount}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</Grid>
	);
};

export default DataChart;
