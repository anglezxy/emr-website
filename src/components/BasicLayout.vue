<template>
  <a-layout style="min-height: 100vh;">
    <img src="../../static/images/images(B)/B_15.png" style="float: left;margin-left:20px;margin-top:15px;height:32px;">
    <img src="../../static/images/images(B)/B_06.gif" style="float: right;margin-top:10px;">
    <a-layout-header style="padding-top: 40px;margin-bottom:50px">
      <img src="../../static/images/images(B)/logo.png" style="left:0px;margin-left:50px;position: absolute"/>
      <div class="nav">
        <ul>
          <li><a href="#">首页</a></li>
          <li >
            <a href="#"><span class="liBottom">运动奖学金项目</span><a-icon type="caret-down" style="color: white;font-size: 15px"/></a>
            <ul>
              <li><a href="#">赛事项目</a></li>
            </ul>
          </li>
          <li  class=""><a href="#"><span class="liBottom">运动项目介绍</span><a-icon type="caret-down" style="color: white;font-size: 15px"/></a>
          <ul>
            <li><a href="#">学校介绍</a></li>
          </ul>
          </li>
          <li class=""><a href="#"><span class="liBottom">留学服务</span><a-icon type="caret-down" style="color: white;font-size: 15px"/></a>
          <ul>
            <li>
              <a href="#">体育游学</a>
            </li>
          </ul>
          </li>
          <li><a href="#">Q&A</a></li>
          <li >
            <a style="color: black;background: white;border-radius: 2px;width: 80px;line-height: 25px" href="#">关于我们</a>
          </li>
        </ul>
      </div>
    </a-layout-header>
    <a-layout-content :style="{ overflow: 'initial',clear: 'right' }" >
      <slot name="content" ></slot>
    </a-layout-content>
    <a-layout-footer :style="{padding: '0'}">
      <slot name="footer"></slot>
    </a-layout-footer>
  </a-layout>
</template>

<script>
    export default {
        name: "BasicLayout",
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .nav {
    width: 100%;
    margin: 0px;

  }
  .nav ul {
    padding: 0;
    margin: 0;
    list-style: none;
    float: right;
    margin-right: 5%;
    font-size: 13px;
  }
  .nav li {
    float: left;
    position: relative;
    line-height: 30px;
  }
  .nav ul li a,.nav ul li a:hover {
    display: block;
    text-align: center;
    text-decoration: none;
    /*width: 100px;*/
    width: fit-content;
    margin: 0 10px;
    color: white;
    line-height: 30px;
  }
  .nav ul li:hover a {
    color: #fff;
  }
  .nav ul li ul {
    display: none;
  }
  .nav ul li:hover ul {
    display: block;
    position: absolute;
    top: 51px;
    left: 0;
    width: 100px;
    /*width: fit-content;*/
    margin: 0 10px;
    /*text-align: center;*/
    /*text-decoration: none;*/
  }
  .nav ul li:hover ul li a {
    display: block;
    color: #fff;
    /*background: black;*/
  }
  .nav ul li:hover ul li a:hover {
    /*background: black;*/
    color: white;
  }
  /*ul {*/
  /*  list-style-type: none;*/
  /*  padding: 0;*/
  /*  margin: 0 0 30px 0;*/
  /*}*/
  /*li {*/
  /*  display: inline-block;*/
  /*  width: fit-content;*/
  /*  text-align: center;*/
  /*  padding:0 5px;*/
  /*  !*line-height: 12px;*!*/
  /*  !*height: 25px;*!*/
  /*}*/
  .spanBlock {
    /*display: block;*/
    /*margin-top: 15px;*/
  }
  .liBottom {
    border-bottom: #FF8B00 solid 1px;
  }
  .liBg{
    background: white;
    color: black;
    border-radius: 2px;
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
