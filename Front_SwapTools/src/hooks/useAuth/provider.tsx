import { createContext, ReactNode, useEffect, useState } from "react";
import { User } from "../user/UserDetails";
import { UserApi } from "../user/UserApi";

export interface Auth {
    user: User | null;
    loading: boolean;
    signIn(email: string, password: string): Promise<void>;
    signInWithGoogle(): Promise<void>;
    signOut(): Promise<void>;
}

export const AuthContext = createContext<Auth>({
    user: null,
    loading: true,
    signIn: async (_email: string, _password: string) => {},
    signInWithGoogle: async () => {},
    signOut: async () => {},
});

export const AuthProvider = ( {children }: {children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            //obtendo o access_token do localStorage
            const access_token = localStorage.getItem("access_token");
            //se o access_token existir, então obter o usuário
            if (access_token) {
                const user = await UserApi.getUser(access_token);
                setUser(user);
            }
            //seja qual for o caso, o loading será false
            setLoading(false);
        })();
    }, []);

    const signIn = async (email: string, password: string) => {
        const {access_token, refresh_token} = await UserApi.signIn(email, password);
        const user = await UserApi.getUser(access_token);
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", refresh_token);
        setUser(user);
    };

    const signOut = async () => {
        localStorage.removeItem("access_token");
        setUser(null);
    };

    const signInWithGoogle = async () => {
        const {access_token, refresh_token} = await UserApi.signInWithGoogle();
        const user = await UserApi.getUser(access_token);
        console.log(user)
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", refresh_token);
        setUser(user);
    }

    return (
        <AuthContext.Provider value={{ user, loading, signIn, signInWithGoogle ,signOut }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};