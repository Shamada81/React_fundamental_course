import React from 'react';
import classes from './MySelect.module.css';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
            <select
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                <option value="" disabled >{defaultValue}</option>
                { options.map(option =>
                    <option value={option.value} key={option.value}>
                        {option.name}
                    </option>)
                }
            </select>
    );
};

export default MySelect;