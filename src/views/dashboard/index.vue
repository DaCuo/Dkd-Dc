<template>
  <div class="dashboard">
    <!--top -->
    <div class="top">
      <div class="data_area">
        <el-row :gutter="20">
          <el-col :span="14"><div class="Workorder  grid-content padding">工单统计 </div></el-col>
          <el-col :span="10"><div class="saleStt  grid-content padding"> 销售统计</div></el-col>
        </el-row>

        <el-row>
          <el-col :span="24"><div class="saleDate grid-content padding ">销售数据</div>   </el-col>
        </el-row>
      </div>
      <div
        class="grid-content  goods  padding"
      >商品热榜</div>
    </div>
    <!-- bottom -->
    <div class="bottom">
      <el-row :gutter="20">
        <el-col :span="12"><div class="grid-content btmleft padding">合作商点位图</div>
        </el-col>
        <el-col :span="12"><div class="grid-content btmleft padding ">异常设备监控
          <el-empty description="描述文字" />
        </div></el-col>
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
  .padding{
    padding: 20px;
  }
  .top{
     min-height: 540px;
     width: 100%;
     display: flex;
     justify-content: space-between;    //  左边
  .data_area{
  width: 75%;
   height: 100%;
  // background-color: pink;
  .Workorder{
    min-height: 166px;
    background-color: #E9F3FF  ;
    background:
    url('../../assets/common/task.png') no-repeat 95% 95%,
    url('../../assets/common/circle.png')  no-repeat;
  }
  .saleStt{
    min-height: 166px;
    background: #FBEFE8 url('../../assets/common/pinkpig.png') no-repeat 95%  95%;

  }
  .saleDate{
    background-color: #ffffff;
    height: 380px;
  }
  }
  // 右边
  .goods{
  width: 24%;
  height: inherit;
  background-color: #fff;
  }
  }

.bottom{
  width: 100%;
  min-height: 350px;
  margin-top: 20px;
  // background-color: skyblue;
  .btmleft{
    height: 350px;
    background-color:#ffffff ;
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
    border-radius: 20px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
