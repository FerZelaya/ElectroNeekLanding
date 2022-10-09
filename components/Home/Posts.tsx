import Image from "next/image";
import React from "react";
import { InitialPosts } from "../../constants/Posts";
import styles from "../../styles/Posts.module.css";

const Posts: React.FC = () => {
  return (
    <div className={styles.postsContainer}>
      {InitialPosts.map((post, index) => {
        return (
          <div key={index} className={styles.postBox}>
            {/* <Image
              className={styles.postImage}
              alt="Post"
              src={post.image}
              layout="fill"
            /> */}
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
