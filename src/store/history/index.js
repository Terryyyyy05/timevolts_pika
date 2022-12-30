import { BASE_URL } from "@/assets/js/commom.js";

export default {
   namespaced: true,
   state() {
      return {
         histories: [],
      };
   },
   getters: {
      histories(state) {
         return state.histories;
      },
   },
   actions: {
      async getHistories(context) {
         const response = await fetch(`${BASE_URL}getHistories.php`);

         const responseData = await response.json();
         console.log(responseData);

         const histories = [];

         for (const key in responseData) {
            const history = {
               id: String(responseData[key].story_id),
               title: responseData[key].story_name,
               tagDanderLevel: responseData[key].story_risk,
               tagFeature: responseData[key].story_specialty,
               tagRegion: responseData[key].story_spot,
               happenYear: responseData[key].story_age,
               description: responseData[key].story_intro,
               image: responseData[key].story_cover,
            };
            histories.push(history);
         }

         context.commit("getHistories", histories);
      },
   },
   mutations: {
      getHistories(state, payload) {
         state.histories = payload;
      },
   },
};
