import axios from "axios";
import constants,{R_FAIL, R_SUCCESS} from '../constants/restconstants'

export const RestListAction=()=>async(dispatch)=>{
    try{
        const result=await axios.get('/restaurants.json')
        console.log(result.data.restaurants);
        dispatch({
            type:R_SUCCESS,
            payload:result.data.restaurants

        })
    }
    catch(error){
        dispatch({
            type:R_FAIL,
            error:error
        })
    }
    
}