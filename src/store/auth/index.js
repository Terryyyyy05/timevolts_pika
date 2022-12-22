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

         fetch("http://localhost/timevolts_pika/public/phpfile/login.php", {
            method: "POST",
            body: JSON.stringify({
               email: payload.email,
               password: payload.password,
            }),
         }).then((response) => {
            return response.json();
         });

         // const responseData = await response.json();
         // console.log(responseData);

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

         fetch("http://localhost/timevolts_pika/public/phpfile/signup.php", {
            method: "POST",
            body: JSON.stringify({
               email: payload.email,
               password: payload.password,
            }),
            // headers: {
            //    "Content-Type": "application/json",
            // },
         }).then((response) => {
            return response.json();
         });

         // const responseData = await response.json();
         // console.log(responseData);

         // if (!response.ok) {
         //    const error = new Error(
         //       responseData.message || "發生錯誤，請稍後再試"
         //    );
         //    console.log(error);
         //    throw error;
         // }

         // context.commit("setUser", {
         //    token: responseData.idToken,
         //    userId: responseData.localId,
         //    tokenExpiration: responseData.expiresIn,
         // });
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
