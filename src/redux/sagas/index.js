import taskSaga from './taskSaga'
import { all } from 'redux-saga/effects';

export function* watchSagas() {
    //Combine sagas with
    yield all([ taskSaga()  ])
}

