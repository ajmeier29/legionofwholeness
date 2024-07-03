import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BlogPostData } from '../../data/data';


export default async function GetBlogPostData(): Promise<BlogPostData[]> {
    var blogs: BlogPostData[] | null = [];

    const client = contentful.createClient({
        space: process?.env?.NEXT_PUBLIC_SPACE || '',
        environment: 'master', // defaults to 'master' if not set
        accessToken: process?.env?.NEXT_PUBLIC_ACCESS_TOKEN || ''
    })

    var d;

    await client.getEntries({
        content_type: 'blogPosts', // Replace with your actual content type ID
        'fields.publish': true,
    })
        .then((entries: any) => {
            // const allData = entry.items; // Replace 'body' with your rich text field name
            entries.items.forEach((entry: any) => {
                blogs?.push(
                    {
                        ID: entry.sys.id,
                        title: entry.fields.title,
                        description: entry.fields.description.content[0].content[0].value,
                        content: documentToHtmlString(entry.fields.content),
                        imageUrl: 'https:' + entry.fields.image.fields.file.url,
                        created_on: entry.fields.createdOn
                    }
                )
            });
            //console.log(`allData: ${JSON.stringify(blogs)}`)
        })
        .catch((error) => console.log(error));

    return blogs;
}