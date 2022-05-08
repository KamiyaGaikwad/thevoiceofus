import { createContext,useEffect } from "react";
import { useContext, useReducer } from "react";
import {postReducer,initialState} from "../Reducer/postReducer";
import axios from "axios";
import { posts } from "../backend/db/posts";



const postContext = createContext(initialState);


const PostProvider =({children}) =>{
    const [state,dispatch] = useReducer(postReducer,initialState);
    
    useEffect(() => {
      (async () => {
        try {
          const {
            data:  {posts} ,
          } = await axios.get("/api/posts");
          dispatch({
            type: "GOT_POSTS",
            payload: posts,
          });
        } catch (error) {
          console.log(error);
        }
      })();
      
    }, []);
    
    
    return(
      <postContext.Provider value={{state,dispatch}}>
        {children}
      </postContext.Provider>
    )
}

const usePosts =()=> useContext(postContext);

export {PostProvider,usePosts};