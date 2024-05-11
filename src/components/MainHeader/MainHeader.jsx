import styles from "@/components/MainHeader/MainHeader.module.css";
import { MdPostAdd, MdMessage } from "react-icons/md";
function MainHeader({ creatPost }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.Logo}>
        <MdMessage />
        React Poster
      </h1>
      <div>
        <button className={styles.btn} onClick={creatPost}>
          <MdPostAdd size={18} />
          Add Post
        </button>
      </div>
    </header>
  );
}

export default MainHeader;
