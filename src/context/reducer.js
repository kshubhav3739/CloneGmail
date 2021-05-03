export const initialState={
    user:null
}

export function reducer(state=initialState,action)
{
    if(action.type==="SET_USER")
    {
        return{
            ...state,
            user:action.user,
        }
    }
    else{
        return state;
    }
}