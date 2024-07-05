import Head from "next/head";

type Props =
    {
        imgSrc: string | null | undefined;
        styleProps: string | null | undefined;
    }

export default function PreloadImage(props: Props) {
    return (
        <>
            <Head>
                <link rel="preload" fetchPriority="high" as="image" href={props?.imgSrc || ''} type="image/webp"></link>
            </Head>
            <img className={props?.styleProps || ''} src={props?.imgSrc || ''} />
        </>
    )
}