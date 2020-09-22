import React, { Component } from 'react';
import Card from '../Card/Card';
import s from './CardList.module.scss';

class CardList extends Component {
    state = {
        label: '',
        eng: '',
        rus: ''
    };

    handleInputChangeEng = (e) => {
        this.setState({
            eng: e.target.value
        })
    };

    handleInputChangeRus = (e) => {
        this.setState({
            rus: e.target.value
        })
    };

    handleSubmitForm = (e) => {
        e.preventDefault();

        this.setState(({ eng, rus }) => {
            this.props.handleAddedItem(eng, rus);
            return {
                label: eng +' '+ rus,
                eng: '',
                rus: ''
            }
        })
    };

    render() {
        const {item = [], handleDeletedItem} = this.props;
        return (
            <>
                <div className={s.addWords}>
                    { this.state.label }
                </div>
                <form
                    className={s.form}
                    onSubmit={ this.handleSubmitForm }
                >
                    <input
                        type="text"
                        placeholder="Введите английское слово"
                        value={ this.state.eng }
                        onChange={ this.handleInputChangeEng }
                    />
                    <input
                        type="text"
                        placeholder="Введите русское слово"
                        value={ this.state.rus }
                        onChange={ this.handleInputChangeRus }
                    />
                    <button>
                        Добавить новое слово
                    </button>
                </form>
                <div className={s.root}>
                    {
                        item.map(({ eng, rus, id }) => (
                            <Card
                                handleDeleted={
                                    () => {
                                        handleDeletedItem(id);
                                    }
                                }
                                key={ id }
                                eng={ eng }
                                rus={ rus }
                            />
                        ))
                    }
                </div>
            </>
        )
    }
}

export default CardList;