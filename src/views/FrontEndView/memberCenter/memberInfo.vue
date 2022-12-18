<template>
  
    <h2 class="title">會員資料</h2>
    <main>
        <form class="memberinfo" action="" @submit.prevent="handleSubmit">
            <div>
                <label for="username">
                姓名:
                </label>
                <input type="text" name="username" id="username" v-model="username">
            </div>
            <div>
                <label for="birthdate">
                生日:
                </label>
                <input type="date" name="birthday" id="birthday" v-model="birthday">
            </div>
            <div>
                <label for="phone">
                電話:
                </label>
                <input type="tel" name="phone" id="phone" v-model="phone">
            </div>
            <div>
                <label for="address">
                    地址:
                </label>
                <input type="address" name="address" id="address" v-model="address">
            </div>
            <div>
                <label for="email">
                    Email:
                </label>
                <input type="email" name="email" id="email" v-model="email">
            </div>
            <div>
                <label for="password">
                    密碼:
                </label>
                <input type="text" name="password" id="password" v-model="password">
            </div>
        </form>
        <div class="photo-area">
            <form action="" @submit.prevent="handleSubmit">
                <label for="uploadPic">
                    <div id="myimg"></div>
                </label>
                <input type="file" name="uploadPic" id="uploadPic" >
            </form>
            <p class="memLevel">普通會員</p>
            <button class="btn-lightbox">編輯</button>
        </div>
    </main>
</template>
<script>
export default {
    data(){
        return{
            username:'',
            birthday:'',
            phone:'',
            address:'',
            email:'',
            password:'',
        }
    },
    methods:{
        handleSubmit(){
            console.log(this.username, this.birthday, this.phone, this.address, this.email, this.password);
        }
    }
};
</script>
<style lang="scss" scoped>
@import '@/assets/css/utils/variables';
    .title {
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        line-height: 50px;
        border-bottom: 2px solid map-get($color, primary);
        font-family:"Cube11" ;
    }
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 10px;
        margin: auto;
        .memberinfo {
            padding: 5px;
            width: 50%;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            div {
                color: #fff;
                font-size: 24px;
                display: flex;
                align-items: center;
                margin: 15px 0;
                label {
                margin-right: 2px;
                }
                input {
                    outline: none;
                    background-color: map-get($color, "dark_sub");
                    color: #fff;
                    flex-grow: 1;
                }
            }
        }
        .photo-area {
            padding: 5px;
            width: 50%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            form {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                #uploadPic {
                    display: none;
                }
            }
            .memLevel {
                padding: 15px 0;
                color: #fff;
                font-size: 24px;
            }
        }
        #myimg {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            border: 2px solid map-get($color, primary);
            }
    }
</style>
