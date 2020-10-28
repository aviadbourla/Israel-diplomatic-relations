
import React from 'react';
import Card from '@material-ui/core/Card';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
    },
    cardContiner: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '1rem'
    },
    cardContinerMobile: {
        color: 'white',
        fontWeight: 'bold'
    },
    card: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0.3rem 0.6rem',
        margin: 'auto'
    },
    colorCard: {
        width: '2rem',
        height: '2rem',
        borderRadius: '10%',
        marginRight: '1rem',
        color: 'white',
        margin: '0',
    },
    greenDiv: {
        backgroundColor: 'rgb(115,189,133)',
        justifyContent: 'center',
    },
    blackDiv: {
        backgroundColor: 'rgb(105,136,110)',
        justifyContent: 'center',
        opacity: '0.6'
    },
    yellowDiv: {
        backgroundColor: 'rgb(102,122,104)',
        justifyContent: 'center',
    },
    redDiv: {
        backgroundColor: 'rgb(205,104,106)',
        justifyContent: 'center',
    },
    mobileDiv: {
        display: 'none',
        justifyContent: 'center',
    }
});

export default function SimpleCard() {

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    let classDiv = matches ? `${classes.cardContiner} ${classes.cardContinerMobile}` : classes.cardContiner
    let redDiv = matches ? classes.mobileDiv : `${classes.colorCard} ${classes.redDiv}`
    let yellowDiv = matches ? classes.mobileDiv : `${classes.colorCard} ${classes.yellowDiv}`
    let blackDiv = matches ? classes.mobileDiv : `${classes.colorCard} ${classes.blackDiv}`
    let greenDiv = matches ? classes.mobileDiv : `${classes.colorCard} ${classes.greenDiv}`

    return (
        <Card className={classes.root}>
            <div className={classDiv}>
                <div className={matches ? `${classes.card} ${classes.greenDiv}` : classes.card}>
                    <div className={greenDiv}>  </div>
                    <p > הכרה</p>
                </div>
                <div className={matches ? `${classes.card} ${classes.blackDiv}` : classes.card}>
                    <div className={blackDiv}>  </div>
                    <p  > כינון</p>
                </div>
                <div className={matches ? `${classes.card} ${classes.yellowDiv}` : classes.card}>
                    <div className={yellowDiv}>  </div>
                    <p  > חידוש </p>
                </div>
                <div className={matches ? `${classes.card} ${classes.redDiv}` : classes.card}>
                    <div className={redDiv}>  </div>
                    <p> ניתוק</p>
                </div>
                <div className={matches ? `${classes.card} ${classes.redDiv}` : classes.card}>
                    <div className={redDiv}>  </div>
                    <p> אי הכרה</p>
                </div>
            </div>
        </Card>
    );
}