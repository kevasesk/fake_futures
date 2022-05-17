import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        symbol: 'GALUSDT',
        price: '00000',

        balance: 5000,
        value: 770,
        sholder: 50,

        position: null,

        deals: []
      }
    },
    mutations: {
      setPrice (state, price) {
        state.price = price 
      },
      setValue (state, value) {
        state.value = value 
      },
      setBalance (state, balance) {
        state.balance = balance.toFixed(2)
      },
      setPosition(state, position){
        state.position = position
      },
      addDeal(state, deal){
        state.deals.push(deal);
      }
    },
  })
  export default store;