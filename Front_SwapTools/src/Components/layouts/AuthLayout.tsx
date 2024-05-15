import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from "../../utils/firebaseConfig";

const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider();

export const AuthLayout = () => {
  const signInWithGoogle = async () => {
    const auth = getAuth(app);
    const user = await signInWithPopup(auth, provider);

    const token = await user.user.getIdToken()

    const result = await fetch(`http://localhost:3000/api/auth/teste-fire/${token}`, {
      method: 'POST',
    })

    console.log(result)
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};
