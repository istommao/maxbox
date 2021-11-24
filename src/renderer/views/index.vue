<template>
  <div>
    内容
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function onTryIt() {
  count.value += 1
}
</script>

<style></style>
