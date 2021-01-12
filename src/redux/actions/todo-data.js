import * as actionTypes from "./action-types";

export const createTask = (payload) => {
   return {
       type: actionTypes.CREATE_TASK, data: payload
   };
};

export const updateTask = (payload) => {
    return {
        type: actionTypes.UPDATE_TASK, data: payload.data, id: payload.id
    };
 };

export const listTasks = (payload) => { 
    return {
        type: actionTypes.LIST_TASK, data: payload
      };
    };

 export const deleteTasks = (payload) => {
    return {
        type: actionTypes.DELETE_TASK, id: payload.id
     };
   };

 export const completeTask = (payload) => {
    return {
        type: actionTypes.COMPLETE_TASK, id: payload.id
      };
    };

 export const uncompleteTask = (payload) => {
    return {
        type: actionTypes.UNCOMPLETE_TASK, id: payload.id
      };
   };

 export const showLoader = (loaderText = 'Loading') => {
    return {
        type: actionTypes.SHOW_LOADER,
        payload: {
            loaderText
        }
    }
}

 export const hideLoader = () => {
    return {
        type: actionTypes.HIDE_LOADER
    }
}