import React from "react";
import Comment from "./Comment"

function Comments({ comments, commentsOn }) {
    console.log(commentsOn);
    const commentList = comments.map((comment) => <Comment key={comment.id} commentProp={comment} />)

    return (
        <div>
            <h2>{comments.length} Comments</h2>
            {commentsOn ? commentList : null}
        </div>
    )
}

export default Comments;