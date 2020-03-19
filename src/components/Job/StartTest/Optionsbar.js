import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ScreeningTest from "../Screening/container";
import HardSkillTest from "../HardSkillsTest/container";
import EITTest from "../EITTest/container";
import ScreeningA from "../ScreeningA/container";
import TodayIcon from "@material-ui/icons/Today";
import AssignmentIndIcon from "@material-ui/icons/Assessment";
import PeopleIcon from "@material-ui/icons/People";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Screening A" icon={<TodayIcon />} {...a11yProps(0)} />
          <Tab label="Screening B" icon={<AssignmentIndIcon />} {...a11yProps(1)} />
          <Tab label="HardSkill Test" icon={<PeopleIcon />} {...a11yProps(2)} />
          <Tab label="SoftSkill Test" icon={<TodayIcon />} {...a11yProps(3)} />
          <Tab label="Classification" icon={<TodayIcon />} {...a11yProps(4)} />
          <Tab label="Training" icon={<TodayIcon />} {...a11yProps(5)} />
          <Tab label="Graduation" icon={<TodayIcon />} {...a11yProps(6)} />
          <Tab label="Capstone Project" icon={<TodayIcon />} {...a11yProps(7)} />
          <Tab label="Certification" icon={<TodayIcon />} {...a11yProps(8)} />
          <Tab label="Online Ranking" icon={<TodayIcon />} {...a11yProps(9)} />
          <Tab label="Market Place" icon={<TodayIcon />} {...a11yProps(10)} />
          <Tab label="Smart Recruiting" icon={<TodayIcon />} {...a11yProps(11)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ScreeningA />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ScreeningTest />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <HardSkillTest />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <EITTest />
      </TabPanel>
      <TabPanel value={value} index={4}>
        Classification
      </TabPanel>
      <TabPanel value={value} index={5}>
        Training
      </TabPanel>
      <TabPanel value={value} index={6}>
        Graduation
      </TabPanel>
      <TabPanel value={value} index={7}>
        Capstone Project
      </TabPanel>
      <TabPanel value={value} index={8}>
        Certification
      </TabPanel>
      <TabPanel value={value} index={9}>
        Online Ranking
      </TabPanel>
      <TabPanel value={value} index={10}>
        Market Place
      </TabPanel>
      <TabPanel value={value} index={11}>
        Smart Recruiting
      </TabPanel>
    </div>
  );
}