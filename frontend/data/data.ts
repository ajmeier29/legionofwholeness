import axios from 'axios';
import { ReactNode } from 'react';

// type Content =
//     {
//         value: string;
//         type: string;
//     }
// type CreatedOn =
//     {
//         seconds: number;
//         nanoseconds: number
//     }
// type BlogPostData =
//     {
//         ID?: string,
//         publish_date?: string,
//         tags?: string[],
//         title?: string,
//         description?: string,
//         content?: Content[],
//         status?: 'draft' | 'published',
//         created_on?: CreatedOn,
//         header_image?: string,
//         header_image_full?: string,
//         reviewed?: boolean,
//         filePath?: string
//     }

type BlogPostData =
    {
        ID?: string,
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


// This function will fetch all of the data needed to show
// the list of blog posts ohn the homepage. 
export const getPosts = async (): Promise<BlogPostData[]> => {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_POSTS_URL || ''); // Make the API request
        return response.data.data; // Return the data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Handle any errors (optional)
    }
}

export type { BlogPostData };

