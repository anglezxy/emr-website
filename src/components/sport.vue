<template>
<BasicLayout style="background: url('../../static/images/images(G)/G.jpg') no-repeat;background-size: 100%;background-position-y: -150px;background-position-x: 100px;">
  <div slot="content" style="margin-top: 150px">
    <div style="width: 70%;position:relative;margin: 80px auto;">
      <img src="../../static/images/images(G)/G_01.png">
      <div style="position:absolute;left: 0;top:150px">
        <a-icon type="close" style="color: white;font-size: 32px;font-weight: bolder;"/>
        <div style="height: 80px"></div>
        <a-icon type="close" style="color: white;font-size: 32px;font-weight: bolder;"/>
      </div>
      <div style="position:absolute;right: 0;top:150px">
        <a-icon type="close" style="color: white;font-size: 32px;font-weight: bolder;"/>
        <div style="height: 80px"></div>
        <a-icon type="close" style="color: white;font-size: 32px;font-weight: bolder;"/>
      </div>
    </div>
    <div style="width: 50%;position:relative;margin: 80px auto;">
      <p class="fontFamily indexTwo">
        全社会对体育的追捧造就了美国完善的青少年体育培训体系。体育对于青少年的意义远不止强身健体这么简单。在美国，每个家庭都会让孩子接触至少两项不同种类的运动，以此来培养青少年应对危机，与他人沟通协作的能力。精通某种体育项目的孩子不仅是同龄人仰慕的对象，更为自己今后获得优质高等教育铺路。因此，每年夏/冬季在美国初高中、各大高校举办的单项训练营，体能培训等项目受到美国家庭的热烈追捧。参与者更有机会与大学体育明星，传奇教练零距离接触，获得最先进的技术指导。
      </p>
      <br/>
      <p class="fontFamily indexTwo">
        联手美国各单项运动青训机构及高中运动队，BridgeSports致力为国内青少年打造优质的体育夏/冬令营平台，使孩子们有机会受益于美国先进的青训模式和理念，在自己热爱的项目中更快成长。
        <span style="color:#FF9800">
          BridgeSports也将陆续完成高校训练营合作协议，合作校园将包括常春藤名校哈佛，斯坦福，普林斯顿，以及遍布美国大学体育五大联盟的高校。
         </span>
        参与者进入美国大学校园接受篮球、排球、足球、击剑、橄榄球等各项主流运动的短期培训，接受大咖教练，明星运动员的指导。
        <span style="color:#FF9800">
         参观美国大学，感受校园文化的厚重，并与大学运动队、教练员构建联系，为日后以学生运动员身份进入美国大学打下基础。
        </span>
      </p>
      <p class="fontFamily indexTwo">
        另外，我们也与国内各单项俱乐部达成战略合作协议，今后将从美国大学以及各俱乐部引进国外教练进入中国开展训练营，让国内的青少年足不出户即可享受到先进的训练理念和国际化视野。
      </p>
    </div>
    <div style="width: 100%;margin: 0 auto;position: relative">
      <img src="../../static/images/images(G)/G_10.png" style="position: absolute;left: 0;width: 125px;height: 340px;margin-top:60px;">
      <img src="../../static/images/images(G)/G_12.png" style="position: absolute;right: 0;width: 125px;height: 340px;margin-top:60px;">
      <img src="../../static/images/images(G)/G_P.png">
    </div>
    <div style="width: 100%;margin: 60px auto;line-height: 25px" class="fontFamily">
      <p style="color:#d88307">详细训练营计划会定期在公众号中推送,<br/>请添加下方公众号二维码获取更多资讯</p>
      <img src="../../static/images/images(G)/G_24_1.png" style="width: 543px;height: 131px;margin-top:30px">
    </div>
    <div style="width: 70%;border: 1px solid rgba(255,139,0,1);width:699px;height:131px;position: relative;margin: 60px auto 100px auto;">
      <img src="../../static/images/images(G)/G_23.png" style="width: 72px;height: 91px;position: absolute;left: 21%; top: 20px;">
      <img src="../../static/images/images(G)/G_30.png" style="width: 150px;height: 57px;position: absolute;left: 15%; top: 37px;"/>
    </div>
    <hr  style="height:1px;border-width:0;color:white;background-color:rgba(255,255,255,1);;width: 80%;margin: 0 auto">
  </div>
  <div slot="footer" class="footer">
    <p class="pStyle" style="margin-bottom: 0;padding-bottom: 60px">
      美国运动员留学专家&nbsp;|&nbsp;<span style="color:#FF9300">Bridge Sports</span>&nbsp;|&nbsp;<span  class="hand"  @click="nextTo('/icomponent')">联系我们</span></p>
  </div>
</BasicLayout>
</template>

<script>
    import BasicLayout from "@/components/BasicLayout";
    export default {
        name: "sport",
        components: {BasicLayout},
      methods:{
        nextTo(name) {
          this.$router.push(name) ;
        }
      }
    }
</script>

<style scoped>
  .fontFamily {
    font-size:13px;
    font-family:NotoSansHans;
    font-weight:400;
    font-style:italic;
    color:rgba(255,254,254,1);
  }
  .indexTwo {
    text-indent:30px;
    display: box;
    display: -webkit-box;
    display: -moz-box;
    line-height: 25px;
    text-align: left;
  }
  .footer {
    /*position: absolute;*/
    margin-top: 30px;
    width: 100%;
    bottom: 30px;
    /*padding: 0 16px;*/
    /*margin: 48px 0 24px;*/
    text-align: center;
  }
  .pStyle {
    width: 100%;
    /*height: 48px;*/
    /*line-height: 48px;*/
    font-size: 26px;
    font-family: NotoSansHans;
    font-weight: 300;
    font-style: italic;
    color: rgba(255, 255, 255, 1);
    height: 24px;
  }
</style>
