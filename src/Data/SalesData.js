import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import {query,collection,onSnapshot} from 'firebase/firestore';


function SalesData(){
    const [soldProducts, setSoldProducts] = useState([]);
    // const [boughtProducts, setBoughtProducts] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'soldItems'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let arr = [];
            querySnapshot.forEach((doc) => {
            arr.push({ ...doc.data(), id: doc.id });
            });
            setSoldProducts(arr);
        });
        return () => unsubscribe();
    }, []);
    
    let tot = 0;
    soldProducts.map((obj, index) => (
        tot += parseInt(obj.price)
    ))

    return tot;
}

function ThisMonthSale(month){
    const [soldProducts, setSoldProducts] = useState([])

    useEffect(() => {
        const q = query(collection(db, 'soldItems'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let arr = [];
            querySnapshot.forEach((doc) => {
            arr.push({ ...doc.data(), id: doc.id });
            });
            setSoldProducts(arr);
        });
        return () => unsubscribe();
    }, []);
    
    let tot = 0;
    soldProducts.map((item, index) => {
        const date = new Date(item.date).getMonth()
        if (date === month){
            tot += parseInt(item.price) 
        }
    })
    return tot;
}



export {SalesData, ThisMonthSale}
