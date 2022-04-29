import {LoginResponseInterface} from "../Interface/ResponsesInterfaces";
import axios from "axios";

export default function useRegister() {
    return (username: string, password: string): Promise<LoginResponseInterface> => {
        return axios.post('http://localhost:2345/register.php', {
            withCredentials: true,
            auth: {
                username: username,
                password: password
            }
        })
            .then(res => res.data())
    }
}


