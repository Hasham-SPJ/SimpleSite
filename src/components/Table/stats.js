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
        <Tab label="Average Salaries" {...a11yProps(0)} />
        <Tab label="Cities" {...a11yProps(1)} />
        <Tab label="Other Stats" {...a11yProps(2)} />

      </Tabs>
      <TabPanel value={value} index={0}>
      <Chart
            chartType="BarChart"
            spreadSheetUrl="https://docs.google.com/spreadsheets/d/1VqO8PgRa2hsYDc3f3es49s2Bqr_2vkIATraWQQKOa-c/edit#gid=0"
            options={{
              hAxis: {
                title: 'Salary',

              },
              vAxis: {
                title: 'Job Title',
              },
              title: 'Average Salaries in Pakistan',
              width: 800,
              height: 800,
              bar: { groupWidth: '95%' },
              legend: { position: 'none' },
            }}
            rootProps={{ 'data-testid': '6' }}

          />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          No Data found
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












// import React, { Component } from 'react'
// //import RoboChart from '@postlight/react-google-sheet-to-chart';
// import { Chart } from "react-google-charts";

// const style = { width: '1200px', margin: '0 auto' };


// export default class Stats extends Component {
//     render() {
//         return (
//             <div style={style}>

// <Chart
//   chartType="BarChart"
//   spreadSheetUrl="https://docs.google.com/spreadsheets/d/1VqO8PgRa2hsYDc3f3es49s2Bqr_2vkIATraWQQKOa-c/edit#gid=0"
//   options={{
//     hAxis: {
//       title: 'Salary',

//     },
//     vAxis: {
//       title: 'Job Title',
//     },
//     title: 'Average Salaries in Pakistan',
//     width: 800,
//     height: 800,
//     bar: { groupWidth: '95%' },
//     legend: { position: 'none' },
//   }}
//   rootProps={{ 'data-testid': '6' }}

// />
// <Chart
//   chartType="BarChart"
//   spreadSheetUrl="https://docs.google.com/spreadsheets/d/1CFZ-NVKuhz-iAuJ3_eBD_yWBXKsboNiEB-LiE26mYGo/edit#gid=469937525"
//   options={{
//     hAxis: {
//       title: 'Salary',

//     },
//     vAxis: {
//       title: 'Job Title',
//     },
//     title: 'Average Salaries in Pakistan',
//     width: 800,
//     height: 800,
//     bar: { groupWidth: '95%' },
//     legend: { position: 'none' },
//   }}
//   rootProps={{ 'data-testid': '1' }}

// />

//           {/* <RoboChart
//             id="1VqO8PgRa2hsYDc3f3es49s2Bqr_2vkIATraWQQKOa-c"
//             sheet="Sheet1"
//             token="AIzaSyBVErWfl1QYc_9IoKmV1Hj6wocxtfI36Rg"
//             type="bar"
//             start="A1"
//             end="b20"
//             colors={['#a1a1a1', '#995500', '#990055', '#009955']}
//           />
//             <RoboChart
//             id="15zqn9P5xphV16eCguBmcEwSJ2lcFyNZItXZlwzkAwIo"
//             sheet="sheet1"
//             token="AIzaSyBVErWfl1QYc_9IoKmV1Hj6wocxtfI36Rg"
//             type="line"
//             colors={['#a1a1a1', '#995500', '#990055', '#009955']}
//           /> */}
//         </div>
//         );
//     }


// }