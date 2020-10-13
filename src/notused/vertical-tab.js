import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { Info, Reorder, School, ExitToApp } from "@material-ui/icons";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const responsive = () => {};

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (e) => {
    e.target.backgroundColor = "blue";
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid
          item
          xs={12}
          lg={4}
          style={{
            background:
              "linear-gradient(90deg, rgba(76,209,165,0.6870098381149334) 0%, rgba(0,212,255,1) 100%, rgba(2,0,36,1) 100%)"
          }}>
          <Tabs
            onClick={handleClick}
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            className={classes.tabs}>
            <Tab icon={<Info />} label="About" {...a11yProps(0)} />
            <Tab icon={<Reorder />} label="Rules" {...a11yProps(1)} />
            <Tab
              icon={<School />}
              label="Judgement Criteria"
              {...a11yProps(2)}
            />
            <Tab icon={<ExitToApp />} label="Register" {...a11yProps(3)} />
          </Tabs>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            background:
              " linear-gradient(0deg, rgba(34,193,195,1) 70%, rgba(58,45,253,1) 150%)"
          }}>
          <TabPanel value={value} index={0}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            dicta atque. Assumenda odio molestias neque ea velit, doloribus
            obcaecati esse vitae ipsa iure fugit sint deleniti, animi beatae
            corrupti aperiam commodi nostrum vero. Repudiandae!
          </TabPanel>
          <TabPanel value={value} index={1}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            numquam modi deleniti minus hic, maxime sed harum nihil nostrum
            neque accusantium animi quisquam eum ratione rerum. Fugiat,
            provident quia? Assumenda atque ipsa earum nesciunt!
          </TabPanel>
          <TabPanel value={value} index={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            corporis non tenetur amet libero tempora architecto dolores magni.
            Debitis eligendi eum hic, fugiat ipsum rerum praesentium a neque
            tempore. Totam dicta quia nostrum iure.
          </TabPanel>
          <TabPanel value={value} index={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            reiciendis facere cum placeat laborum dolore maxime doloremque iusto
            ipsa cupiditate nam itaque a quia dicta, architecto voluptatibus ex
            repellendus totam excepturi, neque expedita nostrum.
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}
