"use client";
import { useState } from "react";
import styles from "@/components/CreatPost/CreatPost.module.css";
function CreatPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState();
  const [enteredWriter, setEnteredWriter] = useState();
  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }
  function changeWriterHandler(event) {
    setEnteredWriter(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      writer: enteredWriter,
      body: enteredBody,
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <form action="" className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="Name" className={styles.label}>
        Name
      </label>
      <input
        type="text"
        name="name"
        id="writer"
        required
        className={styles.input}
        onChange={changeWriterHandler}
      />
      <label htmlFor="text" className={styles.label}>
        Text
      </label>
      <textarea
        name="Text"
        id=""
        cols="30"
        required
        rows="3"
        className={styles.textarea}
        onChange={changeBodyHandler}
      ></textarea>
      <div className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={styles.button}>Submit</button>
      </div>
    </form>
  );
}

export default CreatPost;
