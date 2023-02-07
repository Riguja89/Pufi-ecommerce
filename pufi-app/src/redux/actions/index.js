export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";



export const getAllVideoGames = () => dispatch => {
    //console.log("va a hacer la peticion")
    
        return axios(apigameRender+"/api/videogames")
 
        .then(r => r.data)
        .then(d => dispatch({ type:GET_ALL_VIDEOGAMES, payload: d }) )
        .catch((error) => {
          console.log(error);
          dispatch({ type:GET_ALL_VIDEOGAMES, payload: ["error"] }) 
        });
        

};