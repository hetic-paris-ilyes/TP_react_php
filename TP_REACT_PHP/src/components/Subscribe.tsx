import { useState } from "react"


interface SubscribeProps {

    setEmail: React.Dispatch<React.SetStateAction<any>>
    setPassword: React.Dispatch<React.SetStateAction<any>>,
    setUse: React.Dispatch<React.SetStateAction<any>>,
    email: string,
    password: string,
    type: any,
}

const Subscribe: React.FC<SubscribeProps> = ({setEmail, setPassword, email, password, setUse, type}) => {

    const [newEmail, setNewEmail] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')

    const emailHandler = (e: any) => { setNewEmail(e.target.value) }
    const pwHandler = (e: any) => { setNewPassword(e.target.value) }
    const submitHandler = (e: any) => {
        e.preventDefault()
        setEmail(newEmail)
        setPassword(newPassword)

        setUse('register')
        console.log(email, password)
        console.log(type)
    }


    return (
        <div>
        <form onSubmit={submitHandler} >
        <h2>>S'inscrire</h2>
        <input type='text' onChange={emailHandler} value={newEmail}/>
        <label>E-Mail</label>
        <input type='text' onChange={pwHandler} value={newPassword}/>
        <label>Mot de passe</label>
        <button type="submit">>S'inscrire</button>
      </form>
        </div>
    )
}

export default Subscribe