<script src="./index.ts" />
<style>
#main {
  width: calc(100% - 60px);
  margin: 0 auto;
  margin: 20px 20px 0 20px;
}
</style>

<template>
  <div id="main">
      <n-card title="TODO" hoverable> 
        <n-space vertical>
          <n-checkbox v-model:checked="data">JSON format</n-checkbox>
          <n-checkbox v-model:checked="data2">SQLite</n-checkbox>
          <n-checkbox v-model:checked="data3">WebSocket</n-checkbox>
          <n-checkbox v-model:checked="data4">SSH</n-checkbox>
          <n-checkbox v-model:checked="data4">QRCode</n-checkbox>
          <n-checkbox v-model:checked="data4">URL format</n-checkbox>
        </n-space>
     </n-card>
  </div>
</template>
