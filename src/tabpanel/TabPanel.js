import React, { useContext } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles'
import { filterComtext } from '../context/filterComtext';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        opacity: '0.8',
    },
    tabs: {
        maxWidth: '60vw',
    }
}));

export default function VerticalTabs() {

    const classes = useStyles();
    const { value, setValue } = useContext(filterComtext)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={classes.root}>
            <Tabs
                orientation={matches ? 'horizontal' : 'vertical'}
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
                textColor="secondary"
                indicatorColor="primary"
                backgroundColor="secondary"
                scrollButtons={matches ? 'on' : 'auto'}

            >
                <Tab label="2020" value="2020" />
                <Tab label="2010" value="2010" />
                <Tab label="2000" value="2000" />
                <Tab label="1990" value="1990" />
                <Tab label="1980" value="1980" />
                <Tab label="1970" value="1970" />
                <Tab label="1960" value="1960" />
                <Tab label="1950" value="1950" />
                <Tab label="1949" value="1949" />
                <Tab label="1948" value="1948" />
            </Tabs>

        </div>
    );
}