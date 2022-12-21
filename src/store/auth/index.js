export default {
   state() {
      return {
         userId: null,
         token: null,
         tokenExpiration: null,
      };
   },
   getters: {
      userId(state) {
         return state.userId;
      },
   },
   actions: {
      async login(context, payload) {
         const responce = await fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAUSZzvY_JJH6cu7Gc99iQdkAScLAh2PZY",
            {
               method: "POST",
               body: JSON.stringify({
                  email: payload.email,
                  password: payload.password,
                  returnSecureToken: true,
               }),
            }
         );

         const responceData = await responce.json();
         console.log(responceData);

         if (!responce.ok) {
            const error = new Error(
               responceData.message || "發生錯誤，請稍後再試"
            );
            throw error;
         }

         context.commit("setUser", {
            token: responceData.idToken,
            userId: responceData.localId,
            tokenExpiration: responceData.expiresIn,
         });
      },
      async signup(context, payload) {
         const responce = await fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAUSZzvY_JJH6cu7Gc99iQdkAScLAh2PZY",
            {
               method: "POST",
               body: JSON.stringify({
                  email: payload.email,
                  password: payload.password,
                  returnSecureToken: true,
               }),
            }
         );

         const responceData = await responce.json();
         console.log(responceData);

         if (!responce.ok) {
            const error = new Error(
               responceData.message || "發生錯誤，請稍後再試"
            );
            throw error;
         }

         context.commit("setUser", {
            token: responceData.idToken,
            userId: responceData.localId,
            tokenExpiration: responceData.expiresIn,
         });
      },
   },
   mutations: {
      setUser(state, payload) {
         state.token = payload.token;
         state.userId = payload.userId;
         state.tokenExpiration = payload.tokenExpiration;
      },
   },
};
