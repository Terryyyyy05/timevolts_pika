<template>
    <h2 class="title">會員資料</h2>
    <main>
        <form class="memberinfo" action="" @submit.prevent="handleSubmit">
            <div v-for="item in formInput" :key="item.title">
                <label for="item.title">{{item.title}}</label>
                <input required :disabled="inputDisabled" :type="item.type" :name="item.name" :id="item.id">
            </div>
            <div v-for="item in passwordInput" :key="item.title" :name="item.name" id="item.id" v-show="!inputDisabled">
                <label for="item.tite">{{ item.title }}</label>
                <input required :disabled="inputDisabled" :type="item.type" :name="item.name" :id="item.id">
            </div>
        </form>
        <div class="photo-area">
            <form action="" @submit.prevent="handleSubmit">
                <label for="uploadPic">
                    <div id="myimg"></div>
                </label>
                <input :disabled="inputDisabled" type="file" accept="image/gif, image/jpeg, image/png" name="uploadPic" id="uploadPic" >
            </form>
            <p class="memLevel">普通會員</p>
            <div class="btn-area">
                <button class="btn-lightbox" v-show="!inputDisabled" @click="changeInfo()">取消修改</button>
                <button class="btn-lightbox" @click="changeInfo()">{{ inputDisabled? "編輯": "完成" }} </button>
            </div>
        </div>
    </main>
</template>
<script>

export default {
    data(){
        return{
            inputDisabled: true,
            formInput:[
                {
                    title:"姓名",
                    type: "text",
                    name:"mem_name",
                    id:"username",
                }
                ,
                {
                    title:"生日",
                    type: "date",
                    name:"birthday",
                    id:"birthday",
                }
                ,
                {
                    title:"電話",
                    type: "tel",
                    name:"phone",
                    id:"phone",
                }
                ,
                {
                    title:"地址",
                    type: "address",
                    name:"address",
                    id:"address",
                }
                ,
                {
                    title:"E-mail",
                    type: "email",
                    name:"email",
                    id:"email",
                },
                {
                    title:"密碼",
                    type: "password",
                    name:"password",
                    id:"password",
                }
            ],
            passwordInput:[
                {
                    title:"新密碼",
                    type: "password",
                    name:"password",
                    id:"password1",
                },
                {
                    title:"再次輸入新密碼",
                    type: "password",
                    name:"password",
                    id:"password2",
                }
            ],
            result:{},
        }
    },
    created(){
        this.getData()
        console.log(this.formInput);
    },
    methods:{
        handleSubmit(){
            console.log(this.username, this.birthday, this.phone, this.address, this.email, this.password);
        },
        changeInfo(){
            this.inputDisabled = !this.inputDisabled;
            //密碼驗證
            // if(this.password==this.oldpassword){
            //     if(this.newpassword2==this.newpassword3){
            //         this.password=this.newpassword2
            //     }
            // }
        },
        getData(){
            fetch('http://localhost/timevolts_pika/public/phpfile/getMemberInfo.php')
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
        height: 430px;
        .memberinfo {
            padding: 5px;
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            box-sizing: border-box;
            div {
                color: #fff;
                font-size: 20px;
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
            .btn-area{
                display: flex;
                button{
                    margin: 0 5px;
                }
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
