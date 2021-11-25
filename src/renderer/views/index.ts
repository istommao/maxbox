import { defineComponent, ref } from 'vue'

import { NUpload, NUploadDragger, NIcon, NCard } from 'naive-ui'
import { NCheckbox, NSpace } from 'naive-ui'

import { AlbumsOutline } from '@vicons/ionicons5'

export default defineComponent({
  components: {
    NUpload,
    NUploadDragger,
    NIcon,
    AlbumsOutline,
    NCard,

    NCheckbox,
    NSpace
  },
  setup(props, ctx) {
    return {};
  },
});