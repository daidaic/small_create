<template>
  <div>
    <div class="w">
      <!--活动-->
      <div class="active">
        <div class="active_header">
          <div class="active_header_l">
            <img src="../../components/images/xq-top-hd.png" alt="" />
          </div>
          <h3>活动</h3>
          <div class="active_header_r">
            <img src="../../components/images/xq-top-hd.png" alt="" />
          </div>
        </div>
      </div>
      <div class="active_cen">
        <img src="../../components/images/xq-top-xj01.png" alt="" />
        <div class="active_p">
          <p>
            遥创科技针对孵化行业的专业人士开设了这个活动汇集页面，在这里您能看到来自世界各地举办的有关创新、创业、孵化、投融
            资等一系列与孵化相关的活动。
            这些活动的范围从大型会议到规模较小的研讨会或峰会，涵盖各种孵化相关的主题和专业领域，
            为创新创业的孵化人们讨论解决面临的最新挑战。
          </p>
        </div>
        <img src="../../components/images/xq-top-xj02.png" alt="" />
      </div>
      <div class="active_banner">
        <div class="active_ban">
          <img
            src="../../components/images/xq-picture01.png"
            alt=""
            srcset=""
          />
          <h4>2019遥创科技全球合作大会</h4>
          <p>
            由遥创科技和腾讯联合举办的互联网全球合作伙伴大会分享了关于消
            费互联网与产业互联网生态融合、社交与内容生态创新的思考
          </p>
          <div class="zhuban">
            <p>主办方：遥创科技</p>
          </div>
          <div class="active_footer">
            <div class="active_fl">
              <img src="../../components/images/xq-content-dw.png" alt="" />
              <p>南京江苏大剧院</p>
            </div>
            <div class="active_fr">
              <p>2019-8-13</p>
              <img src="../../components/images/xq-content-sj.png" alt="" />
            </div>
          </div>
        </div>
        <div class="active_ban">
          <img
            src="../../components/images/xq-picture02.png"
            alt=""
            srcset=""
          />
          <h4>京津冀高峰创业论坛</h4>
          <p>
           北师大教授张飚作了《从技术革命到空间革命》的主题分享，分析了
新旧经济的特征，新旧动能转换的机制。
          </p>
          <div class="zhuban">
            <p>主办方：河南省科学技术厅</p>
          </div>
          <div class="active_footer">
            <div class="active_fl">
              <img src="../../components/images/xq-content-dw.png" alt="" />
              <p>石家庄喜来登酒店</p>
            </div>
            <div class="active_fr">
              <p>2019-4-27</p>
              <img src="../../components/images/xq-content-sj.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="active_banner"> 
        <div class="active_ban">
          <img
            src="../../components/images/xq-picture0-3.png"
            alt=""
            srcset=""
          />
          <h4>第3届遥创创新创业论坛</h4>
          <p>
            由厦门市人民政府指导，厦门日报社联合多个相关部门主办的2017厦
门创新创业千人论坛将在厦门国际博览中心举行。
          </p>
          <div class="zhuban">
            <p>主办方：遥创科技</p>
          </div>
          <div class="active_footer">
            <div class="active_fl">
              <img src="../../components/images/xq-content-dw.png" alt="" />
              <p>厦门国际博览中心</p>
            </div>
            <div class="active_fr">
              <p>2019-8-6</p>
              <img src="../../components/images/xq-content-sj.png" alt="" />
            </div>
          </div>
        </div>
        <div class="active_ban">
          <img
            src="../../components/images/xq-picture04.png"
            alt=""
            srcset=""
          />
          <h4>第37届IASP世界科学园和创新领域会议</h4>
          <p>
            西班牙塞维利亚的cartuja科技园将于2020年10月6日至9日主板IASP
第37届世界大会，主题为：人，社区及其创新生态系统。
          </p>
          <div class="zhuban">
            <p>主办方：西班牙Carjuta科技园</p>
          </div>
          <div class="active_footer">
            <div class="active_fl">
              <img src="../../components/images/xq-content-dw.png" alt="" />
              <p>塞维利亚  西班牙 </p>
            </div>
            <div class="active_fr">
              <p>2019-7-17</p>
              <img src="../../components/images/xq-content-sj.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!--分页-->
      <div class="page">
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
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
  methods: {}
};
</script>

<style lang="less" scoped>
.active_header {
  position: relative;
  text-align: center;
}
.active_header h3 {
  font-size: 25px;
}
.active_header_l img {
  position: absolute;
  top: 6px;
  left: 540px;
}
.active_header_r img {
  position: absolute;
  top: 13px;
  left: 631px;
}
.active_cen {
  position: relative;
}
.active_cen img:nth-child(1) {
  position: absolute;
  top: 4px;
  left: 12px;
}
.active_cen img:nth-last-child(1) {
  position: absolute;
  top: 93px;
  right: 8px;
}
.active_p {
  padding: 20px 80px;
}
.active_ban {
  width: 584px;
  height: 560px;
  background-color: #f2f2f2;
}
.zhuban {
  margin-left: 10px;
}
.active_footer {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.active_fl p {
  margin-left: 25px;
}
.active_fl img {
  position: absolute;
  top: 22px;
  left: 7px;
}
.active_fr img {
  position: absolute;
  top: 22px;
  right: 94px;
}
.active_banner {
  display: flex;
  justify-content: space-around;
}
.page {
  text-align: center;
  margin:20px 0;
}
</style>
