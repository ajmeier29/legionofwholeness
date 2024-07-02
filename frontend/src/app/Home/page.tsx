import { HomePage } from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import { BlogPostData, BlogPostDataD } from "../../../data/data";
import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

async function getData() {
  try {
    const res = await fetch(process?.env?.NEXT_PUBLIC_POSTS_URL || '');

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json(); // Parse the response as JSON
    // need to return .data until the json schema changes in /posts on the backend. 
    return data.data;
  } catch (error) {
    //console.error('Error fetching data:', error);
    return null; // Return a fallback value (e.g., empty array) or handle the error differently
  }
}


export default async function Page() {
  var blogs: BlogPostData[] | null = [];
  var blogsNew: BlogPostDataD[] | null = [];
  var blog: BlogPostData | null = {};

  const client = contentful.createClient({
    space: process?.env?.NEXT_PUBLIC_SPACE || '',
    environment: 'master', // defaults to 'master' if not set
    accessToken: process?.env?.NEXT_PUBLIC_ACCESS_TOKEN || ''
  })

  var d;

  client.getEntries()
    .then((entries: any) => {
      // const allData = entry.items; // Replace 'body' with your rich text field name
      entries.items.forEach((entry: any) => {
        blogsNew?.push(
          {
            ID: entry.sys.id,
            title: entry.fields.title,
            description: entry.fields.description.content[0].content[0].value,
            content: documentToHtmlString(entry.fields.content)
          }
        )
      });


      //const richTextContent = entry.fields.content;
      console.log(`allData: ${JSON.stringify(blogsNew)}`)
      // console.log(`rawRichTextFieldss: ${JSON.stringify(allData)}`)
      // console.log(`documentToHtmlString(rawRichTextFieldss): ${documentToHtmlString(richTextContent)}`)
      // return documentToHtmlString(richTextContent);
      return null;
    })
    .then((renderedHtml) => {
      // Do something with the HTML, like displaying it on a webpage
      //console.log(`renderedHtml: '${renderedHtml}'`);
    })
    .catch((error) => console.log(error));



  await getData()
    .then((data) => {
      blogs = data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
  return (
    <>
      <div className="relative z-50">
        <div className='absolute top-6 left-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
          <img className='h-20 w-15' src="/images/sowilo_rune_2.png" />
        </div>
        <div className='absolute top-4 right-2'>
          <Navbar />
        </div>
      </div>
      <HomePage blogPosts={blogs} />
    </>
  );
}