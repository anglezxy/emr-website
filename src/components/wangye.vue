<template>
    <basic-layout>
        <div slot="header" class="my-header" style="margin-bottom:0px;">
            <div style="left:0px;margin-left:110px;position: absolute;margin-top: -35px">
                <img src="../../static/images/images(B)/logo-none-font.png"/><br/>
                <span style="color:grey;font-size: 10px;letter-spacing: 12px;padding-left: 3px;font-style: italic;">美国运动留学专家</span>
            </div>
            <div class="w3-bar" style="max-width: 1300px;margin: 0 auto;">
                <a @click="nextTo('/icomponent')" href="#" class="w3-bar-item w3-button w3-right"
                   style="letter-spacing:normal;color: black;background: white;border-radius: 2px;width: 64px;line-height: 25px;;padding: 0 5px;margin: 0 20px">关于我们</a>
                <a href="#" class=" w3-button w3-right" style="padding-top: 5px;margin: 0 5px"
                   @click="nextTo('/question')">Q&A</a>
                <div class="w3-dropdown-hover w3-right">
                    <button class="w3-button w3-bottombar " @click="nextTo('/f')" style="font-size: 16px">留学服务
                        <a-icon type="caret-down" style="color: white;font-size: 15px"/>
                    </button>
                    <div class="w3-dropdown-content w3-bar-block w3-card-4">
                        <a href="#" class="w3-bar-item w3-button" @click="nextTo('/sport')" style="padding-left: 8px;">体育游学</a>
                    </div>
                </div>
                <div class="w3-dropdown-hover w3-right">
                    <button class="w3-button w3-bottombar w3-margin-right" @click="nextTo('/d')"
                            style="font-size: 16px;">运动项目介绍
                        <a-icon type="caret-down" style="color: white;font-size: 15px"/>
                    </button>
                    <div class="w3-dropdown-content w3-bar-block w3-card-4">
                        <a href="#" class="w3-bar-item w3-button" @click="nextTo('/c')">学校介绍</a>
                    </div>
                </div>
                <div class="w3-dropdown-hover w3-right">
                    <button class="w3-button w3-bottombar w3-margin-right" @click="nextTo('/b')"
                            style="font-size: 16px">运动奖学金项目
                        <a-icon type="caret-down" style="color: white;font-size: 15px"/>
                    </button>
                    <div class="w3-dropdown-content w3-bar-block w3-card-4">
                        <a href="#" class="w3-bar-item w3-button" @click="nextTo('/e')">赛事项目</a>
                    </div>
                </div>
                <a href="#" class="w3-bar-item w3-button w3-right" style="margin:0 20px;padding:0;"
                   @click="nextTo('/wangye')">首页</a>
            </div>
            <div style="width: 100%; margin-top: -187px; visibility:hidden;">
                <img src="../../static/images/images(A)/wangye2_02.png" style="width: 100%;margin-bottom: 30px">
            </div>
        </div>
        <div slot="content">
            <!--            <div style="width: 100%; margin-top: -187px;">-->
            <!--                <img src="../../static/images/images(A)/wangye2_02.png" style="width: 100%">-->
            <!--            </div>-->
            <div style="width: 100%;margin: 0px auto;">
                <img src="../../static/images/images(A)/toBe2.png" style="max-width: 100%">
                <p @click="nextTo('/b')"
                   style="font-size: 24px;font-weight: 700;background: url('../../static/images/images(A)/wangye2_10.png') no-repeat;background-size: 380px 38px;background-position: center center"
                   class="contactus hand">
                    美 国 高 校 运 动 奖 学 金 项 目
                </p>
                <img src="../../static/images/images(A)/know.png" @click="nextTo('/b')">
            </div>
            <div style="height: 1000px;width: 100%;position: relative;margin: 50px auto;background: url('../../static/images/images(A)/run.png') no-repeat;background-size: 100% 1000px;">
                <!--            <img src="../../static/images/images(A)/run.png" style="width: 1300px;">-->
                <img src="../../static/images/images(A)/clieck_know.png"
                     style="position: absolute;right: 0px;bottom: 250px;width: 280px;margin-right:10%"
                     @click="nextTo('/c')" class="hand">
                <img src="../../static/images/images(A)/sport_pro.png"
                     style="position: absolute;right: 0;bottom: 130px;width: 280px;margin-right:10%"
                     @click="nextTo('/d')" class="hand">
            </div>
            <div style="width: 100%;">
                <img src="../../static/images/images(A)/wangye2_16.png" style="margin: 150px auto;">
            </div>
            <div style="width: 100%;margin: 100px 0px;display: flex;flex-flow: wrap;justify-content: center">
                <div style="width: 30%;padding: 0 10px;">
                    <video src="" width="100%" height="240" controls="controls">
                        Your browser does not support the video tag.
                    </video>
                    <p>视频1</p>
                </div>
                <div style="width: 30%;padding: 0 10px">
                    <video src="" width="100%" height="240" controls="controls">
                        Your browser does not support the video tag.
                    </video>
                    <p>视频2</p>
                </div>
                <div style="width: 30%;padding: 0 10px;">
                    <video src="" width="100%" height="240" controls="controls">
                        Your browser does not support the video tag.
                    </video>
                    <p>视频3</p>
                </div>
                <div style="width: 30%;padding: 0 10px">
                    <video src="" width="100%" height="240" controls="controls">
                        Your browser does not support the video tag.
                    </video>
                    <p>视频4</p>
                </div>
                <div style="width: 30%;padding: 0 10px;">
                    <video src="" width="100%" height="240" controls="controls">
                        Your browser does not support the video tag.
                    </video>
                    <p>视频5</p>
                </div>
                <div style="width: 30%;padding: 0 10px">
                    <video src="" width="100%" height="240" controls="controls">
                        Your browser does not support the video tag.
                    </video>
                    <p>视频6</p>
                </div>
            </div>
            <div style="width: 100%;position: relative;height: 600px;margin: 150px auto 0 auto;">
                <img src="../../static/images/images(A)/q_a_half.png"
                     style="position: absolute;right: 0px;height: 460px;top:-14px"/>

                <div>
                    <img src="../../static/images/images(A)/question_resolve.png" class="hand"
                         style="position:absolute;width: 280px;right: 0;margin-top: -20px; margin-right: 10%;"
                         @click="nextTo('/question')">
                    <div style="width: 90%;margin: 0 auto;font-size: 16px;line-height: 50px;color: #FFFFFF;border: 1px dashed #ff9300;border-radius: 7px"
                         class="fontFamily1">
                        <div style="width: 100px;float:left;height:369px;padding-top:14px;">
                            <a-icon type="caret-up"
                                    style="color:rebeccapurple;font-size: 50px;"/>
                            <img src="../../static/images/images(A)/wangye2_35.png" style="margin-bottom:110px;">
                            <a-icon type="caret-down"
                                    style="color:rebeccapurple;font-size: 50px;"/>
                        </div>
                        <div style="text-align: start;margin-top: 20px;font-size: 22px;width: 1080px">
                            <p>什么是美国大学学生运动员（student-athlete）?<br/>
                                美国大学学生运动员是在大学全日制在读并且代表学校训练和参加校际比赛的学生。
                            </p>

                            <p>
                                学生运动员的学术门槛是什么？语言分数的要求？
                                结合学校知名度，学术影响力，每个学校对国际生的语言要求都不同。不过作为一名学生运动员，尤其是运动成绩出色的运动员，语言成绩不会成为很重要的门槛。通过多年的招生经验，我们得知有些学校会相应的调低语言分数线。我们曾经就遇到过某排名前10的公立大学为了招募一名心仪的队员，将托福分数线从90分降到50分，有些学校甚至会免除托福要求。当然，这不意味这学习语言就没有必要，很多时候学校会通过这种方式把运动
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style="width: 100%;margin: 0px auto 50px auto;position: relative;">
                <!--      <img src="../../static/images/C_05.png" style="left:0;position: absolute;height: 425px;width: 186px;">s-->
                <!--      <img src="../../static/images/C_08.png" style="right:0;position: absolute;height: 425px;width: 176px;">-->
                <img src="../../static/images/images(A)/wangye2_21.png"
                     style="position:absolute;left: 0;width: 128px;margin-top:80px">
                <img src="../../static/images/images(A)/wangye2_20.png"
                     style="position:absolute;right: 0;width: 187px;">
                <!--      <div style="background:url('../../static/images/images(I)/I_93.png') no-repeat;background-size:100%;width:120px;height:90%;position:absolute;left: 0;"></div>-->
                <!--      <img src="../../static/images/images(I)/I_93.png" style="position:absolute;left: 176px;">-->
                <!--      <div style="background:url('../../static/images/images(I)/information_r.png') no-repeat;background-size:100%;background-position-x: 70px;width:186px;height:90%;position:absolute;right: 0;"></div>-->
                <div style="position: relative;">
                    <img src="../../static/images/images(I)/I_07.png"
                         style="margin-right: 40px;width: 100px;height: 100px;position: absolute;left: 20%;top:-60px">
                </div>
                <p style="font-size: 24px;font-weight: bold;
                    background: url('../../static/images/images(A)/wangye2_10.png') no-repeat;background-size: 480px 38px;background-position: center center"
                   class="contactus">
                    LET US KNOW MORE ABOUT YOU
                </p>
                <!--      <div style="background: url('../../static/images/images(I)/icon1.png') no-repeat;background-size: 100%;width: 80%;margin:0 auto;">-->
                <div class="fontFamily" style="font-size: 16px;margin-top: 100px">
                    <p style="margin: 15px 0;">
                        <a-icon type="caret-left" style="color:#FF8B00;font-size: 30px"/>
                        <span style="display: inline-block;width: 375px;">您的性别</span>
                        <a-icon type="caret-right" style="color:#FF8B00;font-size: 30px"/>
                        <br>
                        <!--        <br/>-->
                        <input class="inputStyle"/>
                    </p>
                    <p>
                        <a-icon type="caret-left" style="color:#FF8B00;font-size: 30px"/>
                        <span style="display: inline-block;width: 375px;">您的年龄</span>
                        <a-icon type="caret-right" style="color:#FF8B00;font-size: 30px"/>
                        <br>
                        <input class="inputStyle" style="border:1px solid #cccccc;background: none;"/>
                    </p>
                    <p>
                        <a-icon type="caret-left" style="color:#FF8B00;font-size: 30px"/>
                        <span style="display: inline-block;width: 375px;">您所在年级</span>
                        <a-icon type="caret-right" style="color:#FF8B00;font-size: 30px"/>
                        <br>
                        <input class="inputStyle"/>
                    </p>
                    <p>
                        <a-icon type="caret-left" style="color:#FF8B00;font-size: 30px"/>
                        <span style="display: inline-block;width: 375px;">您所从事的项目</span>
                        <a-icon type="caret-right" style="color:#FF8B00;font-size: 30px"/>
                        <br>
                        <input class="inputStyle" style="border:1px solid #cccccc;background: none;"/>
                    </p>
                    <p>
                        <a-icon type="caret-left" style="color:#FF8B00;font-size: 30px"/>
                        <span style="display: inline-block;width: 375px;">您是否代表过专业队</span>
                        <a-icon type="caret-right" style="color:#FF8B00;font-size: 30px"/>
                        <br>
                        <input class="inputStyle"/>
                    </p>
                    <p>
                        <a-icon type="caret-left" style="color:#FF8B00;font-size: 30px"/>
                        <span style="display: inline-block;width: 375px;">您目前的训练机构</span>
                        <a-icon type="caret-right" style="color:#FF8B00;font-size: 30px"/>
                        <br>
                        <input class="inputStyle"/>
                    </p>
                    <p>
                        <a-icon type="caret-left" style="color:#FF8B00;font-size: 30px"/>
                        <span style="display: inline-block;width: 375px;">您目前的运动等级</span>
                        <a-icon type="caret-right" style="color:#FF8B00;font-size: 30px"/>
                        <br>
                        <input class="inputStyle"/>
                    </p>
                    <p>
                        <a-icon type="caret-left" style="color:#FF8B00;font-size: 30px"/>
                        <span style="display: inline-block;width: 375px;">您有通过运动技能出国留学的意向吗</span>
                        <a-icon type="caret-right" style="color:#FF8B00;font-size: 30px"/>
                        <br>
                        <input class="inputStyle"/>
                    </p>
                </div>
                <div style="width: 50%;margin: 100px auto 180px auto;font-size: 22px;color:#FFFEFE;position:relative"
                     class="fontFamily1">
                    <img src="../../static/images/images(I)/r_10.png"
                         style="position: absolute;left: 0;width: 100%;height: 400px">
                    <p>请留下您的联系方式： <br/><span style="font-size: 14px;">（以下任选其一）</span></p>
                    <p class="pText"><span style="float: left">手机号:</span></p>
                    <p class="pText"><span style="float: left">微信号:</span></p>
                    <p class="pText"><span style="float: left">&nbsp;QQ号:</span></p>
                    <p class="pText"><span style="float: left">电子邮箱:</span></p>
                </div>
                <!--      </div>-->
            </div>
            <img src="../../static/images/images(E)/E_02.png" style="float: left;width: 167px;height: 377px;">
            <img src="../../static/images/images(E)/E_04.png" style="float: right;width: 167px;height: 377px;">
            <div style="margin:280px auto 180px auto;width: 80%;">
                <p class="fontFamily" style="color:#FF9800;font-size: 15px;display: none">想知道更多美国大学联赛信息<br>
                    请关注下方二维码</p>
                <div style="width: 100%;">
                    <div style="display: inline-block; left:0;margin-left:110px;z-index: 1;position:absolute;margin-top:50px;">
                        <p class="fontFamily" style="font-size: 28px;font-weight: bold;margin-bottom:5px;">扫 码 关 注</p>
                        <img src="../../static/images/images(E)/three.png" style="width: 127px;">
                    </div>
                    <div style="display: inline-block;margin-right:50px; font-size: 20px;font-style: italic">
                        <img src="../../static/images/images(E)/E_06.jpg" style="width: 240px;height: 240px;">
                        <p>微信公众号</p>
                    </div>
                    <div style="display: inline-block;margin-left: 50px;font-size: 20px;font-style: italic">
                        <img src="../../static/images/images(E)/E_06.jpg" style="width: 240px;height: 240px;">
                        <p>微信客服</p>
                    </div>
                    <div style="display: inline-block;right:0;margin-right: 110px;z-index: 1;position:absolute;margin-top:50px;">
                        <p class="fontFamily" style="font-size: 28px;font-weight: bold;margin-bottom:5px;">扫 码 关 注</p>
                        <img src="../../static/images/images(E)/three.png" style="width: 127px;">
                    </div>
                </div>
            </div>
            <hr style="height:2px;border-width:0;color:white;background-color:rgba(255,255,255,1);;width: 80%;margin: 0 auto">
        </div>
        <div class="footer" slot="footer">
            <p class="pStyle" style="margin-bottom: 0;padding-bottom: 60px">
                美国运动员留学专家&nbsp;|&nbsp;<span style="color:#FF9300">Bridge Sports</span>&nbsp;|&nbsp;<span class="hand"
                                                                                                         @click="nextTo('/icomponent')">联系我们</span>
            </p>
        </div>
    </basic-layout>
</template>

<script>
    import BasicLayout from "./BasicLayout";

    export default {
        name: "wangye",
        components: {BasicLayout},
        methods: {
            nextTo(name) {
                this.$router.push({path: name});
            }
        }
    }
</script>

<style scoped>
    .fontFamily {
        font-size: 35px;
        font-family: FZXBSJW;
        font-weight: normal;
        font-style: italic;
        color: rgba(255, 255, 255, 1);
        line-height: 24px;
    }

    .fontFamily1 {
        font-size: 15px;
        font-family: NotoSansHans;
        font-weight: 400;
        font-style: italic;
        color: rgba(255, 140, 0, 1);
        line-height: 44px;
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

    .inputStyle {
        width: 353px;
        height: 32px;
        background: rgba(77, 77, 77, 1);
        border: none;
        margin-top: 15px;
        color: white;
    }

    .contactus {
        font-size: 26px;
        font-family: FZZYJW;
        font-weight: bolder;
        font-style: italic;
        color: rgba(255, 254, 254, 1);
        /*line-height:46px;*/
    }

    .contText {
        font-size: 15px;
        font-family: NotoSansHans;
        font-weight: 400;
        font-style: italic;
        color: rgba(255, 254, 254, 1);
        line-height: 24px;
    }

    .pText {
        width: 387px;
        height: 32px;
        border: 1px solid rgba(255, 255, 255, 1);
        /*margin-left: 157px;*/
        line-height: 32px;
        margin: 20px auto;

    }

    .my-header {
        background: url("../../static/images/images(A)/wangye2_02.png") no-repeat;
        background-size: 100%;

        /*height: 1080px;*/
    }
</style>
