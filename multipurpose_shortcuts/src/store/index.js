import Vue from 'vue';
import Vuex from 'vuex';
import instance from './modules/instance';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        instance
    }
});