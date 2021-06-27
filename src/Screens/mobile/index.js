import React from 'react';
import { Router } from "@reach/router";
import { MobileHomeDashboard } from '../../HOC/UseWithMobile';

export default function Mobile({...props}) {
    return (
        <Router>
            <MobileHomeDashboard path="/" {...props}/>
            <MobileHomeDashboard path="/dashboard" {...props}/>
        </Router>
    )
}
