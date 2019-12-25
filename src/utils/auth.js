import store from "../store";

import { loadStorage } from '@/store/cache';
export function getToken() {
    // return Cookies.get(TokenKey)
    return loadStorage('token')
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}
