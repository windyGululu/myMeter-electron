<template>
  <div>
    <div class="header">
      <el-input v-model="input3" class="input-with-select">
        <template #prepend>
          <el-button icon="Search" />
        </template>
      </el-input>
      <el-icon>
        <component is="CirclePlus" />
      </el-icon>
    </div>

    <div class="container">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-sub-menu v-for="(item, index) in menu_items " :index="index">
          <template #title>
            <el-icon>
              <component is="Folder" />
            </el-icon>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item v-for="(api, api_index) in item.content" :index="api_index">{{ api.API_name }}</el-menu-item>

        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>
<style scoped>
.header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

<script>
export default {
  data() {
    return {
      menu_items: [{
        title: '测试分类',
        content: [
          {
            API_name: '测试接口1',
            API_DESC: '测试接口1描述',
          },
          {
            API_name: '测试接口2',
            API_DESC: '测试接口1描述',
          },
        ],
      },
      {
        icon: 'Connection',
        title: '接口管理',
        path: '/ApiManager',
      },
      ],
    };
  },
}
</script>