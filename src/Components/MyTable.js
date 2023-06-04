import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';

import { db } from '../firebase-config';
import {query, collection,onSnapshot} from 'firebase/firestore';

export default function MyTable() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'produkter'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let arr = [];
          querySnapshot.forEach((doc) => {
            arr.push({ ...doc.data(), id: doc.id });
          });
          setTableData(arr);
        });
        return () => unsubscribe();
    }, []);

    
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
                    {tableData.map((obj, index) => (
                        <tr key={index}>
                            <td>{obj.dato}</td>
                            <td>{obj.solgt}</td>
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
