<script src="./JsonTool.ts" />

<style>
#main {
  width: calc(100% - 60px);
  margin: 0 auto;
  margin: 20px 20px 0 20px;
}

/* required class */
.MaxJSONEditor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #2d2d2d;
  color: #ccc;
  border-radius: 4px;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
  height: calc(100vh - 250px);
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
.EditorCopyButton {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1024;
  color: #fff;
}
.ShowFormatBox {
  display: flex;
  margin: 15px 0;
  height: calc(100vh - 250px);
}
.n-input .n-input-wrapper {
    padding-right: 0;
}
</style>

<template>
  <div id="main">
    <div style="display: flex">
      <n-input
        v-model:value="InputCardBox"
        style="margin: 0"
        placeholder="在此复制并粘贴你的JSON数据"
        type="textarea"
        size="small"
        :autosize="{
          minRows: 8,
          maxRows: 8,
        }"
      />
    </div>
    <div class="ShowFormatBox">
      <prism-editor
        class="MaxJSONEditor"
        v-model="JSONData"
        :highlight="highlighter"
      ></prism-editor>
    </div>
  </div>
</template>
