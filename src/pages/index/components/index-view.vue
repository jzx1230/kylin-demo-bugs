<template>
  <div id="app">
    <a href="./mapStateBug.html">mapStateBug</a>
    <a href="./pushWindowBug.html">pushWindowBug</a>
    <a href="./mockBug.html">mockBug</a>
  </div>
</template>

<style lang="less" rel="stylesheet/less" >
  @import '~common/css/base.less';

  #app {
    height: 100%;
  }

</style>

<dependency component="loadmore" src="common/components/loadmore.vue" lazy />

<script type="text/javascript">
  import { Component } from '@ali/kylin-framework';

  @Component
  export default class LoadmoreView {

    }

</script>
