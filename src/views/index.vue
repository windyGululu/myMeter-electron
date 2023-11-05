<template>
  <div>
    <!-- <nav>
      <RouterLink to="home">首页</RouterLink>
      <RouterLink to="interface-test">接口测试</RouterLink>
    </nav> -->
    <!-- <a-menu :items="items" /> -->
    <nav>
      <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <RouterLink v-for="(item, index) in menu_items" :to="item.path" :key="index">
          <el-menu-item :index=index>
            <el-icon>
              <component :is="item.icon" />
            </el-icon>
            <span>{{ item.title }}</span>
          </el-menu-item>
        </RouterLink>
      </el-menu>
    </nav>
    <div class="container">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      menu_items: [{
        icon: 'HomeFilled',
        title: '首页',
        path: '/home',
      },
      {
        icon: 'Connection',
        title: '接口管理',
        path: '/ApiManager',
      },
      ],
    };
  },

  mounted() {
    // this.$router.push({ path: '/home' });
  },
};

</script>
<style scoped>
nav {
  position: fixed;
  left: 10px;
  top: 10px;

}

/* 设置路由链接的样式 */
a {
  color: #fff;
}

/* 设置路由链接的选中样式 */
a.router-link-active {
  color: #409eff;
}

.container {
  position: fixed;
  top: 10px;
  left: 150px;

}
</style>