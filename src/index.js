import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            < ApprovalCard />
            <CommentDetail name={faker.name.firstName()} img={faker.image.avatar()} time="Today at 5:33PM" content={faker.lorem.words()} />
            <CommentDetail name={faker.name.firstName()} img={faker.image.avatar()} time="Today at 12:15PM" content={faker.lorem.words()} />
            <CommentDetail name={faker.name.firstName()} img={faker.image.avatar()} time="Today at 7:11AM" content={faker.lorem.words()} />
            
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));


