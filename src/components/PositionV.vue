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
        <div class="cell" :class="{ green: this.pnl > 0, red: this.pnl < 0 }">
          {{this.pnl > 0 ? '+' + this.pnl : this.pnl}}
        </div>
        <div class="cell" :class="{ green: this.percent > 0, red: this.percent < 0 }">
          {{this.percent > 0 ? '+' + this.percent : this.percent}}
          </div>
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
      if(this.position){
        var pnl = ((this.$store.state.price - this.position.startPrice) * this.$store.state.value).toFixed(3)
        return this.position.type == 1 ? pnl : -pnl;
      }
      return 0;
      
    },
    percent(){
      var percent = ( (this.$store.state.price - this.position.startPrice) * this.$store.state.value / (this.position.startPrice / 100) / 100).toFixed(3);
      return this.position.type == 1 ? percent : -percent;
    }
  },
  methods:{
    now (){
      var date = new Date(Date.now());
      return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    },
    close(){
      var position = this.position;
      position.dateEnd = this.now();
      position.endPrice = this.$store.state.price;
      position.pnl = this.pnl;
      position.percent = this.percent;
      this.$store.commit('addDeal', position);
      this.$store.commit('setBalance', parseFloat(this.$store.state.balance) + parseFloat(this.pnl) + this.$store.state.value*position.startPrice);
      this.$store.commit('setPosition', null);
      
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
    justify-self: center;
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