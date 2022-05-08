import Navbar from "./components/Nav";
import Card from "./components/Card";
import SideBar from "./components/sidebar";
import { usePosts } from "./Context/postContext";
export default function Home(){
    const{state}  = usePosts();
    const{posts} = state;
    
    return(
        <>
        <Navbar />
        <div class='grid-container'>
  <div class='grid-item sidebar1'><SideBar /></div>
  <div class='grid-item  sidebar'>{posts.map((post)=>(<Card post={post} username={post.username} postImg={post.postImg} userImg={post.userImg} title={post.title} content={post.content} likes={post.likes} commentername={post.commentername} comment={post.comment} createdAt={post.createdAt}/>))}
  </div>
</div>
</>
    )
}