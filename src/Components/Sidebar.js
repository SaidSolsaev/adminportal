import React from 'react'
import styled from 'styled-components';


export default function Sidebar() {
    

    return (
        <SidebarContainer>
            <div className='content'>
                
                
                <div className='nav-links'>
                    <a className='active' href='/'>Stats</a>
                    <a href='/sold'>Sold</a>
                    <a href='/bought'>Bought</a>
                    <a href='/products'>Products</a>
                </div>
            </div>

        </SidebarContainer>
    );
}

const SidebarContainer = styled.div`
    width: 250px;
    height: 100vh;
    top: 70px;
    position: fixed;
    background: #1b2c3f;

    
    .content{
        color: white;
        
        .nav-links{
            margin-top: 30px;
            
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
        }
    }
    
`;




