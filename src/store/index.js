import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        carList: []
    },
    mutations: {
        addCar(state, payload) {
            // state.carList.push(payload)
            let oldProduct = state.carList.find(item => item.iid === payload.iid)
            if (oldProduct) {
                oldProduct.count += 1
            } else {
                payload.checked = true
                payload.count = 1
                state.carList.push(payload)
            }
        }
    }
})

export default store