<template>
  <div id="www">
    <!-- <tou></tou> -->
    <!-- 注册页面 -->
    <div class="login">
      <!-- 已有账号？请登录 -->
      <div class="content">
        <div class="pleaseLogin">已有账号？ <a href="#">请登录></a></div>
        <!-- 标题 -->
        <h2>申请入驻全球创孵汇</h2>
        <!-- 表单 -->
        <div class="forms">
          <el-form label-width="150px">
            <el-form-item label="用户名" class="shrink">
              <el-input placeholder="请输入用户名"></el-input>
              <span class="el-icon-warning-outline"> 用户名格式支持中文、英文、数字、"-"的组合，4-20个字符</span>
            </el-form-item>
            <el-form-item label="机构/公司名称" class="normal">
              <el-input placeholder="请输入机构/公司名称"></el-input>
            </el-form-item>
            <el-form-item label="手机号" class="normal">
              <el-input placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="设置密码" class="shrink">
              <el-input placeholder="请输入密码"></el-input>
              <span class="el-icon-warning-outline"> 建议使用字母和数字组合</span>
            </el-form-item>
            <el-form-item label="确认密码" class="normal">
              <el-input placeholder="请确认密码"></el-input>
            </el-form-item>
            <el-form-item label="选择用户类型" class="button">
              <li>
                <el-button>孵化机构</el-button>
                <el-button>大公司</el-button>
              </li>
              <li>
                <el-button>创业公司</el-button>
                <el-button>投资机构</el-button>
              </li>
              <li>
                <el-button>服务机构</el-button>
                <el-button>行业组织</el-button>
              </li>
            </el-form-item>
            <el-form-item>
              <el-checkbox>同意<a href="#">《用户协议》</a></el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="signIn">注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <jio></jio>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped>
#www{
  background-color: #e1e1e1;
}
.login {
  width: 1200px;
  margin: 60px auto 80px;
  background-color: #fff;
  padding: 30px 0;
  .content {
    margin: 30px 400px 30px 250px;
    .pleaseLogin {
      a {
        color: #3588f7;
      }
    }
    h2 {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    .forms {
      margin-top: 100px;
      width: 100%;
      .shrink {
        margin-bottom: 20px !important;
        span {
          color: #a9a9a9;
          font-size: 12px;
        }
      }
      .normal {
        margin-bottom: 30px;
      }
      .button {
        margin-bottom: 10px;
        li {
          display: flex;
          .el-button {
            width: 190px;
            height: 40px;
            font-size: 16px;
            color: #333333;
          }
        }
      }
      .signIn {
        width: 400px;
        height: 42px;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
}
.el-form-item {
  color: #333333;
  font-weight: 600;
  font-size: 16px;
  .el-input {
    height: 40px;
    font-size: 16px;
  }
}
a {
  color: #3588f7;
}
</style>
