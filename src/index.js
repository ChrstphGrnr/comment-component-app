import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure we want to do this?
                </div>
            </ApprovalCard>
            < ApprovalCard>
                <CommentDetail name={faker.name.firstName()} img={faker.image.avatar()} time="Today at 5:33PM" content={faker.lorem.words()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail name={faker.name.firstName()} img={faker.image.avatar()} time="Today at 12:15PM" content={faker.lorem.words()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail name={faker.name.firstName()} img={faker.image.avatar()} time="Today at 7:11AM" content={faker.lorem.words()} />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));


