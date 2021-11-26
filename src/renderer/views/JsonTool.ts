import { defineComponent, ref, watch } from 'vue'

import {
  NUpload,
  NUploadDragger,
  NIcon,
  NCard,
  NCheckbox,
  NSpace,
  NInput,
  useMessage,
} from 'naive-ui'

import { AlbumsOutline } from '@vicons/ionicons5'

// @ts-ignore
import { PrismEditor } from 'vue-prism-editor'

import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere

// @ts-ignore
import { highlight, languages } from 'prismjs/components/prism-core'

import 'prismjs/components/prism-json'
import '../assets/styles/prism-dracula.css'
import { useDebounce } from '@vueuse/core'

export default defineComponent({
  components: {
    NUpload,
    NUploadDragger,
    NIcon,
    AlbumsOutline,
    NCard,
    NInput,

    NCheckbox,
    NSpace,
    PrismEditor,
  },
  setup(props, ctx) {
    const JSONData = ref('')

    const InputCardBox = ref('')
    const MessageBox = useMessage();

    const debouncedInputCardBox = useDebounce(InputCardBox, 500)

    const FormatJSONData = (data: string) => {
        if (data === '')  {
            return;
        }

        try {
            const format_data = JSON.parse(data);
            JSONData.value = JSON.stringify(format_data, null, 4);
        } catch (err) {
            MessageBox.error(err.toString());
        }
    }

    watch([debouncedInputCardBox], (newVal) => {
      if (newVal) {
        FormatJSONData(InputCardBox.value)
      }
    })

    const highlighter = (code) => {
      return highlight(code, languages.json)
    }
    return { JSONData, highlighter, InputCardBox }
  },
})
