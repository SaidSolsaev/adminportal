import {query,collection,onSnapshot} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import { db } from '../firebase-config';

function GetSoldSum(place, month){
    const [sumArr, setSumArr] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'soldItems'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let arr = [];
            querySnapshot.forEach((doc) => {
            arr.push({ ...doc.data(), id: doc.id });
            });
            setSumArr(arr);
        });
        return () => unsubscribe();
    }, []);

    let tot = 0;
    sumArr.map((item, index) => {
        const date = new Date(item.date).getMonth();
        if (date === parseInt(month) && place === item.place){
            tot += parseInt(item.price)
        }
    })

    return tot;
}

const TableData = [
    {
        date: "03.06.2023",
        sold: 8,
        bought: 14,
        sum: 200
    },
    {
        date: "03.06.2023",
        sold: 8,
        bought: 14,
        sum: 200
    },
    {
        date: "03.06.2023",
        sold: 8,
        bought: 14,
        sum: 200
    },
    {
        date: "03.06.2023",
        sold: 8,
        bought: 14,
        sum: 200
    },
    {
        date: "03.06.2023",
        sold: 8,
        bought: 14,
        sum: 200
    },
    {
        date: "03.06.2023",
        sold: 8,
        bought: 14,
        sum: 200
    },
    {
        date: "03.06.2023",
        sold: 8,
        bought: 14,
        sum: 200
    },
    {
        date: "03.06.2023",
        sold: 8,
        bought: 14,
        sum: 200
    },
    {
        date: "03.06.2023",
        sold: 8,
        bought: 14,
        sum: 200
    },
    {
        date: "03.06.2023",
        sold: 8,
        bought: 14,
        sum: 200
    },
];

export {TableData, GetSoldSum}

//Trenger ikke denne