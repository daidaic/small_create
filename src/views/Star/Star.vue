<template>
  <div class="star">
    <!-- 找项目选资金首选瑶创科技 -->
    <div>
      <img src="./images/top.png" />
    </div>
    <!-- 明星企业最新动态 -->
    <div class="one title">
      <h3>明星企业最新动态</h3>
      <ul>
        <li>
          <a href="#"><img src="./images/mx1.png" alt=""/></a>
          <div>明月集团吉建10万平方米产业园</div>
          <p>
            由青岛明月海藻有限公司（简称明月集团）下属子公司青岛明月科技创业服务有限公司组织申报的海藻生物产业孵化器
          </p>
          <button>
            <a href="#">查看更多 ></a>
          </button>
        </li>
        <li>
          <a href="#"><img src="./images/mx2.png" alt=""/></a>
          <div>MIX PACE创始人荣获中国青年创业奖</div>
          <p>
            第十届“中国青年创业奖”颁奖仪式在浙江举行，创业青年MIXPACE创始人李欣昱、冷晓琨获奖，未来将继续致力创新创业创造
          </p>
          <button>
            <a href="#">查看更多 ></a>
          </button>
        </li>
        <li>
          <a href="#"><img src="./images/mx3.png" alt=""/></a>
          <div>2019年中国产业创新孵化器行业研究报告</div>
          <p>
            中国孵化器行业发展历经4个阶段，作为创业服务的重要载体，与众创空间、加速器等形式在软硬件条件、服务对象及服务门槛方面具有显著区别
          </p>
          <button>
            <a href="#">查看更多 ></a>
          </button>
        </li>
      </ul>
    </div>
    <!-- 遥创助力 -->
    <div class="two title">
      <h3>遥创助力</h3>
      <!-- 8个li -->
      <ul class="two-1">
        <li v-for="item in this.list1" :key="item.index">
          <b>{{ item.b }}</b>
          <p>{{ item.p }}</p>
        </li>
      </ul>
      <ul class="two-2">
        <li v-for="item in this.list2" :key="item.index">
          <div></div>
          <b>{{ item.b }}</b>
          <p>{{ item.p }}</p>
        </li>
      </ul>
      <!-- 3个li -->
    </div>
    <!-- 选择搜索 -->
    <div class="tree title">
      <h3>选择搜索</h3>
      <!-- 搜索框 -->
      <div class="search">
        <el-cascader placeholder="地区搜索" class="aa"></el-cascader>
        <el-cascader placeholder="行业搜索" class="bb"></el-cascader>
        <el-col :span="6" class="cc">
          <el-input placeholder="搜索关键词">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </div>
      <!-- 表格 -->
      <div class="table">
        <!-- heard -->
        <ul class="subtitle">
          <li><div>公司名称</div></li>
          <li><div>所属行业</div></li>
          <li><div>所在地</div></li>
        </ul>
        <ul class="StarEnterprise">
          <li>
            <div class="dA">
              <img src="./images/123.png" alt="" />
              <p class="a"><a href="#">南京乐吧娱乐科技有限公司</a></p>
              <p class="b"><span class="ba">所属孵化器：</span><span class="bb">无</span></p>
            </div>
            <div class="dB">
              <p class="a">其他行业</p>
              <p><span class="b">所属协会：</span><span class="c">无</span></p>
            </div>
            <div class="dC"><span>江苏省</span> <span>南京市</span> <span>江宁区</span></div>
          </li>
        </ul>
      </div>
      <!-- 分页功能 -->
      <div class="separate"></div>
      <div class="paging">
        <div>
          <el-pagination background layout="prev, pager, next" :total="50"></el-pagination>
        </div>
      </div>
    </div>
    <!-- 友情链接 -->
    <friend></friend>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          src: './images/mx1.png',
          div: '明月集团吉建10万平方米产业园',
          p: '由青岛明月海藻有限公司（简称明月集团）下属子公司青岛明月科技创业服务有限公司组织申报的海藻生物产业孵化器',
          a: '查看更多 >'
        },
        {
          src: './images/mx2.png',
          div: 'MIX PACE创始人荣获中国青年创业奖',
          p: '第十届“中国青年创业奖”颁奖仪式在浙江举行，创业青年MIXPACE创始人李欣昱、冷晓琨获奖，未来将继续致力创新创业创造',
          a: '查看更多 >'
        },
        {
          src: './images/mx3.png',
          div: '2019年中国产业创新孵化器行业研究报告',
          p: '中国孵化器行业发展历经4个阶段，作为创业服务的重要载体，与众创空间、加速器等形式在软硬件条件、服务对象及服务门槛方面具有显著区别',
          a: '查看更多 >'
        }
      ],
      list1: [
        { b: '50000+', p: '累计孵化创业企业' },
        { b: '10亿+', p: '累计人民币融资额' },
        { b: '1亿+', p: '累计提供免费云资源' },
        { b: '25万+', p: '累计培养科技人才' },
        { b: '80万+', p: '初创企业线下见面会' },
        { b: '3000+', p: '企业对接产业资源' },
        { b: '200+', p: '项目对接投资众筹' },
        { b: '20+', p: '各大行业标杆企业' }
      ],
      list2: [
        { b: '金融信用加速器', p: '品牌升级，敬请期待' },
        { b: '智能硬件加速器', p: '一站式赋能智能硬件初创者' },
        { b: '新零售加速器', p: '品牌升级，敬请期待' }
      ]
    }
  },
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.star {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  .one {
    ul {
      overflow: hidden;
      li {
        float: left;
        width: 390px;
        height: 280px;
        div {
          margin: 17px 0 12px;
          font-size: 17px;
          font-weight: 400px;
          color: #333333;
        }
        p {
          height: 50px;
          width: 340px;
          font-size: 12px;
          color: #8c8c8c;
          word-wrap: break-word;
          overflow: hidden;
        }
        button {
          background-color: #4f93db;
          width: 95px;
          height: 25px;
          border: 0;
          a {
            text-decoration: none;
            font-size: 14px;
            color: #fff;
          }
        }
      }
    }
  }
  .two {
    .two-1 {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        width: 300px;
        height: 90px;
        margin-bottom: 20px;
        position: relative;
        top: 20px;
        b {
          font-size: 24px;
          color: #24a4ff;
          position: absolute;
          left: 50%;
          top: -20px;
          transform: translateX(-50%);
        }
        p {
          font-size: 18px;
          color: #666666;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    .two-2 {
      display: flex;
      justify-content: space-around;
      li {
        height: 90px;
        width: 400px;
        margin: 100px 0;
        position: relative;
        div {
          width: 22px;
          height: 3px;
          background-color: #399dfd;
          margin: auto;
          margin-bottom: 40px;
        }
        b {
          position: absolute;
          left: 50%;
          top: 45px;
          transform: translateX(-50%);
        }
        p {
          font-size: 14px;
          position: absolute;
          left: 50%;
          bottom: -14px;
          transform: translateX(-50%);
        }
      }
    }
  }
  .tree {
    .search {
      width: 100%;
      height: 100px;
      background-color: #4f93db;
      position: relative;
      .aa {
        position: absolute;
        left: 138px;
        top: 30px;
      }
      .bb {
        position: absolute;
        left: 325px;
        top: 30px;
      }
      .cc {
        display: block;
        position: absolute;
        right: 130px;
        top: 30px;
        width: 260px;
        .el-button {
          height: 34px;
          background-color: #fff;
        }
      }
    }
    .table {
      .subtitle {
        display: flex;
        justify-content: space-around;
        li {
          width: 135px;
          height: 45px;
          flex: 33.33%;
          margin: 30px 0 0 0;
          position: relative;
          div {
            width: 135px;
            height: 45px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            background-color: #4f93db;
            color: #fff;
            text-align: center;
            line-height: 45px;
            font-size: 18px;
            font-weight: 700;
          }
        }
      }
      .StarEnterprise {
        li {
          display: flex;
          justify-content: space-around;
          margin: 30px 0;
          .dA {
            width: 260px;
            height: 70px;
            position: relative;
            img {
              display: block;
              position: absolute;
              top: 16px;
              left: -30px;
            }
            .a {
              color: #245497;
              font-size: 18px;
              font-weight: 700;
            }
            .b {
              font-size: 17px;
              color: #7e7e7e;
              font-weight: 600;
              .ba {
                color: #ffbc58;
              }
              .bb {
                font-weight: 500;
              }
            }
          }
          .dB {
            font-size: 17px;
            color: #7e7e7e;
            font-weight: 600;
            .a {
              color: #696969;
              font-weight: 500px;
            }
            .b {
              color: #ffbc58;
            }
            .c {
              font-weight: 500;
            }
          }
          .dC {
            color: #696969;
            font-size: 17px;
            font-weight: 600;
            transform: translateY(15px);
          }
        }
      }
    }
    .separate {
      width: 100%;
      height: 3px;
      background-color: #e1e1e1;
    }
    .paging {
      display: flex;
      flex-direction: row-reverse;
      margin: 30px 30px 50px 0;
    }
  }
}
.one ul li:nth-child(2) {
  margin: 0 15px;
}
a {
  text-decoration: none;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  margin: 0;
  padding: 0;
}
title {
  margin-top: 60px;
}
h3 {
  padding-bottom: 30px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 30px;
}
.el-cascader {
  width: 150px;
  height: 35px;
  border-radius: 18px !important;
}
</style>
