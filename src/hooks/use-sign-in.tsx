import { useEffect, useState } from "react"
import type {IUser} from "../shared/types/user"

export function useSignIn(userData: IUser){
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string|null>(null)
    const [jwt, setJwt] = useState<string|null>(null)

    useEffect(() => {
        const loginUser = async () => {
            try{
                setLoading(true)
                const response = await fetch("http://localhost:8000/login", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userData)
                })
                const data = await response.json()
                if (data.status === 500){
                    setError()
                }
                setJwt(data.token)
            }catch(error){
                console.error(error);
				if (error instanceof Error) {
					setError(error.message);
				} else {
					setError("Unknown error!");
				}
            }finally{
                setLoading(false)
            }
        }
        loginUser()
    }, [userData])

    return {jwt, error, loading}
}
