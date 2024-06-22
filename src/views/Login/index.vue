<script setup>
import NiuLayout from '@/components/NiuLayout.vue'
import { reactive, ref, onMounted } from 'vue';
import { useRouter} from 'vue-router';
import { useI18n } from 'vue-i18n';
import { userApi } from '@/api/module/user';
import { setToken, getToken } from '@/utils/localStorage'
import { message } from 'ant-design-vue';

let timer = null
const router = useRouter()
const countNum = ref(3)
const { t } = useI18n()
const verifyCodeStr = ref('獲取驗證碼')
// 表單驗證
const rules = [{ required: true, message: t ('message_verifyCode') }]
const formState = reactive ({ verifyCode: '' })
const submit= async(values) => {
  const { verifyCode } = values
 const { token }  = await userApi.login(verifyCode)
  setToken(token)
  message.success(t('login_success'))
  router.push('/')
};

const getVerifyCode = () => {
  verifyCodeStr.value = `${countNum.value}秒`
  formState.verifyCode = '1234'
  timer = setInterval(() => {
    countNum.value -=1
    verifyCodeStr.value = `${countNum.value}秒`
    if (countNum.value === 0){
      clearInterval(timer)
      verifyCodeStr.value = '獲取驗證碼'
      return
    }
  
  },1000)
}


onMounted( ()=>{
  const token = getToken()
  if (token) {
    router.push('/')
  }
})


</script>
<template>
  <niu-layout>
    <div class="container mx-auto ">
      <h2 class="text-center mt-40 mb-10 text-4xl">註冊 / 登入</h2>
       <a-form :model="formState" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off"
    @finish="submit">
    <a-form-item :rules="rules" label="驗證碼" name="verifyCode">
      <div class="flex">
      <a-input v-model:value="formState.verifyCode" />
      <a-button @click="getVerifyCode">{{ verifyCodeStr }}</a-button>
      </div>
    </a-form-item>
     <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button html-type="submit">送出</a-button>
    </a-form-item>
  </a-form>
    </div>
  </niu-layout>
</template>

<style scoped>

/* .main-inform {
  width: 500px;
  height: 720px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  font-size: 40px;
  font-weight: bold;
}

.main-number{
  margin-top: 10px;
  font-size: 20px;
  color: #333333;;
}

.form-number{
  width: 300px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 30px;
  display: flex;
  justify-content: space-around;
  margin: 50px 50px;
}


.input-number{
  width: 250px;
  border-radius: 10px;
  font-size: 30px;
  outline: none;

}

.button-number{
  width: 200px;
  height: 48px;
  border-radius: 20px;
  font-size: 20px;
  background-color: #333333;
  color: #FFFFFF;
}

 */

</style>
