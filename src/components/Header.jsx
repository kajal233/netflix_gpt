import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {LOGO} from "../utils/constants"

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {

        })
            .catch((error) => {
                console.log(error);

            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({
                    uid: uid, email: email, displayName: displayName, photoURL: photoURL,
                }))
                navigate("/browse")
            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });
        return () => unsubscribe();
    }, [])

    return (
        <div className="absolute z-20 px-8 py-2 bg-gradient-to-b from-black w-screen flex justify-between items-center">
            {/* Left - Logo */}
            <img
                className="w-44"
                src={LOGO}
                alt="logo"
            />
            {user && (

                <div className="flex items-center gap-4">
                    <img
                        className="w-12 h-12 rounded"
                        alt="userIcon"
                        src={user?.photoURL}
                    />
                    <button onClick={handleSignOut} className="text-white font-semibold hover:underline">
                        Sign Out
                    </button>
                </div>
            )}

        </div>
    );
};
export default Header;
