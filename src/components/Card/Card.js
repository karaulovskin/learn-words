import React, { Component } from 'react';
import s from './Card.module.scss';
import cl from 'classnames';
import { CheckSquareOutlined, DeleteOutlined } from '@ant-design/icons';

class Card extends Component {

    state = {
        done: false,
        isRemembered: false
    };

    handleCardClick = () => {
        this.setState(({ done, isRemembered }) => {
            if (!isRemembered) {
                return {
                    done: !done,
                }
            }
        })
    };

    handleIsRememberClick = () => {
        this.setState(({ isRemembered }) => {
            return {
                done: true,
                isRemembered: true,
            }
        })
    };

    handleDeletedClick = () => {
        this.props.handleDeleted();
    };

    render() {
        const { eng, rus } = this.props;
        const { done, isRemembered } = this.state;

        const cardClass= [s.Card];
        if (done) {
            cardClass.push(s.done);
        }

        return (
            <div className={s.root}>
                <div
                    className={ cl(s.Card, {
                        [s.done]: done,
                        [s.isRemembered]: isRemembered
                    }) }
                    onClick={ this.handleCardClick }
                >
                    <div className={ s.CardInner }>
                        <div className={ s.CardFront }>
                            { eng }
                        </div>
                        <div className={ s.CardBack }>
                            { rus }
                        </div>
                    </div>
                </div>
                <div className={s.icons}>
                    <CheckSquareOutlined
                        onClick={ this.handleIsRememberClick }
                    />
                </div>
                <div className={s.icons}>
                    <DeleteOutlined
                        onClick={ this.handleDeletedClick }
                    />
                </div>
            </div>
        )
    }
}

export default Card