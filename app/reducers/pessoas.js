export default function pessoas(state = [], action) {
    //{ type: 'ADD_PESSOA' , nome: 'Siomar'}
    switch(action.type){
        case 'ADD_PESSOA':
        //add pessoa
            return [ ...state, { 
                id: Math.random(), 
                nome: action.nome, 
            }]
        case 'REMOVE_PESSOA':
        //remove pessoa
            // delete state[state.length-1];
            state = state.splice(0, state.length - 1);
            return [ ...state]
        default:
            return state;
    }
}