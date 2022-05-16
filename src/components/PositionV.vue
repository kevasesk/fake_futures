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

      <template v-if="this.position">
        <div class="cell" :class="{ short: this.position.type == 0, long: this.position.type == 1 }"></div>
        <div class="cell">{{this.position.symbol}}</div>
        <div class="cell">{{this.position.size}}</div>
        <div class="cell">{{this.position.startPrice}}</div>
        <div class="cell">{{this.$store.state.price}}</div>
        <div class="cell">{{this.pnl}}</div>
        <div class="cell">{{this.percent}}</div>
        <div class="cell"><button class="close" @click="close">Закрыть</button></div>
      </template>

    </div>
  </section>
</template>

<script>
export default {
  computed:{
    position(){
      return this.$store.state.position
    },
    pnl(){
      var pnl = (this.$store.state.price - this.position.startPrice).toFixed(2)
      return this.position.type == 1 ? pnl : -pnl;
    },
    percent(){
      var percent = ( (this.$store.state.price - this.position.startPrice) / (this.position.startPrice / 100)).toFixed(4);
      return this.position.type == 1 ? percent : -percent;
    }
  },
  methods:{
    close(){
      this.$store.commit('setPosition', null)
      
    },
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