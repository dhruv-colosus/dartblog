// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default async function handler(req, res) {
  let files = await fs.promises.readdir(`blogdata`, "utf-8");
  let file;

  let allBlogs = [];

  for (let i = 0; i < files.length; i++) {
    const item = files[i];
    console.log(item + i);
    file = await fs.promises.readFile("blogdata/" + item, "utf-8");

    allBlogs.push(JSON.parse(file));
  }
  res.status(200).json(allBlogs);

  // fs.readdir(`blogdata`, "utf-8", (err, files) => {
  //   if (err) {
  //     res.status(500).json({ error: "NO FILES FOUND" });
  //   }

  //   res.status(200).json(files);
  //   files.forEach((file) => {
  //     console.log(file);
  //   });
  // });
}
