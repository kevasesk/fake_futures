<template>
  <PositionV />
  <div class="divider"></div>
  <SettingsV />
  <DealsV />
</template>

<script>
import PositionV from "./components/PositionV.vue";
import SettingsV from "./components/SettingsV.vue";
import DealsV from "./components/DealsV.vue";

export default {
  name: "App",
  components: {
    PositionV,
    SettingsV,
    DealsV,
  },
};
</script>

<style>
/* black - #161a1e
slider background - 1e2329
green - 0ecb81
red - f6465d
text - white - bbc3cc
text-field - 2b3139
divider 2b313a */
*{
  color: white;
  font-family: monospace;
  font-size: large;
}
body {
  background-color: #161a1e;
}
#app{
  display: grid;
  grid-template-areas:
  'position position position position settings'
  'divider divider divider divider settings'
  'deals deals deals deals settings'
  'deals deals deals deals settings'
  'deals deals deals deals settings'
  'deals deals deals deals settings'
  'deals deals deals deals settings'
  'deals deals deals deals settings';
  min-height: 100vh;
}

section{
  padding: 20px;
  /* border: 1px solid white; */
}
.divider{
  /* width:100%; */
  height: 2px;
  background-color: #2b313a;
  grid-area: divider;
}
.green{
  color: #0ecb81;
}
.red{
  color: #f6465d;
}
</style>
