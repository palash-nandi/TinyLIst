import {
  EndPoints,
  getCombinedUrl,
} from "../config/index";

import {
  makePostRequest,
  makeGetRequest,
  uploadFile,
  makePutRequest,
  makeDeleteRequest,
} from "../http-connectors";

import UserInfo from './../config/userInfo';

const userInfoParam = {
  user_id: UserInfo.id
}

export const createTask = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      makePostRequest(getCombinedUrl(EndPoints.createTasks, userInfoParam), false, payload.data)
        .then((res) => { 
          resolve(res);
        })
        .catch((e) => { 
          reject(e);
        });
    } catch (error) { 
      reject(error);
    }
  });
};

export const fetchTask = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      makeGetRequest(getCombinedUrl(EndPoints.fetchTask, {user_id: UserInfo.id , id: payload.id}), false, payload.data)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    } catch (error) {
      reject(error);
    }
  });
};

export const listTasks = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      makeGetRequest(getCombinedUrl(EndPoints.listTasks, userInfoParam), false, payload.data)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    } catch (error) {
      reject(error);
    }
  });
};

export const updateTask = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      makePutRequest(getCombinedUrl(EndPoints.updateTask, {user_id: UserInfo.id , id: payload.id}), false, payload.data)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    } catch (error) {
      reject(error);
    }
  });
};

export const uncompleteTask = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      makePutRequest(getCombinedUrl(EndPoints.uncompleteTask, {user_id: UserInfo.id , id: payload.id}), false, payload.id)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    } catch (error) {
      reject(error);
    }
  });
};

export const completeTask = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      makePutRequest(getCombinedUrl(EndPoints.completeTask, {user_id: UserInfo.id , id: payload.id}), false, payload.id)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    } catch (error) {
      reject(error);
    }
  });
};

export const deleteTask = (payload) => { 
  return new Promise(async (resolve, reject) => {
    try {
      makeDeleteRequest(getCombinedUrl(EndPoints.deleteTask, {user_id: UserInfo.id , id: payload.id}
        ), false, payload.id)
        .then((res) => {  
          resolve(res);
        })
        .catch((e) => { 
          reject(e);
        });
    } catch (error) { 
      reject(error);
    }
  });
};





// export const createTask = (payload) => {
//   return axiosService.post(getUrl(EndPoints.createTasks, defaultApiParams), payload.data)
// }

// export const listTasks = () => {
//   return axiosService.get(getUrl(EndPoints.listTasks, defaultApiParams))
// }

// export const fetchTask = (payload) => {
//   return axiosService.get(getUrl(EndPoints.fetchTask, {...defaultApiParams, id: payload.id}))
// }

// export const updateTask = (payload) => {
//   return axiosService.put(getUrl(EndPoints.updateTask, {...defaultApiParams, id: payload.id}), payload.data)
// }

// export const completeTask = (payload) => {
//   return axiosService.put(getUrl(EndPoints.completeTask, {...defaultApiParams, id: payload.id}))
// }

// export const uncompleteTask = (payload) => {
//   return axiosService.put(getUrl(EndPoints.uncompleteTask, {...defaultApiParams, id: payload.id}))
// }

// export const deleteTask = (payload) => {
//   return axiosService._delete(getUrl(EndPoints.destroyTask, {...defaultApiParams, id: payload.id}))
// }
