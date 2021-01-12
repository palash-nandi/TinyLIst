import * as types from './../actions/action-types';

export const loaderDataReducer = (state = { isVisible: false, loaderText: 'Processing' }, action) => {
    let newState = { ...state };
    switch(action.type) {
        case types.SHOW_LOADER: {
            newState = {
                isVisible: true,
                loaderText: action.payload.loaderText
            }
            break;
        }
        case types.HIDE_LOADER: {
            newState = {
                isVisible: false,
                loaderText: 'Loading'
            }
            break;
        }
        default: {
            
        }
    }
    return newState;
}

