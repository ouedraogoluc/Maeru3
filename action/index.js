import firebase from '../Firebase';


export function getListReunions(){
    return(dispatch) => {
        firebase.database().ref('/mareu-d6cf3-default-rtdb').on('Value',snapshot=>{
            dispatch({
                type:"LISTREUNIONS_FETCH"?
                playload:snapshot.val()
            })  
        })
    }
}

export function postReunions(name, heureReunions,lieuReunion,participant,sujetReunion,picture){
    return (dispatch) => {
        firebase.database().ref('/mareu-d6cf3-default-rtdb').push({name, heureReunions,lieuReunion,participant,sujetReunion,picture})
    }
}
