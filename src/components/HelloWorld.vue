<template>
  <basic-layout>
    <div slot="content" style="margin-top: 150px">
      <h2 style="font-size: 33.07px">美国高校运动奖学金项目</h2>
      <h5 style="letter-spacing:1px;font-size: 8.73px">C&nbsp; O&nbsp; L&nbsp; L&nbsp; E&nbsp; G&nbsp; E &nbsp;&nbsp; A&nbsp; T &nbsp;H &nbsp;L&nbsp; E &nbsp;T &nbsp;I &nbsp;C &nbsp;&nbsp; S&nbsp; C&nbsp; H &nbsp;O&nbsp; L &nbsp;A &nbsp;R &nbsp;S&nbsp; H &nbsp;I&nbsp; P &nbsp;&nbsp; P&nbsp; R&nbsp; O &nbsp;G &nbsp;R &nbsp;A &nbsp;M</h5>
      <h1>项目概述</h1>
      <div  class="xmgaishu"  style="font-size: 13px">
        <p class="fontFamily sportText ">
         以“学生运动员”身份直升/转学进入美国大学就读全日制本科。修读意向专业，接受精英教育。课余时间参加校队训练和参加校际比赛，享受奖学金及各项运动员福利。<br/>
        </p>
        <p class="fontFamily sportText ">当一个人可以在大学生涯同时应付繁重的学业和艰苦的训练，他/她的竞争力在步入社会时可想而知。学生运动员这一杰出群体的诞生要归功于美国大学完善的体教结合系统。在致力于培养出社会各界精英人士的理念推动下，美国高等教育体系使学业与体育的双重成功成为可能。
        </p>
      </div>
      <img   style="height: 425px;width: 123px;position: absolute;left: 0px" src="../../static/images/images(B)/B_02.gif">
      <h1>升学路径</h1>
      <div class="shenxue" style="font-size: 13px;">
        <p><a-icon type="caret-left" style="color:#7F1753;fontSize:27px"/>1. 直接进入名校，四年顺利毕业后获得学士学位&nbsp;<a-icon type="caret-right" style="color:#7F1753;fontSize:27px;"/></p>
        <p><a-icon type="caret-left" style="color:#7F1753;fontSize:27px"/>2. 国内大学转学进入名校，毕业后获得学士学位 &nbsp;<a-icon type="caret-right" style="color:#7F1753;fontSize:27px;"/></p>
        <p><a-icon type="caret-left" style="color:#7F1753;fontSize:27px"/>3. 社区大学+名校2+2路线，毕业后获得学士学位 &nbsp;<a-icon type="caret-right" style="color:#7F1753;fontSize:27px;"/></p>
        <p style="color: #FF8B00;">(学位证书均由最终毕业学校颁发)</p>
      </div>
      <h1>教育收益</h1>
      <div class="shenxue" style="font-size: 13px">
        <p><a-icon type="caret-left" style="color:#7F1753;fontSize:27px"/>·美国名校留学背景，毕业证书·&nbsp;<a-icon type="caret-right" style="color:#7F1753;fontSize:27px;"/></p>
        <p><a-icon type="caret-left" style="color:#7F1753;fontSize:27px"/>·国际校友群，强大社会人脉资源·&nbsp;<a-icon type="caret-right" style="color:#7F1753;fontSize:27px;"/></p>
        <p><a-icon type="caret-left" style="color:#7F1753;fontSize:27px"/>·顶级教育背书，更强的社会竞争力·&nbsp;<a-icon type="caret-right" style="color:#7F1753;fontSize:27px;"/></p>
      </div>
      <div class="xmgaishu" style="border:1px solid rgba(255,139,0,1);border-radius:10px;margin-top: 80px;text-align: center;position: relative;">
        <h1 style="position: absolute;display: block;margin-top: -15px;text-align: center;width: 100%">个人成长</h1>
        <p style="padding: 90px 112px 78px 109px;font-size: 13px">
        <span style="line-height: 30px;height:60px">1.因为校队和队友的关系，学生运动员比普通留学生更容易融入美国校园文化，结交朋友 </span><br/>
          <span style="line-height: 60px">2.日常训练与教练、队友交流会更快提升英语能力 </span><br/>
        <span style="line-height: 60px">3.学校体育部会专门请企业高管给学生运动员上领导力提升、团队建设课程</span> <br/>
        <span style="line-height: 60px">4.优秀的时间管理能力，坚毅积极的人格，丰富独特的人生经历</span><br/>
        </p>
      </div>
      <img src="../../static/images/images(B)/B_16.png" style="position:absolute;right: 0;width: 137px;height: 520px;margin-top:-150px">
      <h1>运动员福利</h1>
      <div class="shenxue" style="text-align: left;margin-left: 10%;margin-right: 10%;font-size: 15px">
        <p v-for="(i,index ) in sportsPeople" :key="index"><a-icon type="caret-left" style="color:#7F1753;fontSize:27px"/>
          <span style="color:#FF8B00;font-size: 15px; ">{{ i.title }}</span><br/>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ i.content }}</span>
        </p>
      </div>
      <div class="xmgaishu" style="border:1px solid rgba(255,139,0,1);border-radius:10px;margin-top: 80px;text-align: center;position: relative;">
      <h1 style="position: absolute;display: block;margin-top: -15px;text-align: center;width: 100%">招生条件</h1>
      <p style="padding-top:50px;font-size: 13px"><span style="color: #7F1753">年龄：</span><span>17岁-21岁</span> </p>
        <p style="font-size: 13px"><span style="color: #7F1753">学历：</span><span>高中毕业，或国内大学大一大二（均需提供成绩单）</span></p>
        <p style="font-size: 13px"><span style="color: #7F1753">运动水平：</span>有国家三级运动员证书以上或者相近的体育运动能力
        </p>
        <p style="font-size: 13px;width: 80%;margin:0 auto;"><span>运动项目：足球、棒球、篮球、沙滩排球、保龄球、越野跑、击剑、曲棍球、美式足球
（美式橄榄球）、高尔夫、体操、冰球、长曲棍球、网球、步枪射击、赛艇、滑雪、垒球、游泳&跳水、田径、 排球、水球、摔跤、技巧啦啦操、竞技舞蹈（舞蹈啦啦操）</span>
        </p>
       <!-- <p style="padding: 50px 112px 78px 109px;">-->
        <div style="width: 80%;margin: 25px auto;font-size: 13px">
<!--        <div>-->
<!--          <a-icon type="caret-left" style="color:#7F1753;fontSize:27px;"/><p class="pline" style="margin-top:50px">有一定语言和学术基础</p>-->
<!--            <a-icon type="caret-right" style="color: #7F1753;font-size: 27px"/>-->
<!--        </div>-->
          <div v-for="s in items">
            <p style="display: inline-block;width: 5%;text-align: start;"><a-icon type="caret-left" style="color:#7F1753;fontSize:27px"/></p>
            <p class="pline">{{ s }}</p>
            <p style="text-align: start;display: inline-block;width: 5%"><a-icon type="caret-right" style="color: #7F1753;font-size: 27px"/></p>
          </div>
<!--        <div><a-icon type="caret-left" style="color:#7F1753;fontSize:27px"/><p class="pline">想要争取作为普通留学生无法考虑申请的学校</p><a-icon type="caret-right" style="color: #7F1753;font-size: 27px"/></div>-->
<!--        <div><a-icon type="caret-left" style="color:#7F1753;fontSize:27px"/><p class="pline">希望节省高额名校学费</p><a-icon type="caret-right" style="color: #7F1753;font-size: 27px"/></div>-->
<!--        <div><a-icon type="caret-left" style="color:#7F1753;fontSize:27px"/> <p class="pline">对美国校园/社会文化有浓厚感兴趣</p><a-icon type="caret-right" style="color: #7F1753;font-size: 27px"/></div>-->
        </div>
    </div>
      <img   style="height: 587px;width: 84px;position: absolute;left: 0px;margin-top:-300px" src="../../static/images/images(B)/B_10.png">
      <h1 style="background: url('../../static/images/images(B)/B_07.png') no-repeat center;background-size: 160px 40px">
        学术成绩要求
      </h1>
      <p style="font-size: 13px;color: #FF8B00;line-height: 30px">托福60分及以上（具体以校方要求为准）</p>
      <p style="font-size: 13px;color: #FF8B00;line-height: 30px">学术成绩GPA2.3以上（初三以及高中三年成绩或大学成绩单）</p>
      <img   style="height: 261px;width: 110px;position: absolute;right: 0px" src="../../static/images/images(B)/B_13.png">
      <h1>可选学校</h1>
      <div class="fontFamily" style="margin:0 auto;border-radius: 5px;border: #7F1753 solid 1px;width:571px;height:89px;">
        <p style="font-size: 13px;line-height: 30px;margin-top:15px">包含常春藤学校：哈佛大学，耶鲁大学，普林斯顿大学等<br/>
          以及其他顶级名校：坦福大学、杜克大学、加州大学系统等</p>
      </div>
      <div class="fontFamily" style="margin: 0 auto;width: 399.5px;text-align: center">
        <p  style="font-size: 13px;line-height: 30px;margin-top:15px">
          美国高校运动奖学金项目覆盖三大美国高校运动协会:美国大学体育协会(NCAA)、 美国大学校际体育协会(NAIA)、美国社区大学体育协会(NJCAA)
          三大联盟分别有成员校<span style="color: #FF8B00">1280</span>所、<span style="color: #FF8B00">250</span>所、和<span style="color: #FF8B00">525</span>所。
        </p>

      </div>
      <p class="clickP">
        点击进入“关于我们”页面，查看更多合作院校
      </p>
      <div style="margin: 0 auto;width: 76%;margin-top:80px;margin-bottom: 80px;">
        <div style="margin-bottom: 40px;width: 100%;display: flex;flex-direction: row;justify-content: space-between">
          <img src="../../static/images/images(B)/B_09.png" style="width: 80px;height: 80px;margin-top:35px"/>
        <img src="../../static/images/images(B)/B_03.gif" style="width: 280px;height:150px;"/>
          <img src="../../static/images/images(B)/B_09.png" style="width: 80px;height: 80px;margin-top:35px"/>
        </div>
        <p class="fontFamily sportText">说到学生运动员在美国的优势地位就不得不提美国大学体育系统。</p>
        <p class="fontFamily sportText">
          美国社会重视体育的程度不言而喻，而大学体育在美国高等教育文化中更是占据着举足轻重的地位。美国虽然没有专门的体育院校（分类为各综合类大学、文、理学院），但所有学校都会设立专门的体育部门并开展所有主流运动项目，为学生提供竞技的舞台。</p>
        <p class="fontFamily sportText">
          美国大学体育队不会招募职业运动员，学校更注重复合型人才的培养，专注为体育特长生创建优质的教育体系。除了自己的擅长的运动外，运动员还可以根据自己的学术兴趣方向自主选择专业，从而在学术领域也能达到非凡成就。独特的体教结合模式构成了精英教育的重要一环，使学业与体育的双重成功成为可能。
        </p>
        <p style="text-align: left;" class="threeSport">
          <span style="background: url('../../static/images/images(B)/B_07.png') no-repeat;
    background-size: 147px 40px;display: inline-block;width: 147px;height: 40px;padding-left:10px;">三大体育协会</span>
        </p>
<!--        <div style="position: relative">-->
        <p class="fontFamily sportText lineHeight">
          共26项运动的开展为学生运动员提供了广阔的竞技舞台，各项赛事由三个主要的大学体育协会组织和管理，分别为<span style="color:#ED7D31">NCAA</span>,<span style="color:#FFC000">NAIA</span>,
          以及<span style="color:#C00B74">NJCAA</span>
        </p>
        <p class="fontFamily sportText lineHeight">
          <span style="color:#ED7D31;font-size: 19px;">NCAA</span>
          <span style="color:#ED7D31">为美国大学体育系统顶级协会，</span>
          几乎所有美国的奥运选手和职业球员都出自这里。协会内部根据成员学校总体运动水平划分为三个等级：
          <br/>
          <br/>
          <span style="color:#ED7D31">Division I</span>: 竞技水平最高，由351所学校组成，占NCAA学校总数32%
          <br/>
          <span style="color:#FFC000">Division II</span>: 水平低于Division I，由308所大学组成，占28%
          <br/>
          <span style="color:#5F1264">Division III</span>: 水平为三个等级中最低，由443所大学组成，占40%
          <img src="../../static/images/images(B)/B_05.gif" style="width: 180px;height: 180px; float: right;margin-top: -140px;"/>
          <br/>
          <br/><br/>
          * NCAA每年为Division I和Division II学校发放接近30亿美金的奖学金,受益的运动员超过50万。Division III 和 Ivy League（常春藤联盟）不提供运动奖学金，但会根据学生运动员具体情况提供相应助学金或者学术经费支持。
        </p>
        <img   style="height: 424px;width: 96px;position: absolute;left: 0px" src="../../static/images/images(B)/B_02.gif">
        <p class="fontFamily sportText lineHeight">
          除了奖学金，<span style="color: #ED7D31">NCAA</span>成员校每年同样为学生运动员提供超过7500万美金的运动员基金用于帮助特别困难的学生运动员解决日常开销。比如家中发生紧急事故需要买机票回家，冬天需要添置衣物，或者购买日常生活必需品。成员校每年同样为学生运动员提供超过7500万美金的运动员基金用于帮助特别困难的学生运动员解决日常开销。比如家中发生紧急事故需要买机票回家，冬天需要添置衣物，或者购买日常生活必需品。
        </p>
        <br/><br/>
        <p class="fontFamily sportText lineHeight">
          <span style="color:#FFC000;font-size: 23.5px">NAIA</span>
          <span style="color:#FFC000;">联盟由超过250所小型私立大学组成，</span>
          整体运动水平低于
          <span style="color: #ED7D31">NCAA</span>
          。但由于其内部不进行等级划分，所以注册于任何
          <span style="color: #FFC000">NAIA</span>学校的学生运动员均有机会申请到奖学金。
          <span style="color: #FFC000">NAIA</span>每年为其成员校提供6亿美金奖学金。
        </p>
        <img   style="height: 587px;width: 145px;position: absolute;right: 0px" src="../../static/images/images(B)/B_16.png">
        <br/><br/>
        <p class="fontFamily sportText lineHeight">
          <span style="color: #9D055C;"><span style="font-size: 20.5px">NJCAA</span>为美国社区大学体育联盟。</span>
          与NCAA相同，NJCAA内部分为三个等级。
        </p>
        <br/>
        <p class="fontFamily  lineHeight">
          <span style="color:#ED7D31">Division I</span>： 221所大学
        </p>
        <p class="fontFamily  lineHeight">
          <span style="color:#FFC000">Division II</span>：118所大学
        </p>
        <p class="fontFamily  lineHeight">
          <span style="color:#601263">Division III</span>：98所大学
        </p>
        <br/><br/><br/>
        <p class="fontFamily  lineHeight sportText">
          NJCAA联盟中Division I和Division II学校会收到共计4.5亿美金用于发放学生运动员奖学金。虽然Division III学校的运动员没有运动奖学金，但因为学生运动员的身份也有机会申请到相当大比例的学术助学金。同时，NJCAA作为两年制社区大学，学费低廉，对学生学术能力（对国际生英语要求较低）和运动水平要求不高，完成两年社区大学学习后还可顺利转入任何四年制公、私立大学。较低的入学门槛使NJCAA联盟的成员学校广受青睐，成为学生获取美国精英教育的跳板。
        </p>
        <br/>
        <p class="fontFamily  lineHeight" style="color:#FFC000;font-size: 15px;">
          个联盟几乎覆盖了全美所有大学，为学生运动员提供了丰富的选择。
        </p>
<!--        </div>-->

      </div>
      <hr  style="height:1px;border-width:0;color:white;background-color:rgba(255,255,255,1);;width: 80%;margin: 0 auto">
    </div>

    <div slot="footer" class="footer">
      <p class="pStyle" style="margin-bottom: 0;padding-bottom: 60px">
        美国运动员专家&nbsp;|&nbsp;<span style="color:#FF9300">Bridge Sports</span>&nbsp;|&nbsp;联系我们</p>
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
        ],
        items: [
            '有一定语言和学术基础',"有意向前往美国高校训练、学习，接受精英教育","想要争取作为普通留学生无法考虑申请的学校",'希望节省高额名校学费','对美国校园/社会文化有浓厚感兴趣'
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
    font-size:19.78px;
    font-family:FZHZGBJW;
    font-weight:normal;
    font-style:italic;
    color:rgba(255,254,254,1);
    background: url('../../static/images/images(B)/B_07.png') no-repeat center;
    background-size: contain;

  }
  .h1bg {

  }
 h2 {
   font-size:66px;
   font-family:FZZYJW;
   font-weight:normal;
   font-style:italic;
   color:rgba(255,254,254,1);
   padding: 0 0;
   margin: 0 0;


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
  .pline {
    margin: 10px 0px;
    text-align: center;
    width: 80%;
    display: inline-block;
    font-size: 13px;
  }
    .footer {
      /*position: absolute;*/
      margin-top: 30px;
      width: 100%;
      bottom: 30px;
      /*padding: 0 16px;*/
      /*margin: 48px 0 24px;*/
      text-align: center;
      /*background: black;*/
      }

  .pStyle {
    width: 100%;
    /*height: 48px;*/
    /*line-height: 48px;*/
    font-size: 21.5px;
    font-family: NotoSansHans;
    font-weight: 300;
    font-style: italic;
    color:rgba(255,255,255,1);
    height: 24px;
  }
  .xmgaishu {
    font-size:13px;
    font-family:NotoSansHans;
    font-weight:400;
    font-style:italic;
    color:rgba(255,254,254,1);
    margin-left: 25%;
    margin-right:25%;
    text-align: left;
    line-height:20px;
  }
  .shenxue {
    font-size:13px;
    font-family:NotoSansHans;
    font-weight:400;
    font-style:italic;
    color:rgba(255,254,254,1);
    line-height:40px;
  }
  .fontFamily {
    font-family:NotoSansHans;
    font-weight:400;
    font-style:italic;
    line-height: 30px;
  }
  .lineHeight {
    line-height: 40px;
  }

  .clickP {
    margin: 0 auto;
    width:280px;
    font-size:13px;
    font-family:NotoSansHans;
    font-weight:400;
    font-style:italic;
    color:rgba(255,139,0,1);
    line-height:30px;
    border-bottom: solid 1px #FF9A00;
  }
  .sportText {
    text-align: start;
    text-indent:30px;
    display: box;
    display: -webkit-box;
    display: -moz-box;
    font-size:13px;
    font-family:NotoSansHans;
    font-weight:400;
    font-style:italic;
  }
  .threeSport {
    font-size:18px;
    font-family:FZZYJW;
    font-weight:normal;
    font-style:italic;
    margin: 20px 0px;
    line-height: 30px;
  }

</style>
