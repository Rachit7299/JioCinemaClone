import "./header.css";
import JCLogo from "../../assets/jc_logo_v2.svg";
import Crown from "../../assets/crown.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

interface HeaderProps {
    setactiveLink: React.Dispatch<React.SetStateAction<string>>;
  }

  const Header: React.FC<HeaderProps> = ({ setactiveLink }) =>{

    const navigate = useNavigate();
    const location = useLocation();

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
            link: "/movies"
        },
        {
            id: 4,
            name: "Kids",
            link: "/kids"
        },
        {
            id: 6,
            name: "Sports",
            link: "/sports"
        },
        {
            id: 5,
            name: "More",
            link: "/more"
        }
    ]

    return (
        <header className="bg-gray-950 border-b-2 border-gray-800 p-0 text-white flex gap-3">
            <div className="p-4 flex gap-3 items-center">
            <img src={JCLogo} alt="Logo" className="ml-6 cursor-pointer flex" onClick={()=>{setactiveLink("Home");navigate("/")}}/>
            <button className="pt-0 pb-0 ps-4 pe-4 rounded-full text-sm border-2 text-white premium cursor-pointer">
                <img src={Crown} alt="Crown" className="inline-block mr-1 mb-1"/>
                Go Premium
            </button>
            </div>
                <ul className="nav-links flex gap-4 ms-4 items-center">
                    {
                        navLinks.map((link) => {
                            return <li key={link.id} className={`cursor-pointer font-bold transition-discrete nav-link h-full content-center opacity-50 hover:opacity-100 ${location.pathname===link.link? 'active':''}`} onClick={()=>{setactiveLink(link.name);navigate(link.link)}} >{link.name}</li>
                        })
                    }
                </ul>
            <div className="flex p-4 gap-4 ms-auto">
            <div className="search-bar me-3 ps-4 rounded-full bg-gray-800 text-white">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="Movies, Shows and more" className="p-2 ps-3 pe-3 search-input w-2xs focus:outline-none" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
            </div>

            <div className="profile flex items-center justify-center w-11 h-11  me-6 rounded-full bg-gray-800 cursor-pointer object-center">
                <FontAwesomeIcon icon={faUser} className="text-2xl"/>
            </div>
            </div>
        </header>
    )
}

export default Header;