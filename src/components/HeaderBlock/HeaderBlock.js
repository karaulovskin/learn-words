import React from 'react';
import s from './HeaderBlock.module.scss';

const HeaderBlock = ({ hideBackground = false, children }) => {
    const styleObj = {
        marginTop: '100px',
        textAlign: 'center',
        color: '#333333',
        backgroundColor: 'transparent'
    };
    const styleCover = hideBackground ? styleObj : {};

    return (
        <div className={s.header} style={styleCover}>
            { children }
        </div>
    )
}

export default HeaderBlock