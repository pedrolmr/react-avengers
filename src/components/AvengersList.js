import React from 'react';
import Avengers from './Avengers';

const AvengersList = (props) => {
    return(
        <div className="list">
            {props.avengersData.map(avenger => {
                return(
                    <Avengers Avenger={avenger} />
                );
            })}
        </div>
    );
}
export default AvengersList;