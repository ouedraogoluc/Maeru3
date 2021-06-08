export default function (state={}, action){
    switch(action.type){
        case "LISTREUNIONS_FETCH":
            
            return {
                ...state, 
                ListReunion:action.payload
            }

        default:
            return state
    }
}