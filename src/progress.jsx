import come_later from "./image/come.svg";
import Navbar from "./components/Nav";
import SideBar from "./components/sidebar";
export default function Progress(){
    return(
        <>
        <Navbar />
        <div class='grid-container'>
  <div class='grid-item sidebar1'><SideBar /></div>
  <div class='grid-item  sidebar'><img src={come_later} alt="progress-img" class="progress" />Work in Progress
  </div>
</div>
</>
    )
}