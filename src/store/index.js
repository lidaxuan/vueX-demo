import Vue from 'vue'
import Vuex from 'vuex'
import { saveStorage } from './cache'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: undefined,
        num: undefined,
        sidebar: {
            opened: '' // !+Cookies.get('sidebarStatus')
        },
        theme: 'default',
        livenewsChannels: '', //Cookies.get('livenewsChannels') || '[]',
        visitedViews: []
    },
    getters: {

    },
    mutations: {
        SET_TOKEN(state, data) {
            state.token = data;
        },
        SET_NUM(state, data) {
            state.num = data;
        },
    },
    actions: {
        setToken: ({ commit }, token) => {
            commit('SET_TOKEN', token);
            saveStorage('token', token)
        },
        addVisitedViews: ({commit}, view) => {
            commit('ADD_VISITED_VIEWS', view)
        },
        delVisitedViews: ({commit}, view) => {
            commit('DEL_VISITED_VIEWS', view)
        },
        setNum: ({ commit }, num) => {
            commit('SET_NUM', num);
            saveStorage('num', num)
        },
    },
});

export default store

