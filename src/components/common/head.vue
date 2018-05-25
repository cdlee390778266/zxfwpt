<template>
  <div class="header">
      <div class="wrapper">
          <div class="header-left">
              <img src="../../assets/images/login_title.png"  alt="" />
          </div>
          <div class="header-right">
              <div class="header-right-l">
                  <ul id="top-menu">
                      <li class="active"><router-link to="/home">首页</router-link></li>
                      <li class="disabled"><router-link to="/data">数据中心</router-link></li>
                      <li class="disabled"><router-link to="/notices">公告资讯</router-link></li>
                      <li class="disabled"><router-link to="/news">新闻中心</router-link></li>
                      <li class="disabled"><router-link to="/export">行情导出</router-link></li>
                  </ul>
              </div>
              <div class="header-right-r">
                  <span>欢迎你！ 游客</span>
                  <i class="fa fa-angle-down"></i>
                  <ul>
                      <li class="line"><router-link to="/loginOut">退出</router-link>
                      </li>
                      <li><a href="javascript:void(0);" class="blueBg" id="login">登录</a></li>
                      <li><router-link to="/register" class="warningBg">注册</router-link></li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
