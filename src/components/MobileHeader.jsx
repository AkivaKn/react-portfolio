import { IoMenu } from "react-icons/io5";

export default function MobileHeader({setShowMobileMenu,showMobileMenu}) {
    return (
        <div className="lg:hidden w-screen text-2xl">
        <div className="w-screen h-14 fixed inset-0 bg-gray-400">
            <p className="absolute left-3 top-3">Akiva Kaufman</p>
            <button onClick={()=> setShowMobileMenu(!showMobileMenu)} className="absolute right-3 top-3"><IoMenu/></button>
        </div>
        </div>
    )
}