"use client";

import { useState } from "react";
import Post from "../Post";
import CreatPost from "../CreatPost/CreatPost";
import styles from "@/components/NewPost/New.module.css";
import Modal from "../Modal/Modal";
function New({ isPosting, hidePost }) {
  const [addPost, setAddPost] = useState([]);
  function addPostHandler(postData) {
    fetch("http//localhost:8080/posts", {
      method: "Post",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setAddPost((existingPost) => [postData, ...existingPost]);
  }
  return (
    <>
      {isPosting ? (
        <Modal visibleModal={hidePost}>
          <CreatPost onCancel={hidePost} onAddPost={addPostHandler} />
        </Modal>
      ) : (
        false
      )}
      {addPost.length > 0 && (
        <ul className={styles.list}>
          {addPost.map((post) => (
            <Post key={post.body} writer={post.writer} body={post.body} />
          ))}
        </ul>
      )}
      {addPost.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There is no Post</h2>
          <p>add more Posts</p>
        </div>
      )}
    </>
  );
}

export default New;
