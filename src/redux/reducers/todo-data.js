import * as types from './../actions/action-types';

export const todoDataReducer = (state = [], action) => {
console.log('action',action)
  switch (action.type) {

    case types.CREATE_TASK:
        return {...state, loading: true}
    case types.CREATE_TASK_SUCCESS:
        return {...state, loading: false, todolist: [action.response, ...state.todolist]}
    case types.FETCH_TASK:
        return {...state, loading: true}
    case types.FETCH_TASK_SUCCESS:
        return {...state, loading: false, fetchResponse: action.response}
    case types.LIST_TASK: 
        return {...state, loading: true}
    case types.LIST_TASK_SUCCESS:
        return {...state, loading: false, todolist: action.response}
    case types.UPDATE_TASK:
        return {...state, loading: true}
    case types.UPDATE_TASK_SUCCESS:
        return {...state, loading: false, todolist: state.todolist.map(e => e.id === action.payload.id ? action.response : e), editIndex: undefined}
    case types.DELETE_TASK:
        return {...state, loading: true}
    case types.DELETE_TASK_SUCCESS:
        return {...state, loading: false, todolist: state.todolist.filter(e => e.id !== action.payload.id), editIndex: undefined}
    case types.COMPLETE_TASK:
        return {...state, loading: true}
    case types.COMPLETE_TASK_SUCCESS:
        return {...state, loading: false, todolist: state.todolist.map(e => e.id === action.payload.id ? action.response : e), editIndex: undefined}
    case types.UNCOMPLETE_TASK:
        return {...state, loading: true}
    case types.UNCOMPLETE_TASK_SUCCESS:
        return {...state, loading: false, todolist: state.todolist.map(e => e.id === action.payload.id ? action.response : e), editIndex: undefined}
    case types.ERROR:
        return {...state, loading: false, error: action.error, editIndex: undefined}
    default:
        return state
  }
};

