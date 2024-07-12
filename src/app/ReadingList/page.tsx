import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReadingList } from "@/components/ReadingList";
import { BlogPostData, GetReadingListData } from "@/data/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Reading List | Legion of Wholeness',
};

export default async function Page() {
    var readingList: BlogPostData = {};
    await GetReadingListData()
        .then((blogData) => {
            readingList = blogData;
        })
        .catch((error) => {
            //console.log(`Error: ${error}`)
        });

    return (
        <>
            <Header />
            <ReadingList post={readingList} />
            <Footer />
        </>
    )
}