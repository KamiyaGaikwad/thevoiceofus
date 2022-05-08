import logo from "../image/logo2.png"
import Add from "./Add"
import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <nav className="nav-dark">
        <img src={logo} alt="Logo" className="brand-img"/>
        <h3 class="brand">TheVoiceOfUs</h3>
        <Link to="/addStory">
        <Add />
        </Link>
        <div className="profile"><img src="https://avatars.dicebear.com/api/avataaars/:shi.svg?mood[]=happy" alt="profile"  className="profile-img" /></div>
        </nav>
    )
}