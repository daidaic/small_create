<template>
  <div>
    <tou></tou>
    <div class="header">
      <img src="./images/first.png" alt="" />
      <el-button type="danger">申请入驻 >></el-button>
    </div>
    <div class="w">
      <!-- 上 -->
      <div class="top">
        <h2>全球创孵汇介绍</h2>
        <h4>Introduction</h4>
        <p>
          全球创孵汇是基于全球智能孵化网络的线上线下资源整合平台，由遥创和北京高技术创业服务中心合作建设的创业孵化机构线下集聚区。
        </p>
        <p>
          全球创孵汇设立于中关村健翔园的北京创业大厦，将汇聚一批国内外优秀创业孵化机构，成为北京与中国链接世界创新创业生态的一个枢纽
          为入驻孵化机构提供更开放的行业社交网络，加深行业的交流，促进行业资源的横纵向协同，共同致力打造多元化的行业共同体及强纽带关
          联的生态链
        </p>
        <p>
          全球创孵汇现面向国际与国内的创业孵化相关机构发出邀请，欢迎孵化器、众创空间、园区、大企业、投资机构、专业服务机构、中介等相
          关机构预约入驻。
        </p>
        <div class="z" @click="tiaozhuan">
          遥创简介
        </div>
        <div class="y">
          北京高技术创业服务中心简介
        </div>
      </div>
      <!-- 中间 -->
      <div class="zj">
        <h2>服务内容</h2>
        <h4>SERVICES</h4>
        <ul>
          <li v-for="(item, index) in Img" :key="index">
            <img :src="item.url" alt="" />
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
     
    </div>
     <div class="zjz">
         <h2>地理位置</h2>
        <h4>LOCATION</h4>
       <div class="w">
          <ul >
          <li>
            <img src="./images/xqy_nave_tp01.png" alt="">
          </li>
          <li>
            <div>
              全球创孵汇位于北京北四环商业核心地带（鸟巢/盘古大观/国家会议中心
附近），具有良好的地理优势：紧邻京藏高速，距离首都机场３０公里；
附近有16所高校、25家中科院所属研究所、15家大中型国际会议会展中
心。
            </div>
          </li>
        </ul>
       </div>
      </div>
      <div class="xm">
        <div class="w">
           <h2>指导机构与合作伙伴</h2>
        <h4>GUIDING ORGANIZATIONS AND PARTNER</h4>
        <ul>
          <li v-for="(item,idx) in Img2" :key="idx">
            <img :src="item.url" alt="">
          </li>
        </ul>
        </div>
        
      </div>
    <jio></jio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Img: [
        { url: require("./images/first01.png"), name: "机构展示" },
        { url: require("./images/first02.png"), name: "办公场地" },
        { url:require('./images/xqy_nave_icon03.png'),  name:'商业服务'},
        { url:require('./images/xqy_nave_icon04.png'),  name:'创业服务'},
        { url:require('./images/xqy_nave_icon05.png'),  name:'业务对接'},
        { url:require('./images/xqy_nave_icon06.png'),  name:'需求发布'},
        { url:require('./images/xqy_nave_icon07.png'),  name:'品牌宣传'},
        { url:require('./images/xqy_nave_icon08.png'),  name:'微资讯'}
      ],
      Img2: [
        { url: require("./images/xqy_nave_logo01.png"), name: "机构展示" },
        { url: require("./images/xqy_nave_logo02.png"), name: "办公场地" },
        { url:require('./images/xqy_nave_logo03.png'),  name:'商业服务'},
        { url:require('./images/xqy_nave_logo04.png'),  name:'创业服务'},
        { url:require('./images/xqy_nave_logo05.png'),  name:'业务对接'},
        { url:require('./images/xqy_nave_logo06.png'),  name:'需求发布'},
        { url:require('./images/xqy_nave_logo07.png'),  name:'品牌宣传'},
        { url:require('./images/xqy_nave_logo08.png'),  name:'微资讯'}
      ],
    };
  },
  created() {},
  methods: {
    tiaozhuan() {
      this.$router.push('/About')
    },
  }
};
</script>

<style lang="less" scoped>
.header {
  position: relative;
  img {
    width: 100%;
  }
  .el-button {
    position: absolute;
    flex: 1;
    left: 365px;
    top: 435px;
    background-color: #e30080;
  }
}
h2 {
  text-align: center;
  color: #333;
  margin-top: 8px;
  padding: 8px;
  margin: 0;
}
h4 {
  text-align: center;
  color: #999999;
  margin: 0;
}
p {
  font-size: 18px;
  margin: 0;
  margin-bottom: 15px;
  color: #666;
}
.top {
  margin-bottom: 75px;
  margin-top: 25px;
}
.z,
.y {
  width: 250px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  float: left;
}
.z {
  height: 38px;
  border: 1px solid #e30080;
  color: #e30080;
  transform: translateX(310px);
}
.y {
  background-color: #e30080;
  color: #fff;
  transform: translateX(350px);
}
.zj {
  overflow: hidden;
  margin-bottom: 15px;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      float: left;
      width: 133px;
      height: 248px;
      border: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 5px;
      img {
        width: 75px;
      }
      span {
        margin: 15px;
      }
    }
  }
  
}
.zjz {
  background-color: #f5f5f5;
    ul {
      display: flex;
      
      overflow: hidden;
      li {
        padding: 20px;
        flex:50%;
        font-size: 14px;
        color: #333333;
        div {
          margin: 115px 60px 0;
        }
      }
    }
    margin-bottom: 25px;
  }
  .xm {
    overflow: hidden;
    margin-bottom: 100px;
    ul {
      display: flex;
      flex-wrap: wrap;
       justify-content: space-between;
       padding: 0;
       margin: 0;
      li {
        padding: 0;
        margin: 0;
        flex:25%;
        display: flex;
         justify-content: center; /* 水平居中 */
            align-items: center;
        img {
          width: 225px;
        }
        
      }
    }
  }
</style>
