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
      symbolPrice: 30000,
      sholder: 30
    }
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