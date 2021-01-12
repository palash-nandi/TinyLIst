import { handleErrorIfAvailable } from "../error-handler";
import { getToken } from "../interceptors/token-interceptor";

/**
 *
 *      General http methods
 *
 */

const structureQueryParams = (params) => {
  let queryStrings = "?";
  const keys = Object.keys(params);
  keys.forEach((key, index) => {
    queryStrings += key + "=" + params[key];
    if (params[keys[index + 1]]) {
      queryStrings += "&";
    }
  });
  return queryStrings;
};

export const makeGetRequest = async (
  url,
  attachToken = false,
  params = null,
) => {
  let queryString = "";
  if (params) {
    queryString = structureQueryParams(params);
  }
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  // Attach auth token if required
  if (attachToken) {
    try {
      const authToken = await getToken();
      if (authToken) {
        headers["Authorization"] = "Bearer " + authToken;
      }
    } catch (e) {
      console.log(e);
    }
  }
  
  return new Promise((resolve, reject) => {
    try {
      fetch(url + queryString, {
        method: "GET",
        headers: headers,
      })
        .then((res) => { 
         // handleErrorIfAvailable(res);
          return res.json();
        })
        .then((jsonResponse) => {
          if (jsonResponse.hasOwnProperty("error")) {
              resolve(jsonResponse);
           
          } else { 
            resolve(jsonResponse);
          }
        })
        .catch((e) => {
          console.log("XHR GET Error: ", e);
          reject(e);
        });
    } catch (e) {
      console.log(e);
      reject();
    }
  });
};

export const makePostRequest = async (
  url,
  attachToken = false,
  params = {},
  customToken = "",
  disableLanguageHeader = false
) => {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  // Attach auth token if required
  if (attachToken) {
    try {
      const authToken = await getToken();
      if (customToken.length) {
        headers["Authorization"] = "Bearer " + customToken;
      } else if (authToken) {
        headers["Authorization"] = "Bearer " + authToken;
      }
    } catch (e) {
      console.log("Error fetching auth token: ", e);
    }
  }
 
  return new Promise((resolve, reject) => {
    try {
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(params),
      })
        .then(
          (res) => { 
            //handleErrorIfAvailable(res);
            return res.json();
          },
          (error) => {
            reject(error);
          }
        )
        .then(
          (jsonResponse) => { 
              resolve(jsonResponse);
            
          },
          (error) => {
            reject(error);
          }
        )
        .catch((error) => {
          reject(error);
        });
    } catch (e) {
      console.log(e);
      reject();
    }
  });
};

export const makePutRequest = async (
  url,
  attachToken = false,
  params = {},
  disableLanguageHeader = false
) => {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  // Attach auth token if required
  if (attachToken) {
    try {
      const authToken = await getToken();
      if (authToken) {
        headers["Authorization"] = "Bearer " + authToken;
      }
    } catch (e) {
      console.log(e);
    }
  }
  
  return new Promise((resolve, reject) => {
    try {
      fetch(url, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(params),
      })
        .then(
          (res) => {
            //handleErrorIfAvailable(res);
            return res.json();
          },
          (error) => {
            reject(error);
          }
        )
        .then(
          (jsonResponse) => {
              resolve(jsonResponse);
            
          },
          (error) => {
            reject(error);
          }
        )
        .catch((error) => {
          reject(error);
        });
    } catch (e) {
      console.log(e);
      reject();
    }
  });
};

export const makeDeleteRequest = async (
  url,
  attachToken = false,
  params = {},
) => {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  
  
  return new Promise((resolve, reject) => { 
    try {
      fetch(url, {
        method: "DELETE",
        headers: headers,
        body: JSON.stringify(params),
      })
        .then(
          (res) => { 
            //handleErrorIfAvailable(res);
            resolve (res);
          },
          (error) => {
            reject(error);
          }
        );
    } catch (e) {
      console.log(e);
      reject();
    }
  });
};

export const uploadFile = async (
  url,
  attachToken = false,
  formData,
  isLargeFile = false,
  disableLanguageHeader = true
) => {
  let headers = {};
  // Attach auth token if required
  if (attachToken) {
    try {
      const authToken = await getToken();
      if (authToken) {
        headers["Authorization"] = "Bearer " + authToken;
      }
    } catch (e) {
      console.log(e);
    }
  }

  return new Promise((resolve, reject) => {
    try {
      fetch(url, {
        method: "POST",
        headers: headers,
        body: formData,
      })
        .then(
          (res) => {
            handleErrorIfAvailable(res);
            return res.json();
          },
          (error) => {
            reject(error);
          }
        )
        .then(
          (jsonResponse) => {
            resolve(jsonResponse);
          },
          (error) => {
            reject(error);
          }
        )
        .catch((error) => {
          reject(error);
        });
    } catch (e) {
      console.log(e);
      reject();
    }
  });
};
