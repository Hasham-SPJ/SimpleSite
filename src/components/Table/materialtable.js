import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Chart } from "react-google-charts";
import Button from "@material-ui/core/Button";
import './AgoraLandingPage.css';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="GOODFIRM" {...a11yProps(0)} />
                <Tab label="P@sha" {...a11yProps(1)} />
                <Tab label="GitHub" {...a11yProps(2)} />
                
            </Tabs>
            <TabPanel value={value} index={0}>
                <div className="GoogleSheetButton">
                    <Button variant="contained" color="primary" target="_blank" href="https://docs.google.com/spreadsheets/d/1LTauofCzGlNiXmkvgs3FWmAx6Z62f0W7QOi5GeAFBZw/edit#gid=0"  >
                        View Google Sheet
                    </Button>
                </div>
                <div className="googledatatab">
                    <Chart
                        chartType="Table"
                        loader={<div>Loading Chart</div>}
                        spreadSheetUrl="https://docs.google.com/spreadsheets/d/1LTauofCzGlNiXmkvgs3FWmAx6Z62f0W7QOi5GeAFBZw/edit#gid=0"
                        options={{

                            width: 1200,
                            // height: 800,
                            // bar: { groupWidth: '95%' },
                            // legend: { position: 'none' },
                        }}
                        rootProps={{ 'data-testid': '1' }}
                        controls={[
                            {
                                controlType: 'StringFilter',
                                options: {
                                  filterColumnIndex: 0,
                                  matchType: 'any', // 'prefix' | 'exact',
                                  ui: {
                                    label: 'Search By Name',
                                  },
                                },
                                
                                
                              },
                            {
                              controlType: 'StringFilter',
                              options: {
                                filterColumnIndex: 6,
                                matchType: 'any', // 'prefix' | 'exact',
                                ui: {
                                  label: 'Search  By  City...',
                                },
                              },
                            },
                          
                           
                        ]}
                        

                    />
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <div className="GoogleSheetButton">
                    <Button variant="contained" color="primary" target="_blank" href="https://docs.google.com/spreadsheets/d/1Kn7nQMUeyLT_9N-0l4i393IzsdpPGK_S_7QuXv0GKAE/edit#gid=0"  >
                        View Google Sheet
                    </Button>
                </div>
                <div>
                    <Chart
                        chartType="Table"
                        loader={<div>Loading Chart</div>}
                        spreadSheetUrl="https://docs.google.com/spreadsheets/d/1Kn7nQMUeyLT_9N-0l4i393IzsdpPGK_S_7QuXv0GKAE/edit#gid=0"
                        options={{

                    
                            width: 1200,
                            // height: 800,
                            // bar: { groupWidth: '95%' },
                            // legend: { position: 'none' },
                        }}
                        rootProps={{ 'data-testid': '1' }}
                        controls={[
                            {
                                controlType: 'StringFilter',
                                options: {
                                  filterColumnIndex: 0,
                                  matchType: 'any', // 'prefix' | 'exact',
                                  ui: {
                                    label: 'Search By Name',
                                  },
                                },
                                
                                
                              },
                            {
                              controlType: 'StringFilter',
                              options: {
                                filterColumnIndex: 4,
                                matchType: 'any', // 'prefix' | 'exact',
                                ui: {
                                  label: 'Search  By  City...',
                                },
                              },
                            },
                          
                           
                        ]}


                    />
                </div>
      </TabPanel>
            <TabPanel value={value} index={2}>
                No Data Found
      </TabPanel>
      
        </div>
    );
}
























// import React, { Component } from 'react';
// import { DataGrid, ToolbarOptions } from "tubular-react";
// import columns from "./columns";
// import localData from "./data.json";
// import "./table.css"
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// //import AddIcon from '@material-ui/icons/Add';
// //import IconButton from '@material-ui/core/IconButton';

// export default class CompanyData extends Component {

//     render() {
//         const toolbarOptions = new ToolbarOptions({
//             advancePagination: false,
//             bottomPager: false,
//             exportButton: true,
//             printButton: true,
//             searchText: true,
//             topPager: true,
//           });

//         return (




//             <DataGrid
//                 gridName="Tubular-React"
//                 columns={columns}
//                 dataSource={localData}
//                 toolbarOptions={toolbarOptions}
//             />

//         );
//     };
// }