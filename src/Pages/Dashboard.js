import { useState } from "react"
import axios from "axios"
export default function DashBoard() {


    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")

    const [response, setResponse] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        axios.post("http://localhost:8080/posts", {
            title,
            author,
            content
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => {
            setResponse(data.data.message)
            setTimeout(() => {
                setResponse(null)
            }, 3000)
        })
    }

    return <>
        <div style={{textAlign: "left", padding: "15px"}}>
            <h2 style={{color: "#5A5A5A", }}>Dashboard</h2>
            

            {response && <p style={{color: "green", border:"2px solid green", padding: "4px"}}>{response}</p>}
            <hr></hr>
            <form onSubmit={(e) => handleSubmit(e)}>
            <h3>Create Post</h3>
            <p style={{margin: "4px"}}>Title</p>
            <input name="title" placeholder="title" autoComplete="off" value={title} onChange={(e) => {setTitle(e.target.value)}}></input>
            <p style={{margin: "4px"}}>Author</p>
            <input name="author" value={author} placeholder="author" autoComplete="off" onChange={e => setAuthor(e.target.value)}></input>
            <p style={{margin: "4px"}}>Content</p>
            <textarea name="content" style={{height: "40vh", width: "95vw"}} placeholder="# Post Title" autoComplete="off" onChange={e => setContent(e.target.value)}></textarea>
            <button style={{ outline: "none", borderRadius: "5px", "padding": "4px"}} type="submit">publish</button>
            </form>
        </div>
    </>
}