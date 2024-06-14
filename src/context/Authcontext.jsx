import { useEffect, useState, useContext, createContext } from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    updatePassword,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const UserAuth = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);   // by default, loading is true
    const [memberIndex, setMemberIndex] = useState(0);  // the index of the selected member under this user/email

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const changePassword = (password) => {
        return updatePassword(user, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setMemberIndex(0);
            //        let userData = null;
            //        currentUser?.email? (userData = fetchData(currentUser.email)):(userData=null);
            setLoading(false);      // set loading to false when user is set (auth is completed by firebase)
            console.log("Authcontext: user: ", currentUser);
            //        console.log("userData: ", userData);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const value = {
        googleSignIn,
        logOut,
        signup,
        login,
        resetPassword,
        changePassword,
        user,
        memberIndex,
        setMemberIndex
    };

    return (
        <AuthContext.Provider value={value}>
            {   /* only render the children when loading is completed; firebase needs some time to load the auth info. */
                !loading && children
            }
        </AuthContext.Provider>
    )
}


// export async function FetchData(userEmail) {
//     let user = null;

//     const ref = doc(db, "users", userEmail);
//     try {
//         const docSnap = await getDoc(ref);
//         docSnap.exists&& (user = docSnap.data());
//     } catch (error) {
//         console.log(error);
//     }
//     console.log("FetchData: ", user);
//     return { user };
// }

