import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import styles2 from "../../styles/BlogPost.module.css";

const slug = (props) => {
  const router = useRouter();
  console.log(router.query);
  // const { slug } = router.query;

  const [data, setData] = useState(props.BlogData);
  // useEffect(() => {
  //   if (!router.isReady) return;
  //   console.log("UseEffect is working");
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       setData(parsed);
  //     });
  // }, [router.isReady]);

  return (
    <>
      <div className={styles.container}>
        <main className={styles2.main}>
          <h1>{data.title}</h1>

          <p className={styles2.desc}>{data.content}</p>
        </main>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  console.log("Start of context");
  console.log(context.query.slug);

  let Data = await fetch(
    `http://localhost:3000/api/getblog?slug=${context.query.slug}`
  );

  let BlogData = await Data.json();

  return {
    props: { BlogData }, // will be passed to the page component as props
  };
}

export default slug;
