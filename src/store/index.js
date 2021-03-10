import Vuex from 'vuex'

import modules from './modules';

export default new Vuex.Store({
    modules: modules,
    strict: process.env.NODE_ENV !== 'production'
})
