
import Post from "./Post"


const PostsList: React.FC = () => {

    const posts: object[] = [
        {
            title: 'Title',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
        },

    ]

    return (
        <div>
        {posts.map((article: any) => (
            <Post title={article.titre} content={article.content}  />
        ))}
        </div>
    )
}

export default PostsList