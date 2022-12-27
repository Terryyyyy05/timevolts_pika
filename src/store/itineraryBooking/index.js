export default {
   namespaced: true,
   state() {
      return {
         orderInfo: {
            userId: null,
            itineraryId: null,
            attendNum: null,
            originPrice: null,
            totalPrice: null,
            discoutPrice: null,
         },
         participants: [],
      };
   },
   getters: {
      itineraryId(state) {
         return state.orderInfo.itineraryId;
      },
      totalPrice(state) {
         return state.orderInfo.totalPrice;
      },
      attendNum(state) {
         return state.orderInfo.attendNum;
      },
      orderInfo(state) {
         return state.orderInfo;
      },
      participants(state) {
         return state.participants;
      },
   },
   actions: {
      sendOrderInfo(context, payload) {
         context.commit("sendOrderInfo", payload);
      },
      sendParticipants(context, payload) {
         context.commit("sendParticipants", payload);
      },
   },
   mutations: {
      sendOrderInfo(state, payload) {
         state.orderInfo.userId = payload.userId;
         state.orderInfo.itineraryId = payload.itineraryId;
         state.orderInfo.attendNum = payload.attendNum;
         state.orderInfo.originPrice = payload.originPrice;
         state.orderInfo.totalPrice = payload.totalPrice;
         state.orderInfo.discoutPrice = payload.discoutPrice;
      },
      sendParticipants(state, payload) {
         state.participants = payload;
      },
   },
};
