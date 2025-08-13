import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {

    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            window.location.href = "/";
            // Sign-out successful.
        })
            .catch((error) => {
                console.log(error);

            });
    };

    return (
        <div className="absolute z-20 px-8 py-2 bg-gradient-to-b from-black w-screen flex justify-between items-center">
            {/* Left - Logo */}
            <img
                className="w-44"
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
