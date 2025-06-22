<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      class= "minus"
    >
      cash <span>400$</span
      ><button class="delete-btn">
        x
      </button>
    </li>
        <li
      class= "plus"
    >
      paycash <span>800$</span
      ><button class="delete-btn">
        x
      </button>
    </li>
  </ul>
</template>

<script setup>
import {defineProps} from 'vue';

const props =defineProps({
  Transactions: {
    type: Array,
    required : true,
  }
}
)

</script>