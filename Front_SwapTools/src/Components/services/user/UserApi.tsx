
import axios from "axios";
import { User } from "../../entities/user/UserDetails";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../utils/firebaseConfig";


export interface AuthResponse {
  access_token: string;
  refresh_token: string;
}

const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider();

export const UserApi = {
    async getUser(acessToken: string): Promise<User | null> {
        const response = await axios.get<User>("http://localhost:3000/api/auth/me", {
            headers: {
                Authorization: `Bearer ${acessToken}`,
            },
        });
        return response.data;

    },

    async signIn(email: string, password: string): Promise<AuthResponse> {
        const response = await axios.post<AuthResponse>("http://localhost:3000/api/auth/login", { email, password });
        return response.data;
    },
    async signInWithGoogle(): Promise<AuthResponse>
    {
        const auth = getAuth(app);
        const user = await signInWithPopup(auth, provider);
        const token = await user.user.getIdToken();
        console.log(token);

        const result = await axios.post<AuthResponse>(`http://localhost:3000/api/auth/login-firebase/${token}`);
        return result.data;
    }
};