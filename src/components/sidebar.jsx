import { Link } from "react-router-dom";
export default function SideBar(){
return(
    <div class="sidenav">
        <Link to="/" class="link"><li class="side-item"><i class="fa-solid fa-heart"></i> Stories</li></Link>
        <Link to="/progress" class="link"><li class="side-item"><i class="fa-solid fa-comment-dots"></i> Chat  </li></Link>
    </div>
)
}