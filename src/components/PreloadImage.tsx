import Head from "next/head";
import Image, { StaticImageData } from "next/image";

type Props =
    {
        imgSrc: string | null | undefined;
        alt?: string;
        styleProps: string | null | undefined;
    }

export default function PreloadImage(props: Props) {
    var styles = `relative ${props?.styleProps}`;
    return (
        <>
            <div className={styles}>
                <Image
                    alt={props?.alt ?? ''}
                    fill
                    sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                    src={props?.imgSrc || ''}
                />
            </div>
        </>
    )
}

type StaticProps =
    {
        imgSrc: StaticImageData | null | undefined;
        alt?: string;
        styleProps: string | null | undefined;
    }

const PreloadStaticImage = (props: StaticProps) => {
    var styles = `relative ${props?.styleProps}`;
    return (
        <>
            <div className={styles}>
                <Image
                    alt=''
                    fill
                    sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                    src={props?.imgSrc || ''}
                    style={{
                        objectFit: 'cover'
                    }}
                />
            </div>
        </>
    )
}

export { PreloadStaticImage }