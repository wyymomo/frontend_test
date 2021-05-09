<template>
  <div>
    <el-button type="primary">
      el-button
    </el-button>

    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {

  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<style>
</style>
