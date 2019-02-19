
const INITIAL_STATE = {
    name:'',
    email:''

};


const userReducer = (state = INITIAL_STATE, action)=> {

    if(action.type === 'update_user'){
        const newState = {...state, ...action.payload};
        return newState;
    }


    return state;
}


export  default  userReducer;


