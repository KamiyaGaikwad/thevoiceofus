import AddStoryForm from "./components/AddStoryForm";
import Navbar from "./components/Nav";
import SideBar from "./components/sidebar";
import { usePosts } from "./Context/postContext";
export default function AddStory(){
    const{state}  = usePosts();
    const{posts} = state;
    // localStorage.setItem('users', JSON.stringify(posts));
    return(
        <>
        <Navbar />
        <div class='grid-container'>
  <div class='grid-item sidebar1'><SideBar /></div>
  <div class='grid-item  sidebar'><AddStoryForm />
  </div>
</div>
</>
    )
}