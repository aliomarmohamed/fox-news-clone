import { Link } from "react-router-dom"
import fox from "../assets/fox.png"
import lens from "../assets/lens.jpg"
import { signOut } from "firebase/auth"
import { auth } from "../firebase/setup"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"

type searchProp = {
    setSearch: any,
    setMenu: any
}

const Navbar = (props: searchProp) => {

    const [searchView, setSearchView] = useState(false)

    const logout = async () => {
        try {
            await signOut(auth)
            auth ?.currentUser == null && toast.success("LoggedOut successfully")
    } catch (err) {
            console.error(err)
            const error: any = err
            toast.error(error)
        }
    }

    return (
        <>
            <ToastContainer autoClose={3000} />
            <div className="w-screen">
                <img src={fox} className="h-20 w-24 absolute z-20 mt-3 ml-5 bg-white p-0.5" />
                <div className="flex bg-blue-950 text-white font-bold text-sm h-12 pt-4 pl-36">
                    <h1 onClick={() => props ?.setMenu("US")} className="cursor-pointer">U.S.</h1>
                    <h1 onClick={() => props ?.setMenu("Politics")} className="ml-7 cursor-pointer">Politics</h1>
                    <h1 onClick={() => props ?.setMenu("World")} className="ml-7 cursor-pointer">World</h1>
                    <h1 onClick={() => props ?.setMenu("Opinion")} className="ml-7 cursor-pointer">Opinion</h1>
                    <h1 onClick={() => props ?.setMenu("Media")} className="ml-7 cursor-pointer">Media</h1>
                    <h1 onClick={() => props ?.setMenu("Entertainment")} className="ml-7 cursor-pointer">Entertainment</h1>
                    <h1 onClick={() => props ?.setMenu("Sports")} className="ml-7 cursor-pointer">Sports</h1>
                    <h1 onClick={() => props ?.setMenu("Lifestyle")} className="ml-7 cursor-pointer">Lifestyle</h1>
                    <h1 onClick={() => props ?.setMenu("Video")} className="ml-7 cursor-pointer">Video</h1>
                    <h1 onClick={() => props ?.setMenu("AI")} className="ml-7 cursor-pointer">AI</h1>
                    {searchView && <input onChange={(e) => props ?.setSearch(e.target.value)} placeholder="Search fox news.com" className="ml-3 p-2 mb-2 outline-none text-black" />}
                    <img src={lens} onClick={() => setSearchView(!searchView)} className="w-10 h-6 mb-7 ml-2 cursor-pointer" />
                    <Link to="/login"><button className="pb-5 pl-3">Login</button></Link>
                    <Link to="/signup"><button className="pb-5 pl-3">Signup</button></Link>
                    <button onClick={logout} className="pb-5 pl-3 text-red-600">Logout</button>
                </div>
                <div className="flex bg-white text-blue-950 text-base pl-36 pt-4 font-bold">
                    <h1 onClick={() => props ?.setMenu("TRENDING")} className="text-red-600 cursor-pointer">TRENDING</h1>
                    <h1 onClick={() => props ?.setMenu("KNOCKED OFF")} className="ml-4 cursor-pointer">KNOCKED OFF</h1>
                    <h1 onClick={() => props ?.setMenu("AMAZING ART")} className="ml-4 cursor-pointer">AMAZING ART</h1>
                    <h1 onClick={() => props ?.setMenu("SNEAK ATTACK")} className="ml-4 cursor-pointer">SNEAK ATTACK</h1>
                    <h1 onClick={() => props ?.setMenu("TRUE CRIME")} className="ml-4 cursor-pointer">TRUE CRIME</h1>
                </div>
            </div>
        </>

    )
}

export default Navbar