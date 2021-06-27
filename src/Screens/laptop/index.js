import React from 'react';
import { Router } from "@reach/router";
import { LaptopHomeDashboard } from '../../HOC/UseWithDashboard';
export default function Laptop({...props}) {
    return (
        <Router>
            <LaptopHomeDashboard path="/*" {...props}/>
            <LaptopHomeDashboard path="/home" {...props}/>
        </Router>
    )
}
