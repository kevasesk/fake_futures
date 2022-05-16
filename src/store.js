import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        symbol: 'BTCUSDT',
        price: '00000',

        balance: 200,
        value: 0.001,
        sholder: 30,

        position: {
            type: 1,
            symbol: 'BTCUSDT',
            size: 0.001,
            startPrice: 31000,
            currentPrice: 30000,
            pnl: -1000,
            percent: -3.3,
        }
      }
    },
    mutations: {
      setPrice (state, price) {
        state.price = price 
      },
      setPosition(state, position){
          state.position = position
      },
    },
  })
  export default store;