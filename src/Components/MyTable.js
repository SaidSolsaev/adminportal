import React from 'react'
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import {TableData} from "../Data/TableData"


export default function MyTable() {
    return (
        <Container>
            <Table style={{border: "1px solid black"}}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Sold</th>
                        <th>Bought</th>
                        <th>Sum</th>
                    </tr>
                </thead>

                <tbody>
                    {TableData.map((obj, index) => (
                        <tr>
                            <td>{obj.date}</td>
                            <td>{obj.sold}</td>
                            <td>{obj.bought}</td>
                            <td>{obj.sum}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

const Container = styled.div`

`;
