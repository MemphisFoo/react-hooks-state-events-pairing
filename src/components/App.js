import React, { useState } from "react"
import video from "../data/video.js";
import Comments from "./Comments";
import Button from "./Button"

function App() {

  const [commentsOn, setCommentsOn] = useState(true)
  const [addLikes, setAddLikes] = useState([video.upvotes]);
  const [addDislikes, setAddDislikes] = useState([video.downvotes]);

  function handleUpvotes() {
    setAddLikes((addLikes) => parseInt(addLikes) + 1)
  };

  function handleDownvotes() {
    setAddDislikes((addDislikes) => parseInt(addDislikes) + 1)
  };

  function handleCommentsClick() {
    setCommentsOn((commentsOn) => !commentsOn)
  }


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h2>{video.title}</h2>
      <small>{video.views} Views | Uploaded {video.createdAt}</small> <br /> <br />
      <div>
        <Button value={addLikes} emoji=" 👍 " onLikeClick={handleUpvotes} />
        <Button value={addDislikes} emoji=" 👎 " onLikeClick={handleDownvotes} />
      </div> <br />
      <div>
        <button onClick={handleCommentsClick}> {commentsOn ? "Hide" : "Show"} Comments
        </button>
      </div>
      <hr />
      <Comments commentsOn={commentsOn} comments={video.comments} />
    </div>
  );
}

export default App;
