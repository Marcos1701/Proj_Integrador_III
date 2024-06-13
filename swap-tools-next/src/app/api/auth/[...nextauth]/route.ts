import axios from 'axios';
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { cookies } from 'next/headers';


const handler = NextAuth({
    pages:{
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error',
        verifyRequest: '/auth/verify-request',
        newUser: "/auth/new-user"
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if(!credentials){
                    return null;
                }

                try{
                    const data = await axios.post('http://localhost:3000/api/auth/signin', {
                        email: credentials.email,
                        password: credentials.password
                    },{
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })

                    if(data.status !== 200){
                        return null;
                    }
                    cookies().set('token', data.data.token, {
                        expires: 1
                    }
                    )
                return {
                    id: data.data.id,
                    name: data.data.name,
                    email: data.data.email,
                    image: data.data.image
                }
                }catch(err){
                    return null;
                }
            }
        })
    ]

})

export { handler as GET, handler as POST }