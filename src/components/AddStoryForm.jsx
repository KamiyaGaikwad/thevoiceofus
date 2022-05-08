import { useState } from "react";
import "../App.css"
import { usePosts } from "../Context/postContext";
export default function AddStoryForm(){
    const {state,dispatch} = usePosts();
    const [a,setA] = useState("");
    const [b,setB] = useState("");
    const [c,setC] = useState("");
    const [post,setPost] = useState();
    const [fl,setFl] = useState("btn-sub dis");
    const {posts} = state;
    localStorage.setItem('users', JSON.stringify(posts));
    return(
        <div class="container">
            <h4>Add your Story <i class="fa-solid fa-shield-heart"></i></h4>
            <form>
            <div class="row">
            <div class="col-25">
            <label for="title">Title</label>
            </div>
            <div class="col-75">
            <input type="text" id="title" name="title" placeholder="Your title.." onChange={t=>setA(t.target.value)}/>
            </div>
            </div>
            <div class="row">
            <div class="col-25">
            <label for="story">Story</label>
            </div>
            <div class="col-75">
            <textarea id="story" name="subject" placeholder="Write your story.." class="textarea" onChange={t=>setB(t.target.value)}></textarea>
            </div>
            </div>
            <div class="row">
            <div class="col-25">
            <label for="image">Image URL</label>
            </div>
            <div class="col-75">
            <input type="text" id="image" name="image" placeholder="Your image URL.." onChange={t=>setC(t.target.value)}/>
            </div>
            </div>
            <div class="row">
            
      <input type="submit" class={fl} onClick={(e) => {dispatch({ type: "ADD_STORY", payload: post });e.preventDefault()}}/>
      <button class="btn-sub m-1" onClick={(e) => {setPost({_id:c,title:a,content:b,postImg:c,likes: 0,commentername:"",comment:"",username: "adarshbalika",createdAt: new Date().toUTCString().slice(5, 16),userImg:"https://imgs.search.brave.com/ajAWvMWamuE_3k9JKAUdXbVsPSV2VOT_j8OW--Bzgpo/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5n/UWFTbUhVa3lmQzc0/akpWb25OWnZnSGFF/NyZwaWQ9QXBp",});e.preventDefault();setFl("btn-sub en")}}>Done</button>
      
    </div>
            </form>
        </div>
    )
}