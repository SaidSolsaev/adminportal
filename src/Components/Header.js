import React from 'react'
import styled from 'styled-components'
import logo from "../Assets/strawberry-svgrepo-com.svg"
import MenuIcon from '@mui/icons-material/Menu';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Header({showSidebar, setShowSidebar}) {
    const handleLogout = () =>{
        window.localStorage.removeItem("@user");
        window.location.reload();
    }

    const handleSidebar = () =>{
        setShowSidebar(!showSidebar);
    }

    return (
        <HeaderContainer>
            <div className='navbar-header'>
                <div className='left-side'>
                    <div className={showSidebar ? "brand" : "smallBrand"}>
                        <a href='/'>
                            <span>
                                <img src={logo} alt='logo' />
                                <h4>Solsaevs Jordbær</h4>
                            </span>
                        </a>
                    </div>

                    <button className='icon-section' onClick={handleSidebar}>
                        <i><MenuIcon fontSize='large' /></i>
                    </button>

                    <form className='search-section'>
                        <div className='search-div'>
                            <input className='form-control' type='text' placeholder='Search...'/>
                            <span><SearchRoundedIcon /></span>
                        </div>

                    </form>
                </div>

                <div className='right-side'>
                    <div className='buttons-cont'>
                        <div>
                            <button>
                                <span>
                                    <NotificationsIcon />
                                    
                                </span>
                            </button>
                        </div>

                        <div>
                            <button>
                                <span>
                                    <Person2Icon />
                                </span>
                            </button>
                        </div>
                        <div>
                            <button>
                                <span>
                                    <SettingsIcon />
                                </span>
                            </button>
                        </div>
                        <div>
                            <button onClick={handleLogout}>
                                <span>
                                    <LogoutIcon />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    
    background: #fff;
    display: flex;

    .navbar-header{
        width: 100%;
        display: flex;
        height: 70px;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        padding: 0 12px 0 0;
    }

    .left-side{
        display: flex!important;
        align-items: center;
    }
    
    .brand{
        background: #1b2c3f;
        height: 70px;
        align-items: center;
        width: 250px;
        display: flex;
        justify-content: center;
        a{
            color: white;
            text-decoration: none;
        }
        span{
            display: flex;
            align-items: center;
            h4{
                margin: 0px;
            }
            img{
                width: 40px;
            }
        }
    }

    .smallBrand{
        background: #1b2c3f;
        height: 70px;
        align-items: center;
        width: 100px;
        display: flex;
        justify-content: center;
        
        img{
            width: 40px;
        }

        h4{
            display: none;
        }
    }

    .icon-section{
        cursor: pointer;
        padding: 4px 16px;
        border: none;
        background: none;
    }

    .search-section{
        padding: 20px 0;

        .search-div{
            position: relative;

            .form-control{
                border: none;
                background: #f1f5f7;
                height: 38px;
                padding-left: 40px;
                padding-right: 20px;
                box-shadow: none;
                display: block;
                background-clip: padding-box;
                width: 100%;
                border-radius: .25rem;
                line-height: 1.5;
            }

            span{
                position: absolute;
                font-size: 16px;
                line-height: 38px;
                top: 0;
                left: 13px;
                z-index: 10;
                color: #73788d;
            }
        }
    }

    .right-side{
        @keyframes fade{
            0%{
                right: -300px;
            }
            100%{
                right: 0px;
            }
        }
        .buttons-cont{
            position: relative;
            display: flex!important;
            animation-name: fade;
            animation-duration: 3s;
            

            div{
                display: inline-block!important;
                padding: 7.5px 12px;
                

                button{
                    background: none;
                    border: none;
                }

            }
        }
    }
    
    
`
