import { useState } from "react"


interface SubscribeProps {

    setEmail: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setUse: React.Dispatch<React.SetStateAction<string>>,
    email: string,
    password: string
}

const Login: React.FC<SubscribeProps> = ({setEmail, setPassword, email, password, setUse}) => {

    const [email, setNewEmail] = useState<string>('')
    const [pw, setNewPassword] = useState<string>('')

    const handleEmail = (e: any) => {setNewEmail(e.target.value)}
    const handlePw = (e: any) => {setNewPassword(e.target.value)}
    const submitLogin = (e: any) => {
        e.preventDefault()
        setEmail(email)
        setPassword(pw)
        setUse('login')
    }


    return (
        <div>
        <form onSubmit={submitLogin} >
        <h2>Connexion</h2>
        <input type='text' onChange={handleEmail} value={email}></input>
        <input type='text' onChange={handlePw} value={pw}></input>
        <button>s'inscrire</button>
      </form>
        </div>
    )
}

export default Login