import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import styles2 from "../styles/Blog.module.css";
import Link from "next/link";

const Blog = (props) => {
  console.log(props);
  const [data, setData] = useState(props.blogData);

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
  let data = await fetch("http://localhost:3000/api/blogs");

  let blogData = await data.json();

  return {
    props: { blogData }, // will be passed to the page component as props
  };
}
export default Blog;
