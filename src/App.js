import React, { Component } from 'react';
import HeaderBlock from './components/HeaderBlock/HeaderBlock';
import ContentBlock from './components/ContentBlock/ContentBlock';
import FooterBlock from './components/FooterBlock/FooterBlock';
import Title from './components/Title/Title';
import Paragraph from './components/Paragraph/Paragraph';
import CardList from './components/CardList/CardList';

export const wordsList = [
    {
        eng: 'between',
        rus: 'между',
        id: 1
    },
    {
        eng: 'high',
        rus: 'высокий',
        id: 2
    },
    {
        eng: 'really',
        rus: 'действительно',
        id: 3
    },
    {
        eng: 'something',
        rus: 'что-нибудь',
        id: 4
    },
    {
        eng: 'most',
        rus: 'большинство',
        id: 5
    },
    {
        eng: 'another',
        rus: 'другой',
        id: 6
    },
    {
        eng: 'much',
        rus: 'много',
        id: 7
    },
    {
        eng: 'family',
        rus: 'семья',
        id: 8
    },
    {
        eng: 'own',
        rus: 'личный',
        id: 9
    },
    {
        eng: 'out',
        rus: 'из/вне',
        id: 10
    },
    {
        eng: 'leave',
        rus: 'покидать',
        id: 11
    },
];

class App extends Component {
    state = {
        wordArr: wordsList,
    };

    handleDeletedItem = (id) => {
        this.setState(({ wordArr }) => {
            const idx = wordArr.filter((i) => i.id !== id);

            return {
                wordArr: idx
            }
        })
    };

    handleAddedItem = (eng, rus) => {
        this.setState(({ wordArr }) => {
            let idx = 0;
            wordArr.forEach((elem) => {
                idx += elem.id
            });
            const newWord = {
                eng: eng,
                rus: rus,
                id: idx
            };

            return {
                wordArr: [...wordArr, newWord]
            }
        })
    };

    render() {
        const { wordArr } = this.state;

        return (
            <>
                <div>
                    <HeaderBlock>
                        <Title>
                            React maraphon
                        </Title>
                    </HeaderBlock>
                    <HeaderBlock hideBackground>
                        <Title>
                            Начать учить английский просто
                        </Title>
                        <Paragraph>
                            Кликай по карточкам и узнавай новые слова, быстро и легко!
                        </Paragraph>
                    </HeaderBlock>
                </div>
                <ContentBlock>
                    <CardList
                        handleDeletedItem={this.handleDeletedItem}
                        handleAddedItem={this.handleAddedItem}
                        item={ wordArr }
                    />
                </ContentBlock>
                <FooterBlock
                    copyright="© 2020 Karaulovskin"
                />
            </>
        )
    }
}

export default App;
