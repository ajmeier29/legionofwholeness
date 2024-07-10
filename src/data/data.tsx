import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ReactNode } from 'react';

type BlogPostData =
    {
        ID?: string,
        author?: string,
        publish_date?: string,
        tags?: string[],
        title?: string,
        description?: string,
        content?: ReactNode,
        status?: 'draft' | 'published',
        created_on?: string,
        imageUrl?: string,
        reviewed?: boolean,
        filePath?: string
    }

// Gets all of the blog posts from the blogPosts collection in contentful
async function GetAllBlogPostData(): Promise<BlogPostData[]> {
    var blogs: BlogPostData[] | null = [];

    const client = contentful.createClient({
        space: process?.env?.NEXT_PUBLIC_SPACE || '',
        environment: 'master', // defaults to 'master' if not set
        accessToken: process?.env?.NEXT_PUBLIC_ACCESS_TOKEN || ''
    })

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
                        author: entry.fields.author,
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
        .catch((error) => {
            //console.log(error)
        });

    return blogs;
}

async function GetReadingListData(): Promise<BlogPostData> {
    var readingList: BlogPostData | null = {};

    const client = contentful.createClient({
        space: process?.env?.NEXT_PUBLIC_SPACE || '',
        environment: 'master', // defaults to 'master' if not set
        accessToken: process?.env?.NEXT_PUBLIC_ACCESS_TOKEN || ''
    })

    await client.getEntry(process?.env?.NEXT_PUBLIC_READING_LIST ?? '')
        .then((entry: any) => {
            // const allData = entry.items; // Replace 'body' with your rich text field name
            //console.log(JSON.stringify(entry))
            readingList =
            {
                ID: entry.sys.id,
                author: entry.fields.author,
                title: entry.fields.title,
                description: entry.fields.description.content[0].content[0].value,
                content: documentToReactComponents(entry.fields.content),
                imageUrl: 'https:' + entry.fields.image.fields.file.url,
                created_on: entry.fields.createdOn
            }

        })
        .catch((error) => {
            //console.log(error)
        });
    return readingList;
}

const options = {
    renderNode: {
        [BLOCKS.HEADING_1]: (node: any, children: any) => `<article className="prose prose-2xl">${children}}</article>`
    }
}

// Get a single blog posts data by the id
async function GetBlogPostData(id: string | null): Promise<BlogPostData> {
    var blogData: BlogPostData | null = {};

    const client = contentful.createClient({
        space: process?.env?.NEXT_PUBLIC_SPACE || '',
        environment: 'master', // defaults to 'master' if not set
        accessToken: process?.env?.NEXT_PUBLIC_ACCESS_TOKEN || ''
    })
    //console.log(`id: ${id}`)
    await client.getEntry(id ?? '')
        .then((entry: any) => {
            //console.log(`Entry: ${JSON.stringify(entry)}`)
            blogData = {
                ID: entry.sys.id,
                author: entry.fields.author,
                title: entry.fields.title,
                description: entry.fields.description.content[0].content[0].value,
                content: documentToReactComponents(entry.fields.content),
                imageUrl: 'https:' + entry.fields.image.fields.file.url,
                created_on: entry.fields.createdOn
            }

        })
        .catch((error) => {
            //console.log(error)
        });

    return blogData;
}

export { GetAllBlogPostData, GetBlogPostData, GetReadingListData }
export type { BlogPostData };