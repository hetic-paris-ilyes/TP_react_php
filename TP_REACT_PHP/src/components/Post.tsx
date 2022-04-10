
interface Props {

    title: string,
    content: string
}

const Post: React.FC<Props> = ({title, content}) => {
    return (
        <div>
        <h2>{title}</h2>
        <p>{content}</p>
        </div>
    )
}

export default Post