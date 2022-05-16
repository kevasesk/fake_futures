<template>
  <section id="position">
    <div class="container">

      <div class="cell"></div>
      <div class="cell">Символ</div>
      <div class="cell">Размер</div>
      <div class="cell">Цена входа</div>
      <div class="cell">Текущая цена</div>
      <div class="cell">PnL</div>
      <div class="cell">%</div>
      <div class="cell"></div>

      <div class="cell" :class="{ short: this.type == 0, long: this.type == 1 }"></div>
      <div class="cell">{{this.symbol}}</div>
      <div class="cell">{{this.size}}</div>
      <div class="cell">{{this.startPrice}}</div>
      <div class="cell">{{this.currentPrice}}</div>
      <div class="cell">{{this.pnl}}</div>
      <div class="cell">{{this.percent}}</div>
      <div class="cell"><button class="close" :click="this.close()">Закрыть</button></div>

    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      type: 1,
      symbol: 'BTCUSDT',
      size: 0.001,
      startPrice: 31000,
      currentPrice: 30000,
      pnl: -1000,
      percent: -3.3,

    };
  },
  methods:{
    close(){
      console.log('close');
    }
  }

}
</script>

<style>
  #position{
      grid-area: position;
  }
  #position .container{
    display: grid;
    /* grid-template-columns: repeat(8, 1fr); */
    grid-template-columns: 20px auto auto auto auto auto auto auto;
  }
  #position .cell{
    margin: 5px 0px;
  }
  #position .short{
    background-color: #f6465d;
    width:10px;
  }
  #position .long{
    background-color: #0ecb81;
    width:10px;
  }
  #position .close{
    color: rgb(241, 208, 55);
    border: 1px solid #161a1e;
    background-color: #161a1e;
    cursor: pointer;
  }
  #position .close:hover{
    border: 1px solid rgb(241, 208, 55);
  }
</style>