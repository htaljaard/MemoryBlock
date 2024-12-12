import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

interface AppBarProps {

}

const TopNavAppBar: React.FC<AppBarProps> = () => {
    return (


        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='secondary'>
                <Toolbar>
                    <Button color="inherit">New Game</Button>
                </Toolbar>
            </AppBar>
        </Box>


    );
}

export default TopNavAppBar;