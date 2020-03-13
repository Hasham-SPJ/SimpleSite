import React, { Component } from 'react';
import { Table, TableBody, Grid, Tooltip, TableCell, TableContainer, TableHead, TableRow, Paper, } from '@material-ui/core';
import PostData from './data.json';
import "./table.css"

export default class DataTable extends Component {
    render() {

        return (
            
            <Grid container className="mainwrapper">
                <Grid item xs={12} >
                    <Paper className="">
                        <TableContainer className="MuiTable-root">
                  
                            <Table >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Rate</TableCell>
                                        <TableCell>Employee</TableCell>
                                        <TableCell>Founded</TableCell>
                                        <TableCell>Website</TableCell>
                                        <TableCell>Location</TableCell>
                                        <TableCell>Focus Area</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {PostData.map(row => (
                                        <TableRow key={row.Name}>
                                            <TableCell>
                                                <p>
                                                    {row.Name}
                                                </p>
                                            </TableCell>
                                            <TableCell>
                                                <p>
                                                    {row.Rate}
                                                </p>
                                            </TableCell>
                                            <TableCell>
                                                <p>
                                                    {row.Employee}
                                                </p>
                                            </TableCell>
                                            <TableCell>
                                                <p>
                                                    {row.Founded}
                                                </p>
                                            </TableCell>
                                            <TableCell>
                                                <Tooltip title={row.Website} interactive>
                                                    <p>
                                                        {row.Website}
                                                    </p>
                                                </Tooltip>
                                            </TableCell>
                                            <TableCell>
                                                <Tooltip title={row.location} interactive>
                                                    <p>
                                                        {row.location}
                                                    </p>
                                                </Tooltip>
                                            </TableCell>
                                            <TableCell>
                                                <Tooltip title={row.FocusArea} interactive>
                                                    <p>
                                                        {row.FocusArea}
                                                    </p>
                                                </Tooltip>
                                            </TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                    
                        </TableContainer>
                        
                    </Paper>
                </Grid>
            </Grid>
            
        );
    }
}
//export default DataTable