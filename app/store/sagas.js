import { takeEvery, put } from 'redux-saga/effects';

function* asyncAddPessoa(action){
    yield put({ type: 'ADD_PESSOA',nome: action.nome });
}

export default function* root() {
    yield [
        takeEvery('ASYNC_ADD_PESSOA',asyncAddPessoa),
    ];
}