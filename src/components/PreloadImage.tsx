import Head from "next/head";
import Image from "next/image";

type Props =
    {
        imgSrc: string | null | undefined;
        styleProps: string | null | undefined;
    }

export default function PreloadImage(props: Props) {
    var styles = `relative ${props?.styleProps}`;
    return (
        <>
            {/* <Head>
                <link rel="preload" fetchPriority="high" as="image" href={props?.imgSrc || ''} type="image/webp"></link>
            </Head> */}
            {/* <img className={props?.styleProps || ''} src={props?.imgSrc || ''} /> */}
            <div className={styles}>
                <Image
                    alt=''
                    fill
                    sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                    src={props?.imgSrc || ''}
                />
            </div>
        </>
    )
}