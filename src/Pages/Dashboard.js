import React from 'react'
import styled from 'styled-components'
import MyCard from '../Components/Card'
import { Col } from 'react-bootstrap'
import TableCard from '../Components/TableCard'
import ChartCard from '../Components/ChartCard'
import BarChartIcon from '@mui/icons-material/BarChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PaidIcon from '@mui/icons-material/Paid';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function Dashboard({showSidebar}) {
    
    return (
        <Container>
            {/* <div className='page-topbar'>
                <Header />
            </div>
            <div className='sidebar'>
                <Sidebar />
            </div> */}
            
            <div className={showSidebar ? 'main-content' : "bigSide"}>
                <div className='page-content'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <Col>
                                <h4>Dashboard</h4>
                            </Col>
                        </div>

                        <div className='row'>
                            <Col>
                                <MyCard title="This Month" text="25125" icon={<BarChartIcon color='primary'/>}/>
                            </Col>
                            <Col>
                                <MyCard title="Total Sale" text={215455} icon={<TrendingUpIcon color='secondary'/>}/>
                               
                            </Col>
                            <Col>
                                <MyCard title="Expense" text={20225} icon={<PaidIcon sx={{color: "red"}}/>}/>  
                            </Col>
                            <Col>
                                <MyCard title="Revenue" text={200140}icon={<AttachMoneyIcon color='success'/>}/>  
                            </Col>
                        </div>

                        <div className='row'>
                            <Col>
                                <ChartCard />
                            </Col>

                            <Col>
                                <TableCard />
                            </Col>
                        </div>
                    </div>
                </div>
            </div>
            
        </Container>
        
    )
}


const Container = styled.div`
    width: 100%;
    background-color: grey;
    
    .page-topbar{
        box-shadow: 0 1px 1px rgba(0,0,0, .08);
        left: 0;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1002;
    }


    .main-content{
        margin-left: 250px;
        overflow: hidden;

        

        .page-content{
            padding: 94px 12px 60px;
        
            .container-fluid{
                --bs-gutter-x: 12px;
                --bs-gutter-y: 0;
                margin-left: auto;
                margin-right: auto;
                padding-left: calc(var(--bs-gutter-x)*.5);
                padding-right: calc(var(--bs-gutter-x)*.5);
                width: 100%;

                .row{
                    display: flex;
                    flex-wrap: wrap;
                    padding-bottom: 20px;
                    .col{
                        padding: 0 12px;
                        
                    }
                }
            }
        }
    }

    .bigSide{
        margin-left: 100px;
        overflow: hidden;

        .page-content{
            padding: 94px 12px 60px;
        
            .container-fluid{
                --bs-gutter-x: 12px;
                --bs-gutter-y: 0;
                margin-left: auto;
                margin-right: auto;
                padding-left: calc(var(--bs-gutter-x)*.5);
                padding-right: calc(var(--bs-gutter-x)*.5);
                width: 100%;

                .row{
                    display: flex;
                    flex-wrap: wrap;
                    padding-bottom: 20px;
                    .col{
                        padding: 0 12px;
                        
                    }
                }
            }
        }
    }
`;