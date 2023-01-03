<template>
  <header>
    <all-header />
    <innerpageHeader></innerpageHeader>
  </header>
  <div class="container">
    <the-heading heading="結帳" subheading="Checkout"></the-heading>
    <progress-bar
      class="mt"
      :secondMode="setSecondMode"
      :thirdMode="setThirdMode"
      :fourthMode="setFourthMode"
      :line="setProgressLine"
      v-if="this.selectedStep !== 'done'"
    ></progress-bar>
    <section class="check-form">
      <h3>
        {{ currentStep }}
      </h3>
      <div class="form-content">
        <keep-alive>
          <component :is="selectedStep"></component>
        </keep-alive>
      </div>
    </section>

    <div class="buttons">
      <button
        class="btn-primary"
        id="btnLeft"
        style="margin: auto"
        @click="lastStep"
      >
        {{ buttonLeft }}
      </button>
      <button
        class="btn-primary"
        id="btnRight"
        style="margin: auto"
        @click="nextStep"
      >
        {{ buttonRight }}
      </button>
      <button
        class="btn-secondary"
        style="margin: auto"
        v-if="this.selectedStep === 'done'"
      >
        查看訂單
      </button>
    </div>
    <div id="form_ECPAy"></div>
  </div>
</template>

<script>
import ProgressBar from "../../components/product/checkout/ProgressBar.vue";

// start
import CheckOutStepOne from "@/components/product/checkout/CheckOutStepOne.vue";
import CheckOutStepTwo from "@/components/product/checkout/CheckOutStepTwo.vue";
import CheckOutStepThree from "@/components/product/checkout/CheckOutStepThree.vue";
import done from "@/components/product/checkout/done.vue";

import { BASE_URL } from "@/assets/js/commom.js";

import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  components: {
    ProgressBar,
    // start
    CheckOutStepOne,
    CheckOutStepTwo,
    CheckOutStepThree,
    done,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    // data
    const selectedStep = ref("check-out-step-one");
    const currentStep = ref("確認商品");
    const buttonLeft = ref("返回商品頁");
    const buttonRight = ref("填寫收件人資料");

    // computed
    const setSecondMode = computed(() => {
      if (
        selectedStep.value === "check-out-step-two" ||
        selectedStep.value === "check-out-step-three" ||
        selectedStep.value === "check-out-step-fourth" ||
        selectedStep.value === "done"
      ) {
        return "circle progress-active";
      } else {
        return "circle";
      }
    });

    const setThirdMode = computed(() => {
      return selectedStep.value === "check-out-step-three" ||
        selectedStep.value === "check-out-step-fourth" ||
        selectedStep.value === "done"
        ? "circle progress-active"
        : "circle";
    });

    // const setFourthMode = computed(() => {
    //   return selectedStep.value === "check-out-step-fourth" ||
    //     selectedStep.value === "done"
    //     ? "circle progress-active"
    //     : "circle";
    // });

    const setProgressLine = computed(() => {
      if (selectedStep.value === "check-out-step-two") {
        return "width: 50%";
      } else if (selectedStep.value === "check-out-step-three") {
        return "width: 100%";
      }
      // else if (selectedStep.value === "check-out-step-fourth") {
      //   return "width: 100%";
      // }
    });

    // methods
    const nextStep = () => {
      if (selectedStep.value === "check-out-step-one") {
        selectedStep.value = "check-out-step-two";
        currentStep.value = "填寫收件人資訊";
        buttonLeft.value = "上一步";
        buttonRight.value = "下一步";
      } else if (selectedStep.value === "check-out-step-two") {
        selectedStep.value = "check-out-step-three";
        currentStep.value = "確認資訊";
        buttonLeft.value = "上一步";
        buttonRight.value = "信用卡付款";
      } else if (selectedStep.value === "check-out-step-three") {
        // selectedStep.value = "done";
        // currentStep.value = "訂單完成";

        // let btnLeft = document.getElementById("btnLeft");
        // let btnRight = document.getElementById("btnRight");
        // btnLeft.style.display = "none";
        // btnRight.style.display = "none";

        // store.commit("addBuyerInfo");
        sendECPAy();
        return
      }
      window.scrollTo(0, 0);
    };

    const lastStep = () => {
      if (selectedStep.value === "check-out-step-one") {
        router.push({ path: "/product" });
      } else if (selectedStep.value === "check-out-step-two") {
        selectedStep.value = "check-out-step-one";
        currentStep.value = "確認商品";
        buttonLeft.value = "返回商品頁";
        buttonRight.value = "填寫收件人資料";
      } else if (selectedStep.value === "check-out-step-three") {
        selectedStep.value = "check-out-step-two";
        currentStep.value = "填寫收件人資訊";
        buttonLeft.value = "上一步";
        buttonRight.value = "下一步";
      }
    };

    const sendECPAy = () => {
      console.log(store.state.cart);
      const sendItem = {};
      sendItem.cart = store.state.cart;
      sendItem.totalAmount = store.state.curBuyerInfo.totalAmount;
      console.log(sendItem);

      fetch(
        `${BASE_URL}ECPayAIO_PHP-master/AioSDK/example/sample_Credit_CreateOrder.php`,
        {
          method: "POST",
          body: JSON.stringify(sendItem),
        }
      )
        .then((res) => res.text())
        .then((html) => {
          const fragment = document
            .createRange()
            .createContextualFragment(html);
          document.getElementById("form_ECPAy").appendChild(fragment);
        });
    };

    // const testqq = () => {
    //   fetch(
    //     `${BASE_URL}ECPayAIO_PHP-master/AioSDK/example/sample_ServerReplyPaymentStatus.php`
    //   )
    //     .then((res) => res.json())
    //     .then((html) => {
    //       console.log(html);
    //     });
    // };

    // onMounted(() => {
    //   testqq();
    // });

    return {
      // data
      selectedStep,
      currentStep,
      buttonLeft,
      buttonRight,
      // computed
      setSecondMode,
      setThirdMode,
      // setFourthMode,
      setProgressLine,
      // method
      nextStep,
      lastStep,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

.check-form {
  color: aliceblue;
  font-size: 28px;

  > h3 {
    position: relative;
    text-align: center;
    margin-top: 5%;
    margin-bottom: 3%;

    font-size: 36px;
    color: map-get($color, "primary");
    &::before,
    &::after {
      content: "";
      width: 30%;
      height: 1px;
      background-color: currentColor;

      position: absolute;
      top: 60%;
    }

    &::before {
      left: 5%;
    }

    &::after {
      right: 5%;
    }
  }

  > .form-content {
    background-color: rgba(map-get($color, primary), 40%);
  }
}

.buttons {
  display: flex;
  gap: 48px;
  width: fit-content;
  margin: 24px auto 0;
}

.mt {
  margin-top: 5%;
}

@include m() {
  .check-form {
    font-size: 20px;

    > h3 {
      font-size: 24px;
      margin-top: 15%;
      margin-bottom: 8%;
      &::before,
      &::after {
        content: "";
        width: 10%;
      }
    }
  }

  .buttons {
    margin: 50px auto 0;
  }
  .btn-primary {
    font-size: 16px;
    padding: 5px 5px;
  }

  .mt {
    margin-top: 15%;
  }
}
</style>
