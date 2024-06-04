
<template>
<niu-layout>
<div class="container mx-auto pt-10">
  <h1>購物車內容</h1>
   <a-table :columns="tableColumns" :data-source="tableData">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'product'">{{ column.name }}
      </template>
       <template v-if="column.key === 'price'">{{ column.name }}
      </template>
       <template v-if="column.key === 'amount'">{{ column.name }}
      </template>
       <template v-if="column.key === 'total'">{{ column.name }}
      </template>
       <template v-if="column.key === 'action'">{{ column.name }}
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'product'">
          {{ record.product }}
      </template>
      <template v-if="column.key === 'amount'">
          {{ record.price }}
      </template>
      <template v-if="column.key === 'name'">
          {{ record.amount}}
      </template>
      <template v-if="column.key === 'total'">
          {{ record.price*record.amount}}
      </template>
      <template v-if="column.key === 'action'">
    <a-button type="primary" danger ghost>移除</a-button>
      </template>
      <template v-if="column.key === 'action'">
        <span>
          <a>Invite 一 {{ record.name }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
          <a-divider type="vertical" />
          <a class="ant-dropdown-link">
            More actions
            <down-outlined />
          </a>
        </span>
      </template>
    </template>
  </a-table>
<h1>付款與取貨方式</h1>
       <a-radio-group v-model:value="value">
    <a-radio :value="1">線上刷卡【 宅配到府 】</a-radio>
    <a-radio :value="2">全家【 取貨付款 】</a-radio>
    <a-radio :value="3">7-11【 取貨付款 】</a-radio>
  </a-radio-group>
    <h1>填寫訂購資料</h1>
    <a-form class="w-2/5"  size="large" :model="formState"  v-bind="formItemLayout">
    <a-form-item  label="取貨人姓名">
      <a-input v-model:value="formState.email" placeholder="input placeholder" />
    </a-form-item>
    <a-form-item  label="電子郵件">
      <a-input v-model:value="formState.fieldB" placeholder="input placeholder" />
    </a-form-item>
    <a-form-item label="電子郵件">
      <a-input v-model:value="formState.address" placeholder="input placeholder" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary">送出</a-button>
    </a-form-item>
  </a-form>
  </div>
</niu-layout>
</template>
<script setup>
import NiuLayout from '@/components/NiuLayout.vue'
import { ref, reactive } from 'vue';
const formState = reactive({
  name:'',
  email:'',
  address:''
})
const tableColumns = ref([
  {
    name:'商品資料',
    key: 'product'
  },
  {
    name:'單件價格',
    key: 'price'
  },
  {
    name:'數量',
    key: 'amount'
  },
  {
    name:'小計',
    key: 'total'
  },
  {
    name:'操作',
    key: 'action'
  }
])
const tableData = ref([
  {
    product: '牛奶',
    price: 100,
    amount: 1,
  },
  {
    product: '優酪乳',
    price: 100,
    amount: 1,
  },
])
</script>
<style scoped>

h1 {
  padding: 20px 20px;
}


.pay  {
  font-size: 24px;
  border: solid 1px black;
  width: 80%;
  height: 160px;
  padding: 20px;
}

.content-detail {
  border: solid 1px black;
  height: 200px;
  width: 80%;
  display: flex;
  justify-content: space-around;
}

.order {
  font-size: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}



</style>