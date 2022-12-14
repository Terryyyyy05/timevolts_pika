<template>
  <div class="coupon-container">
    <h3>選擇折價卷</h3>
    <ul class="coupon-content">
      <li v-for="item in couponList" :key="item.id">
        <div class="coupon-card">
          <div class="coupon-card-left">
            <div class="coupon-card-title">
              <span>${{ item.coupon_discount_number }}元</span>
              現金券
            </div>
            <div class="coupon-card-requirement">
              <span>(滿 ${{ item.coupon_pricing_condition }}元可使用)</span>
            </div>
            <div
              class="coupon-card-deadline"
              v-if="item.coupon_exp_date !== 'null'"
            >
              有效期限：{{ item.coupon_valid_date }} ~
              {{ item.coupon_exp_date }}
            </div>
            <div class="coupon-card-deadline" v-else>
              有效期限：{{ item.coupon_valid_date }} ~ 無期限
            </div>
          </div>
          <div class="coupon-card-right">
            <span @click="useThisCoupon(item)">立即使用</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { couponList } from "@/components/product/js/coupon";

export default {
  emits: ["coupon"],
  setup(props, { emit }) {
    const useThisCoupon = (item) => {
      emit("coupon", item);
    };

    return {
      couponList,
      useThisCoupon,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

.coupon-container {
  > h3 {
    font-size: 28px;
    color: aliceblue;
    text-align: center;
    position: relative;

    &:after {
      content: "";
      height: 1px;
      width: 30%;
      background-color: aliceblue;

      position: absolute;
      bottom: -10px;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
  > .coupon-content {
    margin: 8% 0 5% 0;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    overflow: scroll;

    &::-webkit-scrollbar {
      width: 0px;
    }
    .coupon-card {
      display: flex;
      color: map-get($color, body_dark);
      background-color: map-get($color, primary_sub);
      width: 80%;
      border-radius: 10px;
      margin: auto;

      .coupon-card-left {
        border-right: dotted;
        width: 80%;
        position: relative;
        padding: 20px;

        display: flex;
        flex-direction: column;
        row-gap: 10px;

        .coupon-card-title {
          display: flex;
          justify-content: space-between;
          font-size: 24px;
        }
        .coupon-card-requirement {
          font-size: 16px;
        }
        .coupon-card-deadline {
          font-size: 12px;
          font-weight: bold;
        }
      }

      .coupon-card-right {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        position: relative;

        &::before,
        &::after {
          content: "";
          background-color: #333333;
          position: absolute;
          left: -10px;
          width: 20px;
          height: 10px;
        }

        &::before {
          border-radius: 10px 10px 0 0;
          bottom: 0;
        }

        &::after {
          border-radius: 0 0 10px 10px;
          top: 0;
        }
        span {
          display: block;
          cursor: pointer;
          writing-mode: vertical-lr;
          border: 2px solid #434343;
          border-radius: 48px;
          padding: 5px;
          margin: 0 auto;
          font-size: 18px;
        }
      }
    }
  }
}

@include m() {
  * {
    box-sizing: border-box;
  }

  .coupon-container {
    > h3 {
      font-size: 20px;
      &:after {
        width: 40%;
      }
    }

    .coupon-content {
      .coupon-card {
        .coupon-card-left {
          padding: 15px;
          row-gap: 10px;

          .coupon-card-title {
            font-size: 18px;
          }
          .coupon-card-requirement {
            font-size: 14px;
          }
          .coupon-card-deadline {
            font-size: 12px;
            font-weight: bold;
          }
        }

        .coupon-card-right {
          span {
            border: 1px solid #434343;
            border-radius: 15px;
            padding: 5px;
            font-size: 14px;
          }
        }
      }
    }
  }
}

// 折價卷卡片

// member-box-upper
</style>
