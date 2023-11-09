<template>
  <div class="main-container">
    <span class="left-menu">
      <div class="left-menu-search">
        <el-input v-model="input3" class="input-with-select">
          <template #prepend>
            <el-button icon="Search" />
          </template>
        </el-input>
        <el-icon>
          <component is="CirclePlus" />
        </el-icon>
      </div>
      <div class="middle-Folder">
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
    </span>
    <span class=" right-container">
      <div class="container-header">

      </div>
      <div class="container-body">
        <el-tabs type="container-body-card">
          <el-tab-pane label="编辑">
            <div class="edit-api-header">
              <el-input v-model="input3" placeholder="请输入接口地址" class="api-input-with-select">
                <template #prepend>
                  <el-select v-model="select" placeholder="Select" style="width: 115px">
                    <el-option label="GET" value="1" />
                    <el-option label="POST" value="2" />
                    <el-option label="PUT" value="3" />
                    <el-option label="DELETE" value="4" />
                  </el-select>
                </template>
              </el-input>
              <el-button>运行</el-button>
              <el-button>保存</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="高级mock">Config</el-tab-pane>
        </el-tabs>
      </div>

    </span>
  </div>
</template>
<style scoped>
.main-container {
  display: flex;
  align-items: flex-start;
}

.main-container,
.left-menu,
.middle-Folder {
  height: 100%;
}

.left-menu-search {
  /* width: 100%; */
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-menu,
.right-container {
  display: inline-block;
}

.right-container {
  width: 100%;
  margin-left: 20px;
  flex: 1;
}

.api-input-with-select {
  margin-right: 20px;
}

.edit-api-header {
  display: flex;
  justify-content: space-between;
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