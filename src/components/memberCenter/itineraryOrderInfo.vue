<template>
   <base-dialog :show="!!error" title="錯誤" @close="closeDialog">
      <p>{{ errMsg }}</p>
   </base-dialog>
   <base-card class="comment-box" v-if="reviewBox">
      <form>
         <label for="rating">請問您對於這次旅行的滿意度評分:</label>
         <select name="rating" id="rating" v-model="rating">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
         </select>
         <label for="comment" @click="gogo">寫下您的評論吧!</label>
         <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            v-model.trim="comment"
         ></textarea>
         <button class="btn-primary" @click="submitReview">送出</button>
         <!-- <button class="btn-lightbox" @click="clickButton">離開</button> -->
      </form>
   </base-card>
   <div v-for="(order, index) in orderData" :key="order.id" class="wrap">
      <div class="id">{{ order.order_id }}</div>
      <div class="itineraryName">{{ order.itinerary_name }}</div>
      <div class="date">{{ order.order_date }}</div>
      <div class="start">{{ order.start }}</div>
      <div class="end">{{ order.end }}</div>
      <div class="price">{{ order.total }}</div>
      <div class="status">{{ order.status }}</div>
      <div class="btnWrap">
         <button class="btn-lightbox btn" @click="changeDisplay">
            查看訂單
         </button>
         <button
            class="btn-primary btn"
            @click="leaveComment(index)"
            v-if="orderData[index].end < this.today"
         >
            評論
         </button>
      </div>
   </div>
</template>
<script>
import { BASE_URL } from "@/assets/js/commom";

export default {
   name: "itineraryOrderInfo",
   emits: ["clickOpenModal"],

   data() {
      return {
         informationVisibile: 10,
         orderData: [],
         // 這邊也要getData
         orderList: [
            {
               id: 1,
               itineraryName: "十字軍東征",
               date: "2022/12/30",
               start: "2022/1/1",
               end: "2022/1/5",
               price: 100000,
               status: "訂單成立",
            },
            // {
            //     id: 2,
            //     itineraryName: "十字軍東征",
            //     date: "2022/12/30",
            //     start: "2022/1/1",
            //     end: "2022/1/5",
            //     price: 100000,
            //     status: "訂單成立",
            // },
            // {
            //     id: 3,
            //     itineraryName: "十字軍東征",
            //     date: "2022/12/30",
            //     start: "2022/1/1",
            //     end: "2022/1/5",
            //     price: 100000,
            //     status: "訂單成立",
            // },
            // {
            //     id: 4,
            //     itineraryName: "十字軍東征",
            //     date: "2022/12/30",
            //     start: "2022/1/1",
            //     end: "2022/1/5",
            //     price: 100000,
            //     status: "訂單成立",
            // },
            // {
            //     id: 5,
            //     itineraryName: "十字軍東征",
            //     date: "2022/12/30",
            //     start: "2022/1/1",
            //     end: "2022/1/5",
            //     price: 100000,
            //     status: "訂單成立",
            // },
            // {
            //     id: 6,
            //     itineraryName: "十字軍東征",
            //     date: "2022/12/30",
            //     start: "2022/1/1",
            //     end: "2022/1/5",
            //     price: 100000,
            //     status: "訂單成立",
            // },
            // {
            //     id: 7,
            //     itineraryName: "十字軍東征",
            //     date: "2022/12/30",
            //     start: "2022/1/1",
            //     end: "2022/1/5",
            //     price: 100000,
            //     status: "訂單成立",
            // },
            // {
            //     id: 8,
            //     itineraryName: "十字軍東征",
            //     date: "2022/12/30",
            //     start: "2022/1/1",
            //     end: "2022/1/5",
            //     price: 100000,
            //     status: "訂單成立",
            // },
            // {
            //     id: 9,
            //     itineraryName: "十字軍東征",
            //     date: "2022/12/30",
            //     start: "2022/1/1",
            //     end: "2022/1/5",
            //     price: 100000,
            //     status: "訂單成立",
            // },
            // {
            //     id: 10,
            //     itineraryName: "十字軍東征",
            //     date: "2022/12/30",
            //     start: "2022/1/1",
            //     end: "2022/1/5",
            //     price: 100000,
            //     status: "訂單成立",
            // },
            // {
            //     id: 11,
            //     itineraryName: "十字軍東征",
            //     date: "2022/12/30",
            //     start: "2022/1/1",
            //     end: "2022/1/5",
            //     price: 100000,
            //     status: "訂單成立",
            // },
         ],
         rating: "",
         comment: "",
         reviewBox: false,
         formIsValid: true,
         itineraryOrderId: null,
         errMsg: "",
         error: false,
      };
   },
   computed: {
      orderList() {
         return this.orderList.slice(0, this.informationVisibile);
      },
      today() {
         let yourDate = new Date();
         yourDate.toISOString().split("T")[0];
         const offset = yourDate.getTimezoneOffset();
         yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
         // console.log(yourDate.toISOString().split("T")[0]);
         return yourDate.toISOString().split("T")[0];
      },
   },
   methods: {
      gogo() {
         console.log(this.rating);
         console.log(this.comment);
         console.log(this.itineraryOrderId);
      },
      async getData() {
         await this.$store.dispatch("getUserId");
         this.userId = this.$store.getters["userId"];
         // alert(this.userId);

         if (this.userId) {
            fetch(`${BASE_URL}/getMemberInfo.php`, {
               method: "POST",
               body: JSON.stringify({
                  userId: this.userId,
               }),
            })
               .then((res) => res.json())
               .then((json) => {
                  // console.log(json);

                  this.result = json;

                  this.formInput[0].value = json[0].mem_name;
                  this.formInput[1].value = json[0].mem_bday;
                  this.formInput[2].value = json[0].mem_phone;
                  this.formInput[3].value = json[0].mem_address;
                  this.formInput[4].value = json[0].mem_email;
                  this.memLevel = json[0].mem_level;
               })
               .then(
                  fetch(`${BASE_URL}/getItineraryOrder.php`)
                     .then((res) => res.json())
                     .then((data) => {
                        // this.data = data;

                        // console.log(this.data[0].itinerary_order_id);
                        const itineraryOrders = [];
                        for (const key in data) {
                           const itineraryOrder = {
                              order_id: data[key].itinerary_order_id,
                              itinerary_name: data[key].itinerary_name,
                              order_date: data[key].itinerary_order_date,
                              start: data[key].itinerary_start_date,
                              end: data[key].itinerary_end_date,
                              total: data[key].itinerary_order_total,
                              status: data[key].itinerary_order_status,
                           };
                           itineraryOrders.push(itineraryOrder);
                        }
                        this.orderData = itineraryOrders;
                        // console.log(this.orderData);
                     })
               );
         }
      },
      changeDisplay() {
         this.$emit("clickOpenModal");
      },
      leaveComment(index) {
         this.reviewBox = true;
         this.itineraryOrderId = this.orderData[index].order_id;
         fetch(`${BASE_URL}/leaveReview.php`, {
            method: "POST",
            body: JSON.stringify({
               orderId: this.itineraryOrderId,
            }),
         })
            .then((res) => res.json())
            .then((json) => {
               if (json.errMsg) {
                  this.errMsg = json.errMsg;
                  this.error = true;
                  this.reviewBox = false;
               }
            });
      },
      submitReview() {
         this.reviewBox = false;
         this.formIsValid = true;
         if (this.rating === "" || this.message === "") {
            this.formIsValid = false;
            return;
         }
         fetch(`${BASE_URL}/sendReview.php`, {
            method: "POST",
            body: JSON.stringify({
               rating: this.rating,
               comment: this.comment,
               orderId: this.itineraryOrderId,
            }),
         })
            .then((res) => res.json())
            .then((json) => {
               // console.log(json);
            });
      },
      closeDialog() {
         this.error = false;
      },
   },
   mounted() {
      this.getData();
   },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
.comment-box {
   width: 500px;
   height: 350px;
   position: absolute;
   transform: translate(-50%, -50%);
   top: 50%;
   left: 50%;
}
form {
   display: flex;
   flex-direction: column;
   font-size: 20px;
   color: #eee;
   label {
      margin-bottom: 12px;
   }
   select {
      width: 15%;
      text-align: center;
      margin-bottom: 48px;
   }
   button {
      margin-top: 36px;
      width: 50%;
   }
}
.wrap {
   display: flex;
   justify-content: center;
   align-items: center;
   color: #fff;
   padding: 5px;
   text-align: center;
   border-bottom: 1px dashed map-get($color, primary);
}
.id {
   width: 12.5%;
}
.itineraryName {
   width: 12.5%;
}
.date {
   width: 12.5%;
}
.start {
   width: 12.5%;
}
.end {
   width: 12.5%;
}
.price {
   width: 12.5%;
}
.status {
   width: 12.5%;
}
.btnWrap {
   width: 12.5%;
}
.btn {
   width: 100%;
   margin: 0;
   padding: 0;
}
</style>
