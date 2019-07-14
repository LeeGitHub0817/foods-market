<template>
  <div class="all-wrap">
    <div class="common-bac"></div>
    <div class="head-wrap">
      <head-com :titleHead="'管理地址'"></head-com>
    </div>
    <div class="manage-warp">
      <van-address-list
        v-model="chosenAddressId"
        :list="AddressList"
        @edit="handleEdit"
        @add="handleAdd"
        @select="handleSelect"
      />
    </div>
    
  </div>

</template>

<script>
export default {
  data: function(){
    return {
      chosenAddressId: '1',
      AddressList: [
        {
          id: '1',
          name: '张三',
          tel: '1838152456',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '18381317534',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ]
    }
  },
  methods: {
    handleEdit(item, index){
      alert(index);
    },
    handleAdd(){
      alert('new');
    },
    handleSelect(item, index){
      alert(index)
    }
  },
}
</script>


<style lang="scss">
  .all-wrap{
    background-color: #F1F4F7;
  }
  .head-wrap{
    height: 100px;
  }
  .manage-warp{
    margin-top: 24px;
  }

  /*覆盖vant的样式*/
  .van-button--danger{
    background-color: #1DCE7E;
    border: 1px solid #1DCE7E;
  }
</style>