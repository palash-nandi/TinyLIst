import { store } from "../redux/store";
import * as _deepClone from "clone-deep";
import { ToastsStore } from "react-toasts";


export const deepClone = (data) => {
  return _deepClone(data);
};

export const sleepTime = (n) => new Promise((r) => setTimeout(() => r(), n));

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const showToast = (message, type = "error", duration = 4000) => {
  ToastsStore[type](message, duration);
};

export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const decodeToken = (token) => {
  return jwt_decode(token);
};

export const transformArrayToObject = (sourceArray, objectKeyPropertyName) => {
  let resultantObject = {};
  if (sourceArray && sourceArray.length) {
    sourceArray.forEach((elem) => {
      resultantObject[elem[objectKeyPropertyName]] = elem;
    });
    return resultantObject;
  }
};

export const isObjectEmpty = (sourceObject = {}) => {
  return Object.keys(sourceObject).length === 0;
};

export const fetchAndDecodeToken = () => {
  let state = store.getState();
  if (state && state.userData && state.userData.token) {
    return decodeToken(state.userData.token);
  }
};

export const capitalizeEveryFirstLetter = (text = "") => {
  const modifiedText = text
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
  return modifiedText;
};

export const calculateTotal = (arr, attr) => {
  let totalAmount = arr.reduce((acc, each) => {
    return (acc = Number(acc) + Number(each[attr]));
  }, 0);
  return totalAmount.toFixed(2);
};

export const sum = (a = 0, b = 0) => (Number(a) + Number(b)).toFixed(2);

export const formatNumber = (number) => {
  let formatedNumber = new Intl.NumberFormat().format(
    Number(number).toFixed(2)
  );
  return formatedNumber;
};
