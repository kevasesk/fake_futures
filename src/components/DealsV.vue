<template>
  <section id="deals">
      <div class="container">

        <div class="cell"></div>
        <div class="cell">Время начала</div>
        <div class="cell">Время конца</div>
        <div class="cell">Символ</div>
        <div class="cell">Размер</div>
        <div class="cell">Цена входа</div>
        <div class="cell">Цена выхода</div>
        <div class="cell">PnL</div>
        <div class="cell">%</div>

        <template v-for="deal in this.$store.state.deals" :key="deal.dateStart">
          <div class="cell" :class="{ short: deal.type == 0, long: deal.type == 1 }"></div>
          <div class="cell">{{deal.dateStart}}</div>
          <div class="cell">{{deal.dateEnd}}</div>
          <div class="cell">{{deal.symbol}}</div>
          <div class="cell">{{deal.size}}</div>
          <div class="cell">{{deal.startPrice}}</div>
          <div class="cell">{{deal.endPrice}}</div>
          <div class="cell" :class="{ green: deal.pnl > 0, red: deal.pnl < 0 }">
              {{deal.pnl > 0 ? '+'+deal.pnl : deal.pnl}}
          </div>
          <div class="cell" :class="{ green: deal.pnl > 0, red: deal.pnl < 0 }">
              {{deal.percent > 0 ? '+' + deal.percent : deal.percent}}
          </div>
        </template>

    </div>
  </section>
</template>

<style>
  #deals{
      grid-area: deals;
  }
  #deals .container{
    display: grid;
    grid-template-columns: 20px repeat(8, auto);
  }
  #deals .cell{
    margin: 5px 0px;
    justify-self: center;
  }
  #deals .short{
    background-color: #f6465d;
    width:10px;
  }
  #deals .long{
    background-color: #0ecb81;
    width:10px;
  }
</style>