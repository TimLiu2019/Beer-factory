import React, { useEffect, useState } from "react";
import { getBeers } from "../services/beerService";

const Dashboard = () => {
    const[beers,setBeers] = useState([])
    useEffect(()=>{
        getBeers().then(res=>{
            setBeers(res.data)
            console.log('get beers',res.data)
        })
    },[])



    return (
        <div>
            
        </div>
    );
};

export default Dashboard;

