import { BASE_URL } from "@/assets/js/commom.js";

export default {
   state() {
      return {
         userId: null,
         loginError: null,
         // token: null,
         // tokenExpiration: null,
         memberStatus: null,
      };
   },
   getters: {
      userId(state) {
         return state.userId;
      },
      loginError(state) {
         return state.loginError;
      },
      memberStatus(state) {
         return state.memberStatus;
      },
   },
   actions: {
      async getUserId(context) {
         try {
            const response = await fetch(`${BASE_URL}ifLogin.php`);

            const responseData = await response.json();
            // console.log(responseData);
            if (responseData.mem_id) {
               context.commit("getUserId", responseData.mem_id);
            } else {
               context.commit("getUserId", null);
            }
         } catch (error) {
            console.log(error);
         }
      },
      async login(context, payload) {
         // const response = await fetch(
         //    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAUSZzvY_JJH6cu7Gc99iQdkAScLAh2PZY",
         //    {
         //       method: "POST",
         //       body: JSON.stringify({
         //          email: payload.email,
         //          password: payload.password,
         //          returnSecureToken: true,
         //       }),
         //    }
         // );

         const response = await fetch(`${BASE_URL}login.php`, {
            method: "POST",
            body: JSON.stringify({
               email: payload.email,
               password: payload.password,
            }),
         });

         const responseData = await response.json();
         // console.log(responseData);
         if (responseData.errMsg) {
            // 登入失敗
            context.commit("getLoginError", responseData.errMsg);
         } else {
            context.commit("getLoginError", null);
         }

         context.commit("getMemberStatus", responseData.memberStatus);

         // if (!response.ok) {
         //    const error = new Error(
         //       responseData.message || "帳號或密碼出現錯誤"
         //    );
         //    throw error;
         // }

         // context.commit("setUser", {
         //    token: responseData.idToken,
         //    userId: responseData.localId,
         //    tokenExpiration: responseData.expiresIn,
         // });
      },
      async signup(context, payload) {
         // const response = await fetch(
         //    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAUSZzvY_JJH6cu7Gc99iQdkAScLAh2PZY",
         //    {
         //       method: "POST",
         //       body: JSON.stringify({
         //          email: payload.email,
         //          password: payload.password,
         //          returnSecureToken: true,
         //       }),
         //    }
         // );
         try {
            const response = await fetch(`${BASE_URL}signup.php`, {
               method: "POST",
               body: JSON.stringify({
                  action: "signup",
                  name: payload.name,
                  email: payload.email,
                  password: payload.password,
               }),
            });

            const responseData = await response.json();
            // console.log(responseData);

            if (!response.ok) {
               const error = new Error(error.message || "發生錯誤");
               console.log(error);
               throw error;
            }
         } catch (error) {
            console.log(error);
         }

         // context.commit("setUser", {
         //    token: responseData.idToken,
         //    userId: responseData.localId,
         //    tokenExpiration: responseData.expiresIn,
         // });
      },
   },
   mutations: {
      // setUser(state, payload) {
      //    state.token = payload.token;
      //    state.userId = payload.userId;
      //    state.tokenExpiration = payload.tokenExpiration;
      // },
      getUserId(state, payload) {
         state.userId = payload;
      },
      getLoginError(state, payload) {
         state.loginError = payload;
      },
      getMemberStatus(state, payload) {
         state.memberStatus = payload;
      },
   },
};
