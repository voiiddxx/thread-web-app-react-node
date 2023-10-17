const userReducer = (state , action)=>{
    switch (action.type) {
        case "API_LOADING":
            return {
                ...state , 
                isLoading:true,
            }
        case "SET_CURR_DATA":
            return {
                ...state ,
                user: action.payload,
                isLoading:false
            }
        case "API_ERROR":
            return {
                ...state,
                isLoading:false,
                isError:true
            }    

            
            
    
        default:
            return state;
    }
}

export default userReducer;