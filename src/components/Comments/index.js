import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import './index.css'
import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {name: '', comment: '', count: 0, commentsList: []}

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundColor = `initialBox ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: formatDistanceToNow(new Date()),
      bgColor: initialBackgroundColor,
      isLike: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      count: prevState.count + 1,
      name: '',
      comment: '',
    }))
  }

  enterName = event => {
    this.setState({name: event.target.value})
  }

  enterComment = event => {
    this.setState({comment: event.target.value})
  }

  toggle = id => {
    const {commentsList} = this.state
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...commentsList, isLike: !eachComment.isLike}
        }
        return commentsList
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const list = commentsList.filter(eachComment => eachComment.id !== id)
    this.setState({commentsList: list})
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    const {count} = this.state
    const {commentsList} = this.state
    return (
      <div className="container">
        <h1 className="heading">Comments</h1>
        <div className="imageContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="photo"
            alt="comments"
          />
        </div>
        <p className="para">Say something about 4.0 Technologies</p>
        <form onSubmit={this.addComment}>
          <input
            type="text"
            placeholder="  Your Name"
            className="inputElement"
            onChange={this.enterName}
          />
          <input
            type="text"
            placeholder="Your Comment"
            className="commentBox"
            onChange={this.enterComment}
          />
          <button className="btn" type="submit">
            Add Comment
          </button>
        </form>
        <hr className="line" />
        <p className="comments">
          {' '}
          <span className="number">{count}</span> Comments
        </p>
        <ul className="unOrderedListContainer">
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              eachComment={eachComment}
              toggle={this.toggle}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
