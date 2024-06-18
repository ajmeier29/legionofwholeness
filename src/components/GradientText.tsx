

interface Props
{
    text: string,
    gradient: string,
    options?: string
}
// this component will display text using the gradiant
// used in the props
export default function GradiantText(props: Props) {
    return (
        <>
            <h2 className={`bg-${props.gradient} text-transparent bg-clip-text ${props.options}`}>{props.text}</h2>
        </>
    )
}