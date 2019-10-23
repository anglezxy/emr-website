<template>
  <basic-layout>
    <div slot="content">
      <h2>美国高校运动奖学金项目</h2>
      <h5 style="letter-spacing:2px;">C&nbsp; O&nbsp; L&nbsp; L&nbsp; E&nbsp; G&nbsp; E &nbsp;&nbsp; A&nbsp; T &nbsp;H &nbsp;L&nbsp; E &nbsp;T &nbsp;I &nbsp;C &nbsp;&nbsp; S&nbsp; C&nbsp; H &nbsp;O&nbsp; L &nbsp;A &nbsp;R &nbsp;S&nbsp; H &nbsp;I&nbsp; P &nbsp;&nbsp; P&nbsp; R&nbsp; O &nbsp;G &nbsp;R &nbsp;A &nbsp;M</h5>
      <h1>项目概述</h1>
      <div  class="xmgaishu">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以“学生运动员”身份直升/转学进入美国大学就读全日制本科。修读意向专业，接受精英教育。课余时间参加校队训练和参加校际比赛，享受奖学金及各项运动员福利。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当一个人可以在大学生涯同时应付繁重的学业和艰苦的训练，他/她的竞争力在步入社会时可想而知。学生运动员这一杰出群体的诞生要归功于美国大学完善的体教结合系统。在致力于培养出社会各界精英人士的理念推动下，美国高等教育体系使学业与体育的双重成功成为可能。
        </p>
      </div>
      <h1>升学路径</h1>
      <div class="shenxue">
        <p><a-icon type="caret-left" style="color:#7F1753;fontSize:27px"/>1. 直接进入名校，四年顺利毕业后获得学士学位&nbsp;<a-icon type="caret-right" style="color:#7F1753;fontSize:27px;"/></p>
        <p><a-icon type="caret-left" style="color:#7F1753;fontSize:27px"/>2. 国内大学转学进入名校，毕业后获得学士学位 &nbsp;<a-icon type="caret-right" style="color:#7F1753;fontSize:27px;"/></p>
        <p><a-icon type="caret-left" style="color:#7F1753;fontSize:27px"/>3. 社区大学+名校2+2路线，毕业后获得学士学位 &nbsp;<a-icon type="caret-right" style="color:#7F1753;fontSize:27px;"/></p>
        <p style="color: #FF8B00;">(学位证书均由最终毕业学校颁发)</p>
      </div>
      <h1>教育收益</h1>
      <div class="shenxue">
        <p><a-icon type="caret-left" style="color:#7F1753;fontSize:27px"/>·美国名校留学背景，毕业证书·&nbsp;<a-icon type="caret-right" style="color:#7F1753;fontSize:27px;"/></p>
        <p><a-icon type="caret-left" style="color:#7F1753;fontSize:27px"/>·国际校友群，强大社会人脉资源·&nbsp;<a-icon type="caret-right" style="color:#7F1753;fontSize:27px;"/></p>
        <p><a-icon type="caret-left" style="color:#7F1753;fontSize:27px"/>·顶级教育背书，更强的社会竞争力·&nbsp;<a-icon type="caret-right" style="color:#7F1753;fontSize:27px;"/></p>
      </div>
      <div class="xmgaishu" style="border:1px solid rgba(255,139,0,1);border-radius:10px;margin-top: 80px;text-align: center;position: relative;">
        <h1 style="position: absolute;display: block;margin-top: -30px;text-align: center;width: 100%">个人成长</h1>
        <p style="padding: 90px 112px 78px 109px;">
        <span style="line-height: 30px;height:60px">1.因为校队和队友的关系，学生运动员比普通留学生更容易融入美国校园文化，结交朋友 </span><br/>
          <span style="line-height: 60px">2.日常训练与教练、队友交流会更快提升英语能力 </span><br/>
        <span style="line-height: 60px">3.学校体育部会专门请企业高管给学生运动员上领导力提升、团队建设课程</span> <br/>
        <span style="line-height: 60px">4.优秀的时间管理能力，坚毅积极的人格，丰富独特的人生经历</span><br/>
        </p>
      </div>
      <h1>运动员福利</h1>
      <div class="shenxue" style="text-align: left;margin-left: 10%;margin-right: 10%">
        <p v-for="(i,index ) in sportsPeople" :key="index"><a-icon type="caret-left" style="color:#7F1753;fontSize:27px"/>
          <span style="color:#FF8B00 ">{{ i.title }}</span><br/>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ i.content }}</span>
        </p>
      </div>
      <hr  style="height:2px;border-width:0;color:white;background-color:white">
    </div>
    <div slot="footer" class="footer">
      <p class="pStyle" style="margin-bottom: 0;padding-bottom: 60px">美国运动员专家&nbsp;&nbsp;|&nbsp;&nbsp;<span style="color:#FF9300">Bridge Sports</span>&nbsp;&nbsp;|&nbsp;&nbsp;联系我们</p>
    </div>
  </basic-layout>
</template>

<script>
  import BasicLayout from "@/components/BasicLayout";
  export default {
    name: 'HelloWorld',
    components: {BasicLayout},
    data() {
      return {
        msg: '',
        sportsPeople:[
          {title: '1. 丰厚的运动奖学金，最高覆盖超过两百万人民币', content: '三大体育协会每年拨款共计超过40亿美金给各个成员大学，用于支付优秀学生运动员的学费和食宿。因为杰出的运动水平，绝大多数中国运动员可以收到全额奖学金及食宿报销，最高覆盖超过200万人名币（奖学金加食宿）几乎可以说是完全免费的美国留学体验。'},
          {title: '2. 学生运动员基金',content: '除了奖学金，学校每年还会提供超过7500万美金的基金用于帮助特别困难的学生运动员解决日常开销。比如家中发生紧急事故需要买机票回家，冬天需要添置衣物，或者购买日常生活必需品。'},
          {title: '3. 以较低的语言门槛进入知名大学',content: '学校的体育部门（Athletics Department）非常青睐高水平国际运动员，比如中国的跳水运动员，非洲的田径运动员以及南美的足球运动员。为了让优秀的体育人才为其效力，很多美国大学会降低托福以及SAT（美国大学入学考试）的分数线，以此来吸引学生运动员生源。'},
          {title: '4. 强大的学术支持',content: '帮助运动员在学术领域取得非凡成就是美国大学最崇高的使命。教授老师们对学生运动员会格外关注，为学生运动员提供尽可能的学术指导。学校也会为每一名运动员配备学术导师进行1对1辅导，帮助运动员以优异的成绩毕业，使其在所选的学术领域同样闪光。'},
          {title: '5. 关注学生身心健康', content: '美国大学体育部门为运动员专门配备营养师，理疗专家以及医务人员，全天候监控运动员的身体和心理成长，确保学生运动员时刻以良好的状态去迎接学业和运动挑战。'},
          {title: '6. 运动装备赞助',content: '各大校队均由知名的体育品牌赞助，比如阿迪达斯，耐克，安德玛等等。运动员为学校效力期间可以免费领取大量的运动装备包括T恤，卫衣，风衣，夹克，羽绒服，运动短裤/长裤，运动鞋等等。特制的校队装备使学生运动员成为校园内辨识度最高的群体。'},
          {title: '7. 较高的媒体曝光和校园地位',content: '美国体育的高度商业化以及民众对体育的疯狂追捧，使大学体育尽享媒体青睐。几乎所有项目联赛都会由社交媒体、地方电视台，以及诸如ESPN、福克斯等体育媒体巨头进行实况转播，获得荣誉的运动员更有机会接受媒体专访。学生运动员在校园里会获得同学和老师的尊敬，经常受邀为嘉宾参加校内的访谈以及各种学校活动。'},
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    margin-top: 60px;
    margin-buttom: 20px;
    height:39px;
    font-size:40px;
    font-family:FZHZGBJW;
    font-weight:normal;
    font-style:italic;
    color:rgba(255,254,254,1);
  }
 h2 {
   font-size:66px;
   font-family:FZZYJW;
   font-weight:normal;
   font-style:italic;
   color:rgba(255,254,254,1);
   padding: 0 0;
   margin: 0 0
 }
 h5 {
   padding: 0 0;
   margin: 0 0;
   font-size:17px;
   font-family:NotoSansHans;
   font-weight:400;
   font-style:italic;
   color:rgba(255,139,0,1);
 }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 18px;
  }

  a {
    color: #42b983;
  }
  p {
    margin: 0 0 ;
  }
    .footer {
      /*position: absolute;*/
      width: 100%;
      bottom: 30px;
      /*padding: 0 16px;*/
      /*margin: 48px 0 24px;*/
      text-align: center;
      background: black;
      }

  .pStyle {
    width: 100%;
    /*height: 48px;*/
    /*line-height: 48px;*/
    font-size: 43px;
    font-family: NotoSansHans;
    font-weight: 300;
    font-style: italic;
  }
  .xmgaishu {
    font-size:26px;
    font-family:NotoSansHans;
    font-weight:400;
    font-style:italic;
    color:rgba(255,254,254,1);
    margin-left: 10%;
    margin-right:10%;
    text-align: left;
  }
  .shenxue {
    font-size:26px;
    font-family:NotoSansHans;
    font-weight:400;
    font-style:italic;
    color:rgba(255,254,254,1);
    line-height:59px;
  }


</style>
