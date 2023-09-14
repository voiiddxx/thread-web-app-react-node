

const PostReducer = (state , action)=>{
    switch (action.type) {
        case "POST_API_LOADING":
            return {
                ...state,
                isPostLoading:true,
            }
            
        case "SET_ALL_POSTS":
            return {
                ...state,
                isPostLoading:false,
                posts:action.payload
            }
        case "POSTS_API_ERROR":
            return {
                ...state,
                isPostLoading:false,
                isPostError:true
            }
        case "SET_USER_POST":
            return {
                ...state,
                userpost:action.payload
            }
            
    
        default:
            return state;
    }
}

export default PostReducer;