import { useEffect, useState } from "react";

export interface SignUpData{
    email: string;
    username: string;
    password: string;
}
interface JsonWebToken{
    token: string;
}
export function useSignUp(userData: SignUpData){
    const url = "http://localhost:8000/register" 
    const [data, setData] = useState<JsonWebToken | null>()
    const [error, setError] = useState<Error |null>()
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        async function connect(){
            setLoading(true)
            try{
                 const response = await fetch(
                url,
                {
                    method: "POST",
                    body: JSON.stringify(userData),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
                
            )
            const responseData = await response.json() as  JsonWebToken;
            setData(responseData)
            }
            catch(error){
                setError(error as Error)
            }
            finally{
                setLoading(false)
            }
           
        }
        connect()

    }, [userData])
    return {data, error, loading};
}
