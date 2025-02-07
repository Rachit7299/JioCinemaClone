import "./header.css";
import JCLogo from "../../assets/jc_logo_v2.svg";
import Crown from "../../assets/crown.svg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faMicrophone, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export default function Header(){

    const navigate = useNavigate();

    const [searchInput,setSearchInput] = useState("");


    const navLinks =[
        {
            id: 1,
            name: "Home",
            link: "/"
        },
        {
            id: 2,
            name: "TV Shows",
            link: "/tv-shows"
        },
        {
            id: 3,
            name: "Movies",
            link: "/kids"
        },
        {
            id: 4,
            name: "Kids",
            link: "/kids"
        },
        {
            id: 5,
            name: "More",
            link: "/more"
        }
    ]

    return (
        <header className="bg-gray-950 border-b-2 border-gray-800 p-4 text-white flex gap-3">
            <img src={JCLogo} alt="Logo" className="ml-6 cursor-pointer" onClick={()=>navigate("/")}/>
            <button className="pt-0 pb-0 ps-4 pe-4 rounded-full text-sm border-2 text-white premium cursor-pointer">
                <img src={Crown} alt="Crown" className="inline-block mr-1 mb-1"/>
                Go Premium
            </button>
                <ul className="nav-links flex gap-4 ms-4 items-center">
                    {
                        navLinks.map((link) => {
                            return <li key={link.id} className="cursor-pointer font-bold opacity-50 hover:opacity-100" onClick={()=>navigate(link.link)}>{link.name}</li>
                        })
                    }
                </ul>
            <div className="search-bar ms-auto me-3 ps-4 rounded-full bg-gray-800 text-white">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="Movies, Shows and more" className="p-2 ps-3 pe-3 search-input w-2xs focus:outline-none" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
            </div>

            <div className="profile flex items-center justify-center w-11 h-11  me-6 rounded-full bg-gray-800 cursor-pointer object-center">
                <FontAwesomeIcon icon={faUser} className="text-2xl"/>
            </div>
        </header>
    )
}