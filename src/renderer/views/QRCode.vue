<script src="./QRCode.ts" />
<style>
#main {
  width: calc(100% - 60px);
  margin: 0 auto;
  margin: 20px 20px 0 20px;
}
</style>
<template>
  <div id="main">
    <div style="display: flex; flex-direction: row"
      v-on:paste="handlePaste"
        @drop="onDropHandler($event)"
      >
    <n-input
      autofocus
      v-model:value="InputCardBox"
      style="margin: 0; min-height: 120px"
      placeholder="在此粘贴你的文本数据(也可截图二维码图片后粘贴); 或拖拽二维码图片识别"
      type="textarea"
      size="small"
    />
    </div>
    <div style="display: flex; margin-top: 20px">
      <n-card hoverable> 
        <n-space vertical>
          <div v-if="ImgBase64Data" style="display: flex; border: 1px solid #ececec">
          <img :src="ImgBase64Data" alt="">
          </div>
          <n-button style="flex: 1" v-if="ImgBase64Data" @click="downloadQRCodeHanlder">下载</n-button>
        </n-space>
      </n-card>
    </div>
  </div>
</template>
