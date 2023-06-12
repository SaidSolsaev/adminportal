import {query,collection,onSnapshot} from 'firebase/firestore';
import {useEffect, useState} from 'react';
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
        const date = new Date(item.date).getMonth()+1;
        if (date === parseInt(month) && place === item.place){
            tot += parseInt(item.price)
        }
        console.log(date, "data date")
    })

    return tot;
}

function GetForMonth(place ,month){
    var tåsen = GetSoldSum("Tåsen", month)
    var ulleval = GetSoldSum("Ullevål", month)
    var marienlyst = GetSoldSum("Marienlyst", month)
    
    if (place === "Tåsen"){
        return tåsen.toFixed(2)
    } else if (place === "Ullevål"){
        return ulleval.toFixed(2)
    } else if (place === "Marienlyst"){
        return marienlyst.toFixed(2)
    } else{
        console.log("No such place")
    }
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

export {TableData, GetForMonth, GetSoldSum}

//Trenger ikke denne