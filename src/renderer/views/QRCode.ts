import { defineComponent, ref, watch } from 'vue'

import {
  NUpload,
  NUploadDragger,
  NIcon,
  NCard,
  NCheckbox,
  NSpace,
  NInput,
  NButton,
  useMessage,
} from 'naive-ui'

import { useDebounce } from '@vueuse/core'

import qrcodeParser from "qrcode-parser";

import QRCode from 'qrcode'


export default defineComponent({
  components: {
    NUpload,
    NInput,
    NCard,
    NSpace,
    NButton
  },
  setup() {
    const InputCardBox = ref('');
    const ImgBase64Data = ref('');

    const MessageBox = useMessage();

    const generateQR = async (text) => {
      if (text === '') return;

      try {
        const b64data = await QRCode.toDataURL(text);
        ImgBase64Data.value = b64data;
      } catch (err) {
        MessageBox.error(err.toString());
        console.error(err)
      }
    }
    const debouncedInputCardBox = useDebounce(InputCardBox, 500)

    watch([debouncedInputCardBox], async (newVal) => {
      if (newVal) {
        await generateQR(InputCardBox.value.trim())
      }
    });

    const doParseQrcode = async (file) => {
      // input should be File object, image url, image base64
      try {
        const result = await qrcodeParser(file);
        InputCardBox.value = result;
      } catch (err) {
        MessageBox.error(err.toString());
        console.log(err);
      }
    };

    const handlePaste = async (evt) => {
      const dT = evt.clipboardData;
      const file = dT.files[0];

      if (file && (file.type === 'image/png')) {
        await doParseQrcode(file);
      }
    };


    function dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), 
          n = bstr.length, 
          u8arr = new Uint8Array(n);
          
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      
      return new File([u8arr], filename, {type:mime});
    }

    const onDropHandler = async (evt) => {
      evt.stopPropagation();
      evt.preventDefault();

      var df = evt.dataTransfer;
      var file = evt.dataTransfer.files[0];
      if (!file) {
        var imageHtmlString = evt.dataTransfer.getData('text/html');
        var tmpDiv = document.createElement('div');
        tmpDiv.innerHTML = imageHtmlString.trim();
        const base64Data = tmpDiv.getElementsByTagName('img')[0].getAttribute('src');
        try {
            file = dataURLtoFile(base64Data, 'qrcode.png');    
        } catch (err) {
          MessageBox.error('解析失败，请检查二维码是否有效、清晰');
          console.log(err);
          return;
        }
      }

      if (file && (file.type === 'image/png') ) {
        await doParseQrcode(file);
      }
    };


const getBlob = function(b64Data, fileName, sliceSize=512) {
    var mimeString = b64Data.split(',')[0].split(':')[1].split(';')[0]; // mime类型
    var byteCharacters = atob(b64Data.split(',')[1]); //base64 解码

    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, {type: mimeString});
    return blob;
}

    const downloadBlob = function(blob, fileName) {
        var link = document.createElement('a');  
        var href = window.URL.createObjectURL(blob);
        link.href = href;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();

        // 延时保证下载成功执行，否则可能下载未找到文件的问题
        setTimeout(function () {
            window.URL.revokeObjectURL(href); // 释放Url对象
            document.body.removeChild(link);
        }, 100);
    };

    const downloadQRCode = function (fileName) {
        var base64Text = ImgBase64Data.value;

        if (InputCardBox.value) {
            var blob = getBlob(base64Text, fileName);
            downloadBlob(blob, fileName);
        }
    };

    const downloadQRCodeHanlder = () => {
      downloadQRCode('QRCode.png');      
    }

    return { downloadQRCodeHanlder, generateQR, InputCardBox, ImgBase64Data, handlePaste, onDropHandler };
  },
});
