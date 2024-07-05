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
                <link rel="preload" href={props?.imgSrc || ''} as="image" />
            </Head>
            <img className={props?.styleProps || ''} src={props?.imgSrc || ''} />
        </>
    )
}