<template>
  <a-layout>
    <Sider></Sider>
    <a-layout :style="{ marginLeft: '320px' }">
      <Content></Content>
    </a-layout>
  </a-layout>
</template>

<script>
import Sider from './Sider.vue'
import Content from './Content.vue'

export default {
  name: 'LayoutComponent',
  components: {
    Sider,
    Content,
  },
}
</script>
