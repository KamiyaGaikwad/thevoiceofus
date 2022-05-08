const initialState = {
    posts: [],
}

const postReducer =(state,action)=>{

switch(action.type){
    case 'GOT_POSTS':
        
        return{
            ...state,
            posts:action.payload
        }
    
    case 'ADD_STORY':
        console.log("pp",action.payload)
        
        if(action.payload != undefined){
        return{
            ...state,
            posts:[...state.posts,action.payload]}
        }

    // case 'BY_CATEGORY':
    //     if (state.category.includes(action.payload)) {
    //         return {
    //             ...state,
    //             category: [...state.category].filter((eachCategory) => eachCategory !== action.payload),
    //         };
    //     }
    //     return {
    //         ...state,
    //         category: [...state.category, action.payload],
    //     };

    // case 'GOT_POSTS_LOCAL':
    //     return{
    //         ...state,
    //         posts:action.payload
    //     }
    
    // case 'SORT_BY':
    //     return{
    //         ...state,
    //         sortBy:action.payload
    //     }

    // case 'CLEAR_FILTERS':
    //     return{
    //         ...state,
    //         priceRange: 150,
    //         category: [],
    //         rating: 0,
    //         sortBy: null,
    //     }

    default:
        return state
    
}
}

export {postReducer,initialState};