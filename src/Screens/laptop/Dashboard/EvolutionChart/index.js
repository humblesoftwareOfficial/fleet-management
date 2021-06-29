import React from 'react';
import { ContainerCharts, ContainerChart } from '../../../../Styling/Chart';
import EvolutionDepenses from './EvolutionDepenses';
import LocationEvolution from './LocationEvolution';
import VehiculeType from './VehiculeType';

export default function EvolutionChart() {
    return (
        <ContainerCharts>
            <ContainerChart>
                <LocationEvolution/>
            </ContainerChart>
            <ContainerChart>
                <VehiculeType/>
            </ContainerChart>
            <ContainerChart>
                <EvolutionDepenses/>
            </ContainerChart>
            <ContainerChart>
                <EvolutionDepenses/>
            </ContainerChart>
        </ContainerCharts>
    )
}
