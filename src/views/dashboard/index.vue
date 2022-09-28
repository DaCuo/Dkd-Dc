<template>
  <div class="dashboard">
    <div class="data_area">
      <el-row :gutter="20">
        <el-col :span="14"><div class="Workorder  grid-content" /></el-col>
        <el-col :span="10"><div class="sale  grid-content" /></el-col>
      </el-row>

      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark" /></el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
.data_area{
  width: 75%;;
  min-height: 600px;
  background-color: pink;
  .Workorder{
    min-height: 166px;
    background-color: #E9F3FF;
  }
  .sale{
    min-height: 166px;
    background-color: #FBEFE8;

  }
}
}

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 25px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
