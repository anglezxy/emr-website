<template>
<basic-layout>
  <div slot="content" style="margin-top: 150px">
    <div style="margin: 0 auto; width: 100%;position: relative">
      <img src="../../static/images/images(H)/H01.png" style="width: 100%;"/>
      <div style="width: 100%;position: relative;">
        <img src="../../static/images/images(H)/H02.png" style="width: 50%;display: block;margin-left:25%;margin-top:-10%"/>
        <div style="position:absolute;left:15%;top:150px">
          <a-icon type="close" style="color: white;font-size: 32px;font-weight: bolder;"/>
          <div style="height: 80px"></div>
          <a-icon type="close" style="color: white;font-size: 32px;font-weight: bolder;"/>
        </div>
        <div style="position:absolute;right: 15%;top:150px">
          <a-icon type="close" style="color: white;font-size: 32px;font-weight: bolder;"/>
          <div style="height: 80px"></div>
          <a-icon type="close" style="color: white;font-size: 32px;font-weight: bolder;"/>
        </div>
      </div>
      <div style="width: 100%;position: relative;">
        <img src="../../static/images/images(H)/H03.png" style="width: 60%;display: block;margin-left:20%;margin-top:30px;"/>
        <img style="position:absolute;left:0%;top:150px;width: 125px;height: 340px" src="../../static/images/images(G)/G_10.png"/>
        <img style="position:absolute;right:0%;top:150px;width: 125px;height: 340px" src="../../static/images/images(G)/G_12.png"/>
      </div>
    </div>
    <div style="margin: 50px auto 100px auto; width: 100%;position: relative">
      <img src="../../static/images/images(H)/H04.png" style="width: 60%;display: block;margin-left:20%;"/>
      <img src="../../static/images/images(H)/H05.png" style="width: 40%;display: block;margin-left:30%;margin-top:30px;"/>
    </div>
    <div style="position:relative;width:100%;height:600px;background: url('../../static/images/images(H)/footer.png') no-repeat;background-size:100% 600px; ">
      <hr  style="z-index:999;height:1px;border-width:0;color:white;background-color:rgba(255,255,255,1);;width: 80%;margin: 0;position:absolute;bottom: 120px;left: 10%;">
      <p class="pStyle footer" style="bottom: 60px;position: absolute;width: 100%;margin: 0 auto;">
            美国运动员留学专家&nbsp;|&nbsp;<span style="color:#FF9300">Bridge Sports</span>&nbsp;|&nbsp;联系我们</p>
    </div>
  </div>
<!--  <div slot="footer" class="footer">-->
<!--    <p class="pStyle" style="margin-bottom: 0;padding-bottom: 60px">-->
<!--      美国运动员留学专家&nbsp;|&nbsp;<span style="color:#FF9300">Bridge Sports</span>&nbsp;|&nbsp;联系我们</p>-->
<!--  </div>-->
</basic-layout>
</template>

<script>
    import BasicLayout from "@/components/BasicLayout";
    export default {
        name: "Question",
        components: {BasicLayout}
    }
</script>

<style scoped>
  .footer {
    /*position: absolute;*/
    /*margin-top: 30px;*/
    width: 100%;
    bottom: 30px;
    /*padding: 0 16px;*/
    /*margin: 48px 0 24px;*/
    text-align: center;
    background: #4f1260;
  }
  .pStyle {
    width: 100%;
    /*height: 48px;*/
    /*line-height: 48px;*/
    font-size: 21.5px;
    font-family: NotoSansHans;
    font-weight: 300;
    font-style: italic;
    color: rgba(255, 255, 255, 1);
    /*height: 24px;*/
  }
</style>
