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
          <n-checkbox :checked="true" :indeterminate="true">JSON format</n-checkbox>
          <n-checkbox :checked="false">SQLite</n-checkbox>
          <n-checkbox :checked="false">WebSocket</n-checkbox>
          <n-checkbox :checked="false">SSH</n-checkbox>
          <n-checkbox :checked="true">QRCode</n-checkbox>
          <n-checkbox :checked="false">URL format</n-checkbox>
        </n-space>
     </n-card>
  </div>
</template>
