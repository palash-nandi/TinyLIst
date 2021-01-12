import { put, call, takeLatest } from 'redux-saga/effects';
import * as types from './../actions/action-types'
import {createTask, listTasks, fetchTask, deleteTask, completeTask, uncompleteTask, updateTask} from './../../http-calls'

function* createTaskSaga(payload) {
    try {
        const response = yield call(createTask, payload)
        yield put({type: types.CREATE_TASK_SUCCESS, response})
    } catch (error) {
        yield put({type: types.ERROR, error})
    }
}

function* updateTaskSaga(payload) {
    try {
        const response = yield call(updateTask, payload)
        yield put({type: types.UPDATE_TASK_SUCCESS, response, payload})
    } catch (error) {
        yield put({type: types.ERROR, error})
    }
}

function* listTaskSaga(payload) { 
    try {
        const response = yield call(listTasks, payload)
        yield put({type: types.LIST_TASK_SUCCESS, response})
    } catch (error) {
        yield put({type: types.ERROR, error})
    }
}

function* fetchTaskSaga(payload) {
    try {
        const response = yield call(fetchTask, payload)
        yield put({type: types.FETCH_TASK_SUCCESS, response})
    } catch (error) {
        yield put({type: types.ERROR, error})
    }
}

function* deleteTaskSaga(payload) { 
    try {
        const response = yield call(deleteTask, payload)
        yield put({type: types.DELETE_TASK_SUCCESS, response, payload})
    } catch (error) {
        yield put({type: types.ERROR, error})
    }
}

function* completeTaskSaga(payload) {
    try {
        const response = yield call(completeTask, payload)
        yield put({type: types.COMPLETE_TASK_SUCCESS, response, payload})
    } catch (error) {
        yield put({type: types.ERROR, error})
    }
}

function* uncompleteTaskSaga(payload) {
    try {
        const response = yield call(uncompleteTask, payload)
        yield put({type: types.UNCOMPLETE_TASK_SUCCESS, response, payload})
    } catch (error) {
        yield put({type: types.ERROR, error})
    }
}


export default function* taskSagaWatcher() {
    yield takeLatest(types.CREATE_TASK, createTaskSaga)
    yield takeLatest(types.LIST_TASK, listTaskSaga)
    yield takeLatest(types.FETCH_TASK, fetchTaskSaga)
    yield takeLatest(types.DELETE_TASK, deleteTaskSaga)
    yield takeLatest(types.COMPLETE_TASK, completeTaskSaga)
    yield takeLatest(types.UNCOMPLETE_TASK, uncompleteTaskSaga)
    yield takeLatest(types.UPDATE_TASK, updateTaskSaga)
}