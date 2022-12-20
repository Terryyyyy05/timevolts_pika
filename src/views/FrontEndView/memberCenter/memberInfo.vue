<template>
  
    <h2 class="title">會員資料</h2>
    <main>
        <form class="memberinfo" action="" @submit.prevent="handleSubmit">
            <div>
                <label for="username">
                姓名:
                </label>
                <p>{{username}}</p>
                <input type="text" name="username" id="username" :placeholder="username" v-model="username" @change="newusername=username">
            </div>
            <div>
                <label for="birthdate">
                生日:
                </label>
                <p>{{birthday}}</p>
                <input type="date" name="birthday" id="birthday"  :placeholder="birthday"  v-model="birthday" @change="newbirthday=birthday">
            </div>
            <div>
                <label for="phone">
                電話:
                </label>
                <p>{{phone}}</p>
                <input type="tel" name="phone" id="phone"  :placeholder="phone"  v-model="phone" @change="newphone=phone">
            </div>
            <div>
                <label for="address">
                    地址:
                </label>
              <p>{{address}}</p>
                <input type="address" name="address" id="address" :placeholder="address"  v-model="address" @change="newaddress=address">
            </div>
            <div>
                <label for="email">
                    Email:
                </label>
                <p>{{email}}</p>
                <input type="email" name="email" id="email" :placeholder="email"  v-model="email" @change="newemail=email">
            </div>
            <div>
                <label for="password">
                    舊密碼:
                </label>
                <p>{{password}}</p>
                <input type="text" name="password" id="password" :placeholder="password"  v-model="password" @change="newpassword2=password">
            </div>
            <div>
                <label for="password">
                    新密碼:
                </label>
                <!-- <p>{{password}}</p> -->
                <input type="text" name="password" id="password" v-model="newpassword2">
            </div>
            <div>
                <label for="password">
                    新密碼確認:
                </label>
                <!-- <p>{{password}}</p> -->
                <input type="text" name="password" id="password" v-model="newpassword3">
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
            <button class="btn-lightbox" @click="changeINFO()">編輯</button>
        </div>
    </main>
</template>
<script>
// const result = {

// }

export default {
    data(){
        return{
            username:'許鈺玲',
            newusername:'',
            birthday:'11/22',
            newbirthday:'',
            phone:'24235436436',
            newphone:'',
            address:'DSADSADSAD',
            newaddress:'',
            email:'TJHGHKJGK',
            newemail:'',
            password:'12121',
            oldpassword:'',
            newpassword2:'',
            newpassword3:'',
            result:{},
        }

    },
    created(){
        this.getData()
    },
    methods:{
        handleSubmit(){
            console.log(this.username, this.birthday, this.phone, this.address, this.email, this.password);
        },
        changeINFO(){
            
            // this.newusername=this.username

            // this.birthday=this.newbirthday
            // this.phone=this.newphone
            // this.address=this.newaddress
            // this.email=this.newemail


            //密碼驗證
            if(this.password==this.oldpassword){
                if(this.newpassword2==this.newpassword3){
                    this.password=this.newpassword2
                }
            }

        },
        getData(){
            // this.result = result;
            fetch('http://localhost/timevolts_pika/public/phpfiles/getProducts.php')
            .then((res) => res.json())
            .then((json)=>{
                this.result = json[0];
                console.log(this.result);
            })
        },
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
