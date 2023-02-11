import { R_FAIL,R_SUCCESS } from "../constants/restconstants";

export const restListReducer=(state={restlist:[]},action)=>{
    switch(action.type){
        case R_SUCCESS:
            return{
                restlist:action.payload
            }
        case R_FAIL:
            return{
                restlist:action.error
            }
        default:
            return state
    }
}
