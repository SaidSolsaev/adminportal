import React from 'react'
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import SellIcon from '@mui/icons-material/Sell';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
export default function Sidebar({showSidebar}) {
    const nameUrl = window.location.href
    const splitLocation = nameUrl.split("/")
    
    
    return (
        <SidebarContainer>
            <div className={showSidebar ? "show" : "notShow"}>
                <div className='content'>
                    <div className='nav-links'>
                        <a className={splitLocation[3] === "" ? "active" : ""} href='/'>{showSidebar ? "Stats" : <HomeIcon />}</a>
                        <a className={splitLocation[3] === "sold" ? "active" : ""} href='/sold'>{showSidebar ? "Sold" : <AddShoppingCartIcon />}</a>
                        <a className={splitLocation[3] === "bought" ? "active" : ""} href='/bought'>{showSidebar ? "Bought" : <RemoveShoppingCartIcon />}</a>
                        <a className={splitLocation[3] === "products" ? "active" : ""} href='/products'>{showSidebar ? "Products" : <SellIcon />}</a>
                    </div>
                </div>
            </div>
        </SidebarContainer>
    );
}

const SidebarContainer = styled.div`
    .show{
        width: 250px;
        height: 100vh;
        top: 70px;
        position: fixed;
        background: #1b2c3f;
    }

    .notShow{
        width: 100px;
        height: 100vh;
        top: 70px;
        position: fixed;
        background: #1b2c3f;
    }
    
    .content{
        color: white;
        
        .nav-links{
            margin-top: 0px;
            
            a{
                display: flex;
                justify-content: center;
                width: 100%;
                color: white;
                text-decoration: none;
                padding: 16px;
                font-size: 24px;
                transition: 0.3s ease-in-out all;

                &:hover{
                    background: grey;
                    padding-left: 3rem;
                }
            }

            .active{
                background: grey;
                color: #82EEFD;
            }
        }
    }
    
`;




