import { cookies } from "next/headers"
import { redirect } from "next/navigation";


export const fetchServer = async (
    input: string | URL | Request,
    init?: RequestInit | undefined
): Promise<Response> => {

    const jwt = cookies().get('jwt');

    const data = await fetch(input, {
        ...init,
        headers: {
            ...init?.headers,
            ...(jwt && {Authorization: `Bearer ${jwt.value}`}),
        }
    })

    if(data.status === 401){
        cookies().delete('jwt');
        redirect('/auth/signin');
    }
    
    // const response = await data.json();
    return data;
}