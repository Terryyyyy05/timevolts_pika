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
         // console.log(responseData);

         const histories = [];

         for (const key in responseData) {
            const history = {
               id: responseData[key].story_id,
               title: responseData[key].story_name,
               tagDanderLevel: responseData[key].story_risk,
               tagFeature: responseData[key].story_specialty,
               tagRegion: responseData[key].story_spot,
               happenYear: responseData[key].story_age,
               description: responseData[key].story_intro,
               image: responseData[key].story_cover,
               status: responseData[key].story_status,
               isFavorite: false,
            };
            histories.push(history);
         }

         const response2 = await fetch(`${BASE_URL}getCollectedStory.php`);

         const responseData2 = await response2.json();
         // console.log(responseData2);

         const favoriteStory = [];

         for (const key in responseData2) {
            favoriteStory.push(responseData2[key].story_id);
         }
         // console.log(favoriteStory);

         histories.forEach(history => {
            if (favoriteStory.includes(history.id)) {
              history.isFavorite = true;
            }
          });
         // console.log(histories);

         context.commit("getHistories", histories);
      },
   },
   mutations: {
      getHistories(state, payload) {
         state.histories = payload;
      },
   },
};
