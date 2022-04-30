import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import styles2 from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";

const Blog = (props) => {
  console.log(props);
  const [data, setData] = useState(props.allBlogs);

  return (
    <>
      <div className={styles.container}>
        <main className={styles2.main}>
          <div className={styles.blog}>
            <h1>Top Blogs of The Week</h1>

            {data.map((item) => {
              return (
                <div key={item.title} className={styles.blogItem}>
                  <Link href={`blogpost/${item.slug}`}>
                    <h3>{item.title}</h3>
                  </Link>
                  <p>{item.content.slice(0, 90)}</p>
                </div>
              );
            })}

            {/* <div className={styles.blogItem}>
              <h3>Javascipt Mastery</h3>
              <p>Javascipt to bahut khatarnak hai</p>
            </div>
            <div className={styles.blogItem}>
              <h3>Javascipt Mastery</h3>
              <p>Javascipt to bahut khatarnak hai</p>
            </div>
            <div className={styles.blogItem}>
              <h3>Javascipt Mastery</h3>
              <p>Javascipt to bahut khatarnak hai</p>
            </div> */}
          </div>
        </main>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  let files = await fs.promises.readdir(`blogdata`, "utf-8");
  let file;

  let allBlogs = [];

  for (let i = 0; i < files.length; i++) {
    const item = files[i];
    console.log(item + i);
    file = await fs.promises.readFile("blogdata/" + item, "utf-8");

    allBlogs.push(JSON.parse(file));
  }
  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}
export default Blog;
