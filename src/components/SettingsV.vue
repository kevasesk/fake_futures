<template>
  <section id="settings">
    <div class="container">
        <div class="cell">Доступно: <span class="value">{{this.balance}} USDT</span></div>
        <div class="cell">Инструмент: <span class="value">{{this.symbol}} ({{this.symbolPrice}})</span></div>
        <div class="cell"><input type="text" placeholder="Кол." name="count"/></div>
        <div class="cell"><input type="text" placeholder="Плечё" name="sholder" :value="sholder"/></div>
        <div class="cell"><button class="long">Long</button></div>
        <div class="cell"><button class="short">Short</button></div>
    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      balance: 1000,
      symbol: "BTCUSDT",
      symbolPrice: 0,
      sholder: 30
    }
  },
  async created() {
    var self = this;
    const apiUrl = 'https://api.binance.com';
    const action = '/api/v3/ticker/price';
    const params = '?symbol=' + this.symbol;
    setInterval(async function(){
        const response = await fetch(apiUrl + action + params);
        const data = await response.json();
        self.symbolPrice = parseFloat(data.price).toFixed(2);
    }, 1000);
    
  }

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
  #settings .long{
    background-color: #f6465d;
    padding: 10px;
    width: 100%;
    border: none;
  }
  #settings .short{
    background-color: #0ecb81;
    padding: 10px;
    width: 100%;
    border: none;
  }
</style>