<template>
    <h2 class="title">會員資料</h2>
    <main>
        <form class="memberinfo" action="" method="post" enctype="multipart/form-data">
            <div v-for="item in formInput" :key="item.title">
                <label for="item.title">{{item.title}}</label>
                <input 
                required 
                :disabled="inputDisabled" 
                :type="item.type" 
                :name="item.name" 
                :id="item.id" 
                v-model="item.value"
                >
            </div>
            <!-- 更新密碼 -->
            <div v-for="item in passwordInput" :key="item.title" :name="item.name" id="item.id" v-show="!inputDisabled">
                <label for="item.tite">{{ item.title }}</label>
                <input 
                required 
                :disabled="inputDisabled" 
                :type="item.type" 
                :name="item.name" 
                :id="item.id" 
                v-model="item.value">
            </div>
        </form>
        <div class="photo-area">
            <form action="" method="post" enctype="multipart/form-data">
                <label for="uploadPic">
                    <div id="myimg"></div>
                </label>
                <input :disabled="inputDisabled" type="file" accept="image/gif, image/jpeg, image/png" name="uploadPic" id="uploadPic" >
            </form>
            <p class="memLevel">{{memLevel }}</p>
            <div class="btn-area">
                <button class="btn-lightbox" v-show="!inputDisabled" @click="changeInfo()">取消</button>
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
                },
                {
                    title:"生日",
                    type: "date",
                    name:"mem_bday",
                    id:"birthday",
                },
                {
                    title:"電話",
                    type: "tel",
                    name:"mem_phone",
                    id:"phone",
                },
                {
                    title:"地址",
                    type: "address",
                    name:"mem_address",
                    id:"address",
                },
                {
                    title:"E-mail",
                    type: "email",
                    name:"mem_email",
                    id:"email",
                }
            ],
            passwordInput:[
                {
                    title:"舊密碼",
                    type: "password",
                    name:"mem_psw",
                    id:"password",

                },
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
            memLevel:"普通會員",
            result:[],
        }
    },
    created(){
        this.getData();
    },
    methods:{
        getData(){
            fetch('http://localhost/timevolts_pika/public/phpfile/getMemberInfo.php')
            .then((res) => res.json())
            .then((json)=>{
                this.formInput[0].value = json[1].mem_name
                this.formInput[1].value = json[1].mem_bday
                this.formInput[2].value = json[1].mem_phone
                this.formInput[3].value = json[1].mem_address
                this.formInput[4].value = json[1].mem_email
                // this.passwordInput[0].value = json[1].mem_psw
            })
        },
        saveData(){
            const payload={
                mem_name:this.formInput[0].value,
                mem_bday:this.formInput[1].value,
                mem_phone:this.formInput[2].value,
                mem_address:this.formInput[3].value,
                mem_email:this.formInput[4].value,
                mem_psw:this.passwordInput[2].value
            }
            fetch('http://localhost/timevolts_pika/public/phpfile/updateMemberInfo.php', {
                method:'POST', 
                body: new URLSearchParams(payload),
            })
        },
        // 舊密碼要跟資料庫的原始密碼一樣，新密碼跟再次更新密碼要做驗證
        changeInfo(){
           this.inputDisabled = !this.inputDisabled;
                
            //如果click之後 資料庫的欄位也會同時清空
            
            if(this.inputDisabled == true){
                // 這裡寫密碼判斷
                // if(this.formInput[5].value===this.passwordInput[0].value){
            //      this.inputDisabled = !this.inputDisabled;
            //     if(this.passwordInput[0].value===this.passwordInput[1].value){
            //         this.formInput[5].value=this.passwordInput[0].value
            //         this.inputDisabled = !this.inputDisabled;
            //     }
            // }
               this.saveData(); 
            } 

            
        },
        
        // saveData(){
        //     fetch('http://localhost/timevolts_pika/public/phpfile/updateMemberInfo.php', {
        //         method:'POST', 
        //         body: JSON.stringify({test:123}),
        //     })
        //     .then((res) => res.json())
        //     .then((result) => {
        //         this.formInput[0].value = json[0].mem_name
        //         this.formInput[1].value = json[0].mem_bday
        //         this.formInput[2].value = json[0].mem_phone
        //         this.formInput[3].value = json[0].mem_address
        //         this.formInput[4].value = json[0].mem_email
        //         this.formInput[5].value = json[0].mem_psw
        //         console.log(this.formInput[0]);
        //     })
        // }
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
