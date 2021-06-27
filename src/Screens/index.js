import React from 'react'
import { isMobileDevice } from '../utils'
import Laptop from './laptop';
import Mobile from './mobile';

export default function Screens({...props}) {
    return (
        <>
        {isMobileDevice() ? (
            <Mobile/>
        ): (
            <Laptop/>
        )}
        </>
    )
}
