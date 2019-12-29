<template>
  <div class="w">
    <el-card :body-style="{ padding: '0px' }">
      <div class="zuo">
          友情链接
      </div>
      <ul>
            <li v-for="(item, index) in List" :key="index">
              <a href="#">{{ item }}</a>
            </li>
          </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: [
        "武汉市科技局",
        "中华孵化器网",
        "科技部",
        "知识创新网",
        "科思网",
        "创业投资网",
        "技术创新网",
        "国科网",
        "中华应用技术网",
        "线查科技",
        "中华技术交易所",
        "孵化器网",
        "点线科技",
        '青年创业网'
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.el-card {
  box-sizing: border-box;
  height: 90px;
  .zuo {
    text-align: center;
    line-height: 90px;
    background-color: #4f94db;
    color: #fff;
    font-size: 18px;
    height: 100%;
   float: left;
   width: 140px;
  }
  ul {
      display: flex;
      flex-wrap: wrap;
      padding:24px  0 0 0;
      margin: 0;
  }
  ul li {
      float: left;
      flex: 14%;
      font-size: 14px;
      text-align: center;
      height: 18px;
      border-right: 1px solid #666;
      overflow: hidden;
      padding: 0;
      margin: 0 ;
      a {
          line-height: 18px;
          color: #666;
          text-decoration: none;
      }
  }
  ul li:nth-child(n+8) {
          margin: 10px 0 0 0;
      }
      ul li:nth-child(7n) {
          border-right: none;
      }
}
</style>
