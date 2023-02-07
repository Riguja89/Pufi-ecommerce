const initialState = {
    products: [],
 
  };


const rootReducer = (state = initialState, action) => {

    switch(action.type) {
        // Acá va tu código:
        
        case "GET_ALL_VIDEOGAMES":
          //console.log(action.payload);
          return{
              ...state,
              videogames: action.payload
  
          };

          default: return {...state};

};

};
export default rootReducer;