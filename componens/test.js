// import Redux, { createStore } from 'redux';
// //
//
//
// const store = createStore(
//     (state = [], action)=> {
//
//         console.warn(action);
//
//         //reduser
//         if(action.type === 'add_cafe'){
//             //state.push(action.payload);
//             //return state;
//             return [...state, action.payload];
//         }
//         if(action.type === 'clear_cafe'){
//             return [];
//         }
//
//         if(action.type === 'remove_cafe'){
//             state.splice(action.payload.index, 1);
//             return state;
//         }
//         //reduser end
//
//         return state;
//     }
// );
//
// console.warn(store.getState());
//
// const action = {
//     type:'add_cafe',
//     payload: {name:'123'}
// };
//
//
//
//
//
// store.dispatch(action);
// console.warn(store.getState());
//
//
// store.dispatch({
//         type:'add_cafe',
//         payload: {name:'345'}
//     }
// );
// console.log(store.getState());
//
// store.dispatch({
//     type:'clear_cafe'
// });
// store.dispatch({
//     type:'remove_cafe',
//     payload:{index:1}
// });
//
//
// console.log(store.getState());