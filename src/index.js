import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import faker from 'faker'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail name={faker.name.firstName()} img={faker.image.avatar()} time={faker.date.recent()} content={faker.lorem.words()} />
            <CommentDetail name={faker.name.firstName()} img={faker.image.avatar()} time={faker.date.recent()} content={faker.lorem.words()} />
            <CommentDetail name={faker.name.firstName()} img={faker.image.avatar()} time={faker.date.recent()} content={faker.lorem.words()} />
            
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));


