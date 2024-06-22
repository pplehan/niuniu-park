
<template>
<niu-layout>
<div class="container mx-auto pt-10">
  <h1 class="mb-2 text-lg font-bold">購物車內容</h1>
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
          {{ record.amount}}
      </template>
      <template v-if="column.key === 'price'">
          {{ record.price }}
      </template>
      <template v-if="column.key === 'total'">
          {{ record.price * record.amount}}
      </template>
      <template v-if="column.key === 'action'">
    <a-button @click="removeFromCart(record.id)" type="primary" danger ghost>移除</a-button>
      </template>
    </template>
  </a-table>
    <h1 class="text-lg font-bold">填寫訂購資料</h1>
    <a-form :rules="rules" class="w-3/5"  size="large" :model="formState"  @finish="checkout">
     <a-form-item name="pay" label="付款與取貨方式">
      <a-radio-group v-model:value="formState.pay">
        <a-radio :value="1">線上刷卡【 宅配到府 】</a-radio>
        <a-radio :value="2">全家【 取貨付款 】</a-radio>
        <a-radio :value="3">7-11【 取貨付款 】</a-radio>
  </a-radio-group>
    </a-form-item>
    <a-form-item name="name" label="取貨人姓名">
      <a-input v-model:value="formState.name" placeholder="請輸入取貨人姓名" />
    </a-form-item>
    <a-form-item name="email" label="電子郵件">
      <a-input v-model:value="formState.email" placeholder="請輸入電子郵件" />
    </a-form-item>
    <a-form-item name="address" label="地址">
      <a-input v-model:value="formState.address" placeholder="請輸入地址" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit">送出</a-button>
    </a-form-item>
  </a-form>
  </div>
</niu-layout>
</template>
<script setup>
import NiuLayout from '@/components/NiuLayout.vue'
import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router'
import { getCart, setToCart } from '@/utils/localStorage';
import { message } from 'ant-design-vue'
const cart = ref (getCart())
const router = useRouter()
const checkout = () =>{
  setToCart([])
  cart.value = []
  const orderId = Math.floor(1000000000 * (Math.random()))
  router.push(`/checkout?orderId=${orderId}`)
  message.success('訂購完成')
}
const formState = reactive({
  name:'',
  email:'',
  address:'',
  pay: 1
})

const rules = {
  name: [{ required: true,  message: '請輸入取貨人姓名'}],
  email: [{ required: true,  message: '請輸入電子郵件'}],
  address: [{ required: true,  message:  '請輸入地址'}],
  pay: [{ required: true }],
};
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
const tableData = computed(() => {
 return cart.value.map(product => ({
    id: product.id,
    product: product.title,
    price: product.price,
    amount: product.amount
  }))
})



const removeFromCart = (id) => {
  const newCart = cart.value.filter(product => product.id !== id)
  setToCart(newCart)
  cart.value = newCart
}

</script>
<style scoped></style>