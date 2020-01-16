<template>
  <div>
    <header class="w">
      <div class="top">
        <div class="logo">
          <img src="./images/logo.png" alt="" />
          <h1>遥创科技</h1>
        </div>
        <div class="you">
          <span @click='tiaozhuan'>
            <i class="iconfont icon-zhuce"></i>
            <span>
              注册
            </span>
          </span>
          <span>
            <i class="iconfont icon-zhucedengluyonghuming"></i>
            <span>
              登录
            </span>
          </span>
        </div>
      </div>
      <!-- //底部 -->
      <div class="bottom">
        <ul>
          <li @click="addClass(1)" :class="{ msg: idx == 1 }">
            <router-link to="/Home">首页</router-link>
          </li>
          <li @click="addClass(2)" :class="{ msg: idx == 2 }">
            <router-link to="/recommend">热点推荐</router-link>
          </li>
          <li @click="addClass(3)" :class="{ msg: idx == 3 }">
            <router-link to="/Star">明星企业</router-link>
          </li>
          <li @click="addClass(4)" :class="{ msg: idx == 4 }">
            <router-link to="/research">行业研究</router-link>
          </li>
          <li @click="addClass(5)" :class="{ msg: idx == 5 }">
            <router-link to="/training">咨询培训</router-link>
          </li>
          <li @click="addClass(6)" :class="{ msg: idx == 6 }">
            <router-link to="/List">活动列表</router-link>
          </li>
          <li @click="addClass(7)" :class="{ msg: idx == 7 }">
            <router-link to="/Forum">论坛</router-link>
          </li>
          <li @click="addClass(8)" :class="{ msg: idx == 8 }">
            <router-link to="/About">关于我们</router-link>
          </li>
        </ul>
        <div class="rr">
          <input type="text" placeholder="请输入内容" id="ipt" />
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bianhua: false,
      idx: 1
    };
  },
  created() {},
  computed: {
     affClass() {
      return idx
    },
  },
  methods: {
     addClass(idx) {
      this.idx = idx
    },
    tiaozhuan() {
      this.$router.push('/login')
    },
    gaibian() {
      this.bianhua = !this.bianhua;
    }
  }
};
</script>

<style lang="less" scoped>
header {
  height: 160px;
}
.top {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 230px;
  height: 100%;
  display: flex;
  img {
    height: 60px;
    width: 60px;
    margin-top: 15px;
    margin-right: 12px;
  }
  h3 {
    line-height: 100px;
  }
}
.you {
  float: right;
  width: 115px;
  span {
    cursor: pointer;
  }
}

ul {
  padding: 0;
  margin: 0;
}
li {
  float: left;
  padding: 12px;
}
.msg {
  background-color: #2668c3;
}
li a {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.rr {
  float: right;
  display: flex;
  align-items: center;
  #ipt {
    border: 2px solid #409eff;
    padding-left: 5px;
    height: 35px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #666;
  }
  .el-button {
    border-radius: 0 5px 5px 0px;
  }
}
</style>
