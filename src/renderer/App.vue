<template>
  <n-loading-bar-provider>
    <n-notification-provider>
      <n-message-provider>
        <div style="display: flex">
          <MainFrameLayout />
        </div>
      </n-message-provider>
    </n-notification-provider>
  </n-loading-bar-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { NLoadingBarProvider, NMessageProvider, NNotificationProvider } from 'naive-ui';

import MainFrameLayout from './layout/MainFrameLayout.vue'

export default defineComponent({
  components: {
    NMessageProvider,
    NNotificationProvider,
    NLoadingBarProvider,

    MainFrameLayout
  }
});
</script>