// Write your code here

import './index.css'

const CommentItem = props => {
  const {eachComment, deleteComment} = props
  const {name, comment, date, bgColor, id, isLike} = eachComment

  console.log(bgColor)
  const removeComment = () => {
    deleteComment(id)
  }

  const likeOrUnlike = () => {
    const {toggle} = props
    toggle(id)
  }

  const changeImage = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="commentContainer">
      <div className="inRow">
        <div className={bgColor}>{name[0]}</div>
        <h1 className="name">{name}</h1>
        <p className="commentStyle">{date}</p>
      </div>
      <p className="commentModify">{comment}</p>
      <div className="lastRowContainer">
        <div className="likeButtonContainer">
          <button type="button" className="likeButton" onClick={likeOrUnlike}>
            <img src={changeImage} alt="like" className="likeImage" />
          </button>
          <p className="likePara">like</p>
        </div>
        <button
          type="button"
          className="likeButton deleteButton"
          onClick={removeComment}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="deleteImage"
          />
        </button>
      </div>
      <hr className="commentLine" />
    </li>
  )
}

export default CommentItem
