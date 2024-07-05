import Header from "@/components/Header";
import { HomePage } from "@/components/HomePage";
import { BlogPostData, GetAllBlogPostData } from "@/data/data";


export default async function Page() {
  var blogs: BlogPostData[] = [];
  await GetAllBlogPostData()
    .then((blogData) => {
      blogs = blogData;
    })
    .catch((error) => {
      //console.log(`Error: ${error}`)
    });

  return (
    <>
      <Header />
      <HomePage blogPosts={blogs} />
    </>
  );
}