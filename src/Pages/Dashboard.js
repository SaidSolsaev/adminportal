import React from 'react'
import styled from 'styled-components'
import MyCard from '../Components/Card'
import { Col } from 'react-bootstrap'
import TableCard from '../Components/TableCard'
import ChartCard from '../Components/ChartCard'
import MyTable from '../Components/MyTable'


export default function Dashboard() {
    
    return (
        <Container>
            {/* <div className='page-topbar'>
                <Header />
            </div>
            <div className='sidebar'>
                <Sidebar />
            </div> */}
            
            <div className='main-content'>
                <div className='page-content'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <Col>
                                <h4>Dashboard</h4>
                            </Col>
                        </div>

                        <div className='row'>
                            <Col>
                                <MyCard title="Inntekt" text="2.2k" />
                            </Col>
                            <Col>
                                <MyCard title="Inntekt" text="2.2k" />
                               
                            </Col>
                            <Col>
                                <MyCard title="Inntekt" text="2.2k" />  
                            </Col>
                            <Col>
                                <MyCard title="Inntekt" text="2.2k" />  
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
    height: 100vh;
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
`;