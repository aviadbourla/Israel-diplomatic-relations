import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div>
            <Button
                style={{ marginRight: '4px' }}
                size="medium"
                aria-controls="simple-menu"
                color={!matches ? 'primary' : 'inherit'}
                variant="contained"
                aria-haspopup="true"
                onClick={handleClick}>
                <AssignmentIndIcon
                    fontSize="large"
                />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link
                        href="https://github.com/aviadbourla"
                        color="inherit">
                        <GitHubIcon
                            fontSize="large" color="primary"
                        />
                    </Link>

                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link
                        href="https://linkedin.com/in/aviad-bourla/"
                        color="inherit">
                        <LinkedInIcon
                            fontSize="large"
                            color="primary"
                        />
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );
}