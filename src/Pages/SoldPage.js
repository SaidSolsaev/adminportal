import React from 'react'
import styled from 'styled-components'


export default function SoldPage() {
    return (
        <Container>
            <div className='main-content'>
                <div className='page-content'>
                    <div className='container-fluid'>
                        
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;

    .main-content{
        margin-left: 250px;
        overflow: hidden;

        .page-content{
            padding: 94px 12px 60px;
        }
    }
`;
