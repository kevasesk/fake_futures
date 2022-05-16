<template>
  <section class="settings">
    <div class="row balance">
      <div class="col1">Доступно: {{this.balance}} USDT</div>
      <div class="col2">Инструмент: <span class="symbol">{{this.symbol}}</span></div>
    </div>
    <div class="row">
     <div class="col1"><input type="text" placeholder="Кол." name="count"/></div>
     <div class="col2"> <input type="text" placeholder="Плечё" name="sholder"/></div>
    </div>
    <div class="row actions">
      <div class="col1"><button class="long">Long</button></div>
      <div class="col2"><button class="short">Short</button></div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      balance: 1000,
      symbol: "BTCUSDT"
    }
  }

}
</script>

<style>
  .settings{
    background-color: #1e2329;
    grid-area: settings;
  }
  .row{
    margin: 10px 0px;
    display: grid;
    grid-template-areas:  'col1 col2';
  }
  .col1{ grid-area: col1;}
  .col2{ grid-area: col2;}
  .symbol{
    font-size: 20px;
  }
  .actions{
    display:grid;
    grid-template-columns: 1fr 1fr;
  }
  .actions .long{
    background-color: #f6465d;
    padding: 10px;
  }
  .actions .short{
    background-color: #0ecb81;
    padding: 10px;
  }
</style>