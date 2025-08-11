import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react"

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700" />
        )}
        <input type="email" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-700" />
        <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700" />
        <button className="p-2 my-4 bg-red-700 w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}
export default Login