<template>
  <a-layout style="padding-top: 80px;min-height: 100vh;">
    <a-layout-header class="title">
      <ul>
        <li>首页</li>
        <li>运动奖学金项目</li>
        <li>运动项目介绍</li>
        <li>留校服务</li>
        <li>关于我们</li>
      </ul>
      <ul>
        <li></li>
        <li>赛事项目</li>
        <li>学校介绍</li>
        <li>体育游学</li>
        <li></li>
      </ul>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', overflow: 'initial',clear: 'right' }" >
      <slot name="content" ></slot>
    </a-layout-content>
    <a-layout-footer :style="{background: 'black',padding: '0'}">
      <slot name="footer"></slot>
    </a-layout-footer>
  </a-layout>
</template>

<script>
    export default {
        name: "BasicLayout"
    }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0 0 30px 0;
  }
  li {
    display: inline-block;
    /*margin: 0 18px;*/
    min-width: 118px;
    text-align: center;
  }
  a {
    color: #42b983;
  }
  .title {
    margin-top: 0px;
    padding-top:0px;
    font-family: NotoSansHans;
    font-weight: normal;
    margin-right: 100px;
    float: right;
    margin-bottom: 80px;
  }
  .aboutUs {
    font-family: NotoSansHans;
    font-weight: bold;
    color: rgba(28, 28, 28, 1);
    padding: 3px 3px;
    background:rgba(255,255,255,1);
    border-radius:5px;
  }
</style>
