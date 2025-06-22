<template>
<Header />
<div class="container">
  <Balance />
  <IncomeExpensive />
  <Transaction :Transactions="Transactions" />
  <Addtransaction />

</div>
</template>

<script setup>
import Header from './components/Header.vue';
import Balance from './components/Balance.vue';
import IncomeExpensive from './components/IncomeExpensive.vue';
import Transaction from './components/Transaction.vue';
import Addtransaction from './components/Addtransaction.vue';
import {ref} from 'vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
