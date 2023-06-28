import React from 'react';
import propTypes from 'prop-types';
import css from './statistics.module.css'
export const StatisticsItem=({rate, number})=>{
    return(
        <li className={css.statisticsItem}>
            <p>{rate}</p>
            <span>{number}</span>
        </li>
    )
}
StatisticsItem.propTypes={
    rate:propTypes.string.isRequired,
    number:propTypes.number.isRequired
}