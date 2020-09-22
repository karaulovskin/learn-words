import React from 'react';
import s from './Paragraph.module.scss';

const Paragraph = ({ children }) => {
    return <p className={s.Paragraph}>{ children }</p>
};

export default Paragraph