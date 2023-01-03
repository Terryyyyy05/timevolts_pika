<template>
  <base-card-check class="base-card">
    <form class="buyer-info">
      <!-- <div class="checkbox">
        <base-checkbox text="同會員資料"></base-checkbox>
      </div> -->
      <div class="form-content">
        <div>
          <label class="p_lg">姓名</label>
          <input
            class="p_lg"
            type="text"
            ref="buyerName"
            v-model="buyerInfo.buyerName"
            placeholder="許巴宰"
          />
        </div>
        <div>
          <label class="p_lg">電話</label>
          <input
            class="p_lg"
            type="text"
            ref="buyerPhone"
            v-model="buyerInfo.buyerPhone"
            placeholder="09XX-XXX-XXX"
          />
        </div>
        <div>
          <label class="p_lg">信箱</label>
          <input
            class="p_lg"
            type="text"
            ref="buyerEmail"
            v-model="buyerInfo.buyerEmail"
            placeholder="XXXX@gmail.com"
          />
        </div>
        <div>
          <label class="p_lg">地址</label>
          <input
            class="p_lg"
            type="text"
            ref="buyerAddress"
            v-model="buyerInfo.buyerAddress"
            placeholder="請填寫詳細地址以利配送"
          />
        </div>
        <div>
          <label class="p_lg">配送<br />時間</label>
          <input
            class="p_lg"
            type="text"
            ref="buyerTime"
            v-model="buyerInfo.buyerTime"
            placeholder="(早上/下午)"
          />
        </div>
      </div>
    </form>
  </base-card-check>
</template>

<script>
// componnents
import BaseCardCheck from "@/components/product/checkout/BaseCardCheck.vue";
import BaseCheckbox from "@/components/history/base/BaseCheckbox.vue";

import { reactive, watchEffect } from "vue";
import { useStore } from "vuex";
export default {
  name: "CheckOutStepTwo",
  components: {
    BaseCardCheck,
    BaseCheckbox,
  },
  setup() {
    const store = useStore();

    const buyerInfo = reactive({
      buyerName: "",
      buyerPhone: "",
      buyerEmail: "",
      buyerAddress: "",
      buyerTime: "",
    });

    watchEffect(() => {
      store.commit("curBuyerInfo", buyerInfo);
    });

    return {
      buyerInfo,
      // methods
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

.base-card {
  background-color: map-get($color, body_dark);
  color: map-get($color, "primary");
  margin: auto;
}

.checkbox {
  margin-bottom: 5%;
}

.form-content {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 36px;
  height: fit-content;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    margin-right: 24px;
  }
  input {
    width: 800px;
    font-size: 24px;
    outline: none;
    background-color: map-get($color, "dark_sub");
    color: #fff;
  }
}

@include m() {
  .base-card {
    padding: 20px;
  }
  .checkbox {
    margin-bottom: 10%;
    transform: scale(0.8);
  }
  .form-content {
    gap: 20px;
    height: fit-content;

    label {
      margin-right: 24px;
    }
    input {
      width: 70%;
      font-size: 14px;
    }
  }
}
</style>
