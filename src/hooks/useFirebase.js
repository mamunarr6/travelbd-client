import { useEffect, useState } from "react"
import initailizeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

initailizeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState();
    const [tour, setTour] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();


    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe();
    }, [])

    const loginUsingGoogle = () => {
        setIsLoading(true)
        const googlProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googlProvider)
    }

    //Log out from website
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        })
            .finally(() => setIsLoading(false));
    }

    //load all data of tour
    useEffect(() => {
        fetch('https://spooky-zombie-25747.herokuapp.com/tour')
            .then(res => res.json())
            .then(result => setTour(result))
    }, [])


    return {
        user, setUser,
        error, setError,
        loginUsingGoogle,
        logOut, tour, setTour,
        isLoading, setIsLoading
    }
}

export default useFirebase;