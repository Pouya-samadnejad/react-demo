import styles from "@/components/Post.module.css";
function Post({ writer, body }) {
  return (
    <div className={styles.cart}>
      <p className={styles.writer}>{writer}</p>
      <p className={styles.sentance}>{body}</p>
    </div>
  );
}

export default Post;
