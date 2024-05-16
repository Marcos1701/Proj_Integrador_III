import { useAuth } from "../hooks/useAuth";

export const AuthLayout = () => {
  const auth = useAuth();

  const signInWithGoogle = async () => {
    try {
      await auth.signInWithGoogle();
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};
