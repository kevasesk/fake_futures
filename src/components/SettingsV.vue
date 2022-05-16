<template>
  <section id="settings">
    <div class="container">
        <div class="cell">Доступно: <span class="value">{{this.$store.state.balance}} USDT</span></div>
        <div class="cell">Инструмент: <span class="value">{{this.$store.state.symbol}} ({{this.$store.state.price}})</span></div>
        <div class="cell"><input type="text" placeholder="Кол." name="count" :value="this.$store.state.value"/></div>
        <div class="cell"><input type="text" placeholder="Плечё" name="sholder" :value="this.$store.state.sholder"/></div>
        <div class="cell"><button class="long" @click="long">Long</button></div>
        <div class="cell"><button class="short" @click="short">Short</button></div>
    </div>
  </section>
</template>

<script>

export default {
  methods:{
    long(){
      this.$store.commit('setPosition', {
          type: 1,
          symbol: this.$store.state.symbol,
          size: this.$store.state.value,
          startPrice: this.$store.state.price,
          currentPrice: this.$store.state.price,
          pnl: 0,
          percent: 0,
      })

    },
    short(){
      this.$store.commit('setPosition', {
          type: 0,
          symbol: this.$store.state.symbol,
          size: this.$store.state.value,
          startPrice: this.$store.state.price,
          currentPrice: this.$store.state.price,
          pnl: 0,
          percent: 0,
      })

    }

  },
  async created() {
    var self = this;
    const apiUrl = 'https://api.binance.com';
    const action = '/api/v3/ticker/price';
    const params = '?symbol=' + this.$store.state.symbol;
    setInterval(async function(){
        const response = await fetch(apiUrl + action + params);
        const data = await response.json();
        self.$store.commit('setPrice', parseFloat(data.price).toFixed(2));
    }, 1000);
    
  },


}
</script>

<style>
  #settings{
    background-color: #1e2329;
    grid-area: settings;
  }
  #settings .container{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  #settings .cell{
    padding: 10px;
  }
  #settings .value{
    font-size: 20px;
  }
  #settings .row button{
    width:100%;
  }
  #settings input{
    background-color: #2b3139;
    border: none;
    padding: 10px;
    width: calc(100% - 20px);
  }
  #settings .actions{
    display:grid;
    grid-template-columns: 1fr 1fr;
  }
  #settings .short{
    background-color: #f6465d;
    padding: 10px;
    width: 100%;
    border: none;
    cursor: pointer;
  }
  #settings .long{
    background-color: #0ecb81;
    padding: 10px;
    width: 100%;
    border: none;
    cursor: pointer;
  }
</style>