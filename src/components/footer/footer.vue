<template>
  <footer>
    <!-- 上 -->
   <div class="s">
    <div class="w">
        <div>
            <dl>
            <dt>
                <h5>关于我们</h5>
            </dt>
              <dd>新闻动态</dd>
              <dd>入孵申请</dd>
        </dl>
        <dl>
            <dt>
                <h5>用户服务</h5>
            </dt>
              <dd>隐私条款</dd>
              <dd>意见反馈</dd>
              <dd>用户协议</dd>
        </dl>
        <dl>
            <dt>
                <h5>联系我们</h5>
            </dt>
              <dd>电话: 010-29033635</dd>
              <dd>邮件: 邮件：yaochuangkeji@yaochuang.com.cn</dd>
              <dd>邮编: 100027</dd>
              <dd>地址：北京市朝阳区安翔北路11号创业大厦</dd>
        </dl>
        </div>
        <div class="y">
            <dl>
            <dt>
                <h5>企业微博</h5>
            </dt>
              <dd>
                  <img src="./wx.png" alt="">
              </dd>
        </dl>
        <dl>
            <dt>
                <h5>企业公众号</h5>
            </dt>
              <dd>
                  <img src="./wx2.png" alt="">
              </dd>
        </dl>
        </div>
    </div>
   </div>
   <!-- 下 -->
   <div class="x">
       <h4>法律声明 韵网（北京）科技有限公司 版权所有   京ICP备18001894号</h4>
   </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created(){

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
    footer {
        height: 380px;
        background-color: #1b1b1b;
        .s {
            height: 283px;
            border-bottom:2px solid #333;
        }
        .y {
            float: right;
            img {
                width: 80px;
            }
        }
        dl {
            color: #fff;
            margin-left: 25px;
            margin-right: 35px;
            float: left;
            dd {
                margin-left: 0;
                margin: 30px 0;
                font-size: 12px;
            }
        }
        .x {
            h4 {
                text-align: center;
                color: #fff;
                font-size: 12px;
            }
        }
    }
</style>
