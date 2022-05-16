<template>
  <section id="deals">
      <div class="container">

        <div class="cell"></div>
        <div class="cell">Символ</div>
        <div class="cell">Размер</div>
        <div class="cell">Цена входа</div>
        <div class="cell">Текущая цена</div>
        <div class="cell">PnL</div>
        <div class="cell">%</div>
        <div class="cell"></div>

    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
  #deals{
      grid-area: deals;
  }
  #deals .container{
    display: grid;
    grid-template-columns: 20px auto auto auto auto auto auto auto;
  }
  #position .cell{
    margin: 5px 0px;
  }
</style>