<template>
  <div class="main">
    <nav>
      <el-menu default-active="1" class="index-el-menu" @open="handleOpen" @close="handleClose">
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
.main {
  display: flex;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding: 20px;
}

nav {
  height: 100%;
}

.container {
  flex: 1;
}

.index-el-menu {
  height: 100%;
}
</style>