<template>
  <div>
    <div class="w clearfix">
      <div class="contian-Tab">
        <div class="asi"></div>
        <div class="aside-top">咨询培训</div>
        <div class="aside-center center" @click="handel">咨询</div>
        <div class="aside-bottom three" @click="handelone">培训</div>
        <div class="imgleft">
          <img src="../training/1111.png" alt="" />
        </div>
      </div>
      <!-- 咨询！！！！！！！！！！ -->
      <div class="contian-main">
        <div class="mainImg">
          <img src="../training/czx.png" alt="" />
        </div>

        <div class="main-p2">
          <img src="../training/ym 1_s1.gif" alt="" />
        </div>
      </div>
      <!-- 培训！！！！！ -->
      <div class="train-main">
        <div>
          <img src="../training/ym2 1_s1.png" alt="" />
        </div>
        <div class="train-txt">
          遥创科技为创业孵化、政府园区、大企业、投资管理等机构的高级管理人员提供高端化、定制化的研修班。同时遥创科技提供海外交流学习课程，为高级管理人员寻找新模式、新趋势的合作机会。
        </div>
        <div class="train-main-box">
          <div class="main-box-hd">创业孵化科研班</div>
          <img class="main-box-hdt" src="../training/123.gif" alt="" />
          <button class="main-box-footer" @click="tiaozhuan">查看详情</button>
          <img class="main-box-right" src="../training/xia.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    tiaozhuan() {
      this.$router.push('/details')
    },
    handel() {
      var contianMain = document.querySelector(".contian-main");
      var trainMain = document.querySelector(".train-main");
      var asi = document.querySelector(".asi");
      var three = document.querySelector(".three");
      var center = document.querySelector(".center");
      center.style.background = "#ededed";
      three.style.background = "#fff";
      asi.style.top = "70px";
      contianMain.style.display = "block";
      trainMain.style.display = "none";
    },
    handelone() {
      var contianMain = document.querySelector(".contian-main");
      var trainMain = document.querySelector(".train-main");
      var asi = document.querySelector(".asi");
      var asi = document.querySelector(".asi");
      var three = document.querySelector(".three");
      var center = document.querySelector(".center");
      three.style.background = "#ededed";
      center.style.backgroundColor = "#fff";
      asi.style.top = "130px";
      contianMain.style.display = "none";
      trainMain.style.display = "block";
    }
  }
};
</script>

<style lang="less" scoped>
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.contian-Tab {
  position: relative;
  float: left;
}
.aside-top {
  box-sizing: border-box;
  width: 210px;
  height: 60px;
  background-color: #4781c9;
  font-size: 20px;
  color: #fff;
  padding-left: 30px;
  line-height: 60px;
}
.aside-center {
  box-sizing: border-box;
  width: 210px;
  height: 60px;
  background-color: #ededed;
  font-size: 15px;
  padding-left: 30px;
  line-height: 60px;
  border: 1px solid #ededed;
}

.aside-bottom {
  box-sizing: border-box;
  width: 210px;
  height: 60px;
  padding-left: 30px;
  line-height: 60px;
  border: 1px solid #ededed;
  margin-bottom: 57px;
}
.asi {
  width: 3px;
  height: 40px;
  background-color: #4781c9;
  position: absolute;
  top: 70px;
  left: 0px;
}
.contian-main {
  float: right;
  width: 960px;
}
.main-p1 {
  margin-top: 45px;
  text-indent: 2;
}
.main-p2 {
  margin: 30px 0 90px 0;
}
.train-main {
  display: none;
  float: right;
  position: relative;
  img {
    width: 960px;
  }
  .train-txt {
    box-sizing: border-box;
    width: 960px;
    font-family: "微软雅黑";
    font-size: 14px;
    text-indent: 28px;
    position: absolute;
    top: 150px;
    color: #fff;
    padding: 0 10px 0 10px;
  }
  .train-main-box {
    position: relative;
    box-sizing: border-box;
    width: 960px;
    height: 350px;
    border: 1px solid #ededde;
    margin-top: 30px;
    .main-box-hd {
      font-family: "微软雅黑";
      font-size: 36px;
      font-weight: 700;
      position: absolute;
      top: 30px;
      left: 20px;
    }
    .main-box-hdt {
      position: absolute;
      left: 20px;
      top: 85px;
      width: 127px;
      height: 85px;
    }
    .main-box-footer {
      width: 100px;
      height: 35px;
      border: 1px solid #4781c9;
      background-color: #fff;
      font-family: "微软雅黑";
      font-size: 16px;
      border-radius: 5px;
      position: absolute;
      left: 20px;
      top: 223px;
      cursor: pointer;
      outline: none;
    }
    .main-box-right {
      width: 480px;
      height: 290px;
      position: absolute;
      top: 20px;
      left: 450px;
    }
  }
}
</style>
