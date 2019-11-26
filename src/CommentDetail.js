import React from 'react'
// import faker from 'faker'

const CommentDetail = (props) =>  {
    
    return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={props.img} alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.name}
                    </a>
                    <div className="metadata">
                        {console.log(props.time.first)}
                        <span className="date">{props.time.first}</span>
                    </div>
                    <div className="text">{props.content}</div>
                </div>
            </div>)
            
}

// class CommentDetail extends React.Component {
//     render() {
//     return (
//             <div className="comment">
//                 <a href="/" className="avatar">
//                     <img src={this.props.img} alt="avatar"/>
//                 </a>
//                 <div className="content">
//                     <a href="/" className="author">
//                         {this.props.name}
//                     </a>
//                     <div className="metadata">
//                         {console.log(this.props.time)}
//                         <span className="date">{this.props.time}</span>
//                     </div>
//                     <div className="text">{this.props.content}</div>
//                 </div>
//             </div>)
//             }
// }

export default CommentDetail;