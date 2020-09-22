import React from 'react';
import s from './Title.module.scss';

const Title = ({ children }) => {
    return <h1 className={s.Title}>{ children }</h1>
};

export default Title