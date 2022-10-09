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
            <Image
              width={1000}
              height={400}
              className={styles.postImage}
              alt="Post"
              src={post.image}
            />
            <div className={styles.postText}>
              <p>
                <span className={styles.boldText}>{post.text1}</span>{" "}
                {post.text2}
              </p>
            </div>
            <div className={styles.postArrow}>
              <Image src={post.arrow} alt="arrow" height={28} width={28} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
