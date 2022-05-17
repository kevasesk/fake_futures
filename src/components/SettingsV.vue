<template>
  <section id="settings">
    <div class="container">
        <div class="cell">Доступно: <span class="value">{{this.$store.state.balance}} USDT</span></div>
        <div class="cell">Инструмент: <span class="value">{{this.$store.state.symbol}} ({{this.$store.state.price}})</span></div>
        <div class="cell"><input type="text" placeholder="Кол." name="count" v-model="value" /></div>
        <div class="cell"><input type="text" placeholder="Плечё" name="sholder" :value="this.$store.state.sholder"/></div>
        <div class="cell"><button class="long" @click="long">Long</button></div>
        <div class="cell"><button class="short" @click="short">Short</button></div>
    </div>
  </section>
</template>

<script>

export default {
  methods:{
    now (){
      var date = new Date(Date.now());
      return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    },
    long(){
      if(!this.position){
          this.$store.commit('setPosition', {
              type: 1,
              dateStart: this.now(),
              dateEnd: null,
              symbol: this.$store.state.symbol,
              size: this.$store.state.value,
              startPrice: this.$store.state.price,
              currentPrice: this.$store.state.price,
              endPrice: null,
              pnl: 0,
              percent: 0,
          })
          this.$store.commit('setBalance', parseFloat(this.$store.state.balance) - (this.$store.state.value * this.$store.state.price));
      }

    },
    short(){
       if(!this.position){
        this.$store.commit('setPosition', {
            type: 0,
            dateStart: this.now(),
            dateEnd: null,
            symbol: this.$store.state.symbol,
            size: this.$store.state.value,
            startPrice: this.$store.state.price,
            currentPrice: this.$store.state.price,
            endPrice: null,
            pnl: 0,
            percent: 0,
        })
        this.$store.commit('setBalance', parseFloat(this.$store.state.balance) - (this.$store.state.value * this.$store.state.price));
       }

    }

  },
  computed:{
      value:{
          get: function(){ 
              return this.$store.state.value; 
          }, 
          set: function(newValue){ 
              this.$store.commit('setValue',newValue);
          }
      },
      position(){
        return this.$store.state.position
      },
  },
  async created() {
    var self = this;
    const apiUrl = 'https://api.binance.com';
    const action = '/api/v3/ticker/price';
    const params = '?symbol=' + this.$store.state.symbol;
    setInterval(async function(){
        const response = await fetch(apiUrl + action + params);
        const data = await response.json();
        self.$store.commit('setPrice', parseFloat(data.price).toFixed(3));
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