import React from 'react';
import s from './FooterBlock.module.scss';

const FooterBlock = ({ copyright }) => {
    return (
        <div className={s.footer}>
            <p>{copyright}</p>
        </div>
    )
}

export default FooterBlock