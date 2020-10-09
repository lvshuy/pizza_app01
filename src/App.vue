<template>
    <div class="container">
    <app-header></app-header>
    </div>
</template>
<script>
import Header from './components/Header';
export default {
  components:{
    //驼峰命名必须用引号括起来
    "app-header":Header
    //appHeader:Header
  }
}
</script>
<style>

</style>