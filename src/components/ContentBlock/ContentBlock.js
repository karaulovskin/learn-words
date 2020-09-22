import React from 'react';
import s from './ContentBlock.module.scss';

const ContentBlock = ({ children }) => {
    return (
        <div className={s.container}>
            { children }
        </div>
    )
}

export default ContentBlock