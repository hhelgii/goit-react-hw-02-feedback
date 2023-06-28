import React from 'react';
import propTypes from 'prop-types';
export const Notification=({message})=>{
    return (
        <h3>{message}</h3>
    )

}
Notification.propTypes={
    message: propTypes.string.isRequired
}