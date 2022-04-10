import { useState } from "react"


interface AddPostProps {

    setTitle: React.Dispatch<React.SetStateAction<string>>,
    setContent: React.Dispatch<React.SetStateAction<string>>,
    setUse: React.Dispatch<React.SetStateAction<any>>
}

const AddPost: React.FC<AddPostProps> = ({setTitle, setContent, setUse}) => {

    const [newTitle, setNewTitle] = useState<string>('')
    const [newContent, setNewContent] = useState<string>('')

    const titleHander = (e: any) => {setNewTitle(e.target.value) }
    const texteHandler = (e: any) => {setNewContent(e.target.value)}

    const submitPost = (e: any) => {
        e.preventDefault()
        setTitle(newTitle)
        setContent(newContent)
        setUse('AddPost')
    }




    return (
        <form onSubmit={submitPost}>
            <label>Ecrire un Post</label>
            <input type="text" value={newTitle}  onChange={titleHander} />
            <label>Texte</label>
            <input type="text" value={newContent} onChange={texteHandler} />
            <button type="submit">Done</button>
        </form>
    )
}

export default AddPost