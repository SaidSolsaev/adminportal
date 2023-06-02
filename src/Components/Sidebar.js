import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

import styled from 'styled-components';

export default function Sidebar() {
    
    return (
        <Container>
            <div className='top'>
                <div className='logo'>
                    AdminPortal
                </div>
                
            </div>
            
            <Box sx={{ width: '100%', maxWidth: 400 }}>
                
                <List component="nav">
                    <ListItemButton href='#1'>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                    
                    <ListItemButton href='#2'>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sold" />

                    </ListItemButton>

                    <ListItemButton href='#3'>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Bought" />
                    </ListItemButton>

                    <ListItemButton href='#4'>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Products" />

                    </ListItemButton>

                    <ListItemButton href='#5'>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Kvitteringer" />
                    </ListItemButton>
                </List>
                <Divider />
            </Box>
        </Container>
    );
}

const Container = styled.div`
    
    max-width: 400px;
    height: 100vh;
    
    .top{
        background: #333;
        color: white;
        height: 20vh;
    }
    
    nav{
    
    }
    
`;




