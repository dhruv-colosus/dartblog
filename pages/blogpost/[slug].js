import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import styles2 from "../../styles/BlogPost.module.css";
import * as fs from "fs";

const Slug = (props) => {
  const router = useRouter();
  console.log(router.query);
  // const { slug } = router.query;

  const [data, setData] = useState(props.myBlog);
  console.log(data);
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
        <p></p>
        <main className={styles2.main}>
          <h1>{data && data.title}</h1>

          <p className={styles2.desc}>{data && data.content}</p>
        </main>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  let allb = await fs.promises.readdir(`blogdata`);
  allb = allb.map((item) => {
    return { params: { slug: item.split(".")[0] } };
  });

  console.log(allb);
  return {
    paths: allb,
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
  myBlog = JSON.parse(myBlog);

  return {
    props: { myBlog }, // will be passed to the page component as props
  };
}

// export async function getServerSideProps(context) {
//   console.log("Start of context");
//   console.log(context.query.slug);

//   let file = await fs.promises.readFile(
//     `blogdata/${context.query.slug}.json`,
//     "utf-8"
//   );

//   JSON.parse(file);
//   console.log("Contents of File");
//   console.log(file);

//   return {
//     props: { file }, // will be passed to the page component as props
//   };
// }

export default Slug;
