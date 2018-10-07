import React from 'react';
import Avengers from './Avengers';

const AvengersList = (props) => {
    return(
        <div>
            {props.avengersData.map(avenger => {
                return(
                    <Avengers Avenger={avenger.name} key={avenger.id}>
                );
            })}
        </div>
    );
}