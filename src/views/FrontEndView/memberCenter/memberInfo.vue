<template>
    <h2 class="title">會員資料</h2>
    <main>
        <form
            class="memberinfo"
            action=""
            method="post"
            enctype="multipart/form-data"
        >
            <div v-for="item in formInput" :key="item.title">
                <label for="item.title">{{item.title}}</label>
                <input 
                required 
                :disabled="inputDisabled" 
                :type="item.type" 
                :name="item.name" 
                :id="item.id" 
                v-model="item.value"
                v-if="item.id!=='email'"
                >
                <input 
                disabled 
                :type="item.type" 
                :name="item.name" 
                :id="item.id" 
                v-model="item.value"
                v-if="item.id==='email'"
                >
            </div>
            <!-- 更新密碼 -->
            <div>
                <label for="password">密碼</label>
                <input :disabled="inputDisabled" type="text" id="password" ref="mem_psw" v-model="oldPassword">
            </div>
            <!-- <div>
                <label for="password1">新密碼</label>
                <input :disabled="inputDisabled" type="password" id="password1" ref="mem_password1" v-model="newPassword">
            </div>
            <div>
                <label for="password2">再次密碼</label>
                <input :disabled="inputDisabled" type="password" id="password2" ref="mem_password2" v-model="ConfirmNewPassword">
            </div> -->
        </form>
        <div class="photo-area">
            <form action="" method="post" enctype="multipart/form-data">
                <label for="uploadPic">
                    <div id="myimg"><img src="../../../assets/image/about/member.jpg" alt=""></div>
                </label>
                <input
                    :disabled="inputDisabled"
                    type="file"
                    accept="image/gif, image/jpeg, image/png"
                    name="uploadPic"
                    id="uploadPic"
                />
            </form>
            <p class="memLevel">{{ memLevel }}</p>
            <div class="btn-area">
                <!-- <button
                    class="btn-lightbox"
                    v-show="!inputDisabled"
                    @click="changeInfo()"
                >
                    取消
                </button> -->
                <button class="btn-lightbox" @click="changeInfo()">
                    {{ inputDisabled ? "編輯" : "完成" }}
                </button>
            </div>
        </div>
    </main>
</template>
<script>
import { BASE_URL } from "@/assets/js/commom.js";
export default {
    data() {
        return {
            inputDisabled: true,
            formInput: [
                {
                    title: "姓名",
                    type: "text",
                    name: "mem_name",
                    id: "username",
                },
                {
                    title: "電話",
                    type: "tel",
                    name: "mem_phone",
                    id: "phone",
                },
                {
                    title: "地址",
                    type: "address",
                    name: "mem_address",
                    id: "address",
                },
                {
                    title: "E-mail",
                    type: "email",
                    name: "mem_email",
                    id: "email",
                },
            ],
            memLevel: "",
            result: [],
            userId: null,
            oldPassword: "",
            newPassword: "",
            ConfirmNewPassword: "",
        };
    },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            await this.$store.dispatch("getUserId");
            this.userId = this.$store.getters["userId"];
            // alert(this.userId);

            if (this.userId) {
                fetch(`${BASE_URL}getMemberInfo.php`, {
                    method: "POST",
                    body: JSON.stringify({
                        userId: this.userId,
                    }),
                })
                    .then((res) => res.json())
                    .then((json) => {
                        console.log(json);

                    this.result = json;
    
                    this.formInput[0].value = json[0].mem_name
                    this.formInput[1].value = json[0].mem_phone
                    this.formInput[2].value = json[0].mem_address
                    this.formInput[3].value = json[0].mem_email
                    this.memLevel=json[0].mem_level
                })
            }
        },
        saveData(){
            const payload={
                mem_name:this.formInput[0].value,
                mem_phone:this.formInput[1].value,
                mem_address:this.formInput[2].value,
                mem_email:this.formInput[3].value,
                // mem_psw:this.password1
            }
            fetch(`${BASE_URL}updateMemberInfo.php`, {
                method:'POST', 
                body: new URLSearchParams(payload),
            }).then((res)=> res.json()).then((res)=> console.log(res))
        },
        // 舊密碼要跟資料庫的原始密碼一樣，新密碼跟再次更新密碼要做驗證，全部打完送ajax去驗證如果正確再傳回資料庫跟渲染畫面
        changePsw() {},
        changeInfo() {
            this.inputDisabled = !this.inputDisabled;
            if (this.inputDisabled == true) {
                this.saveData();
            }
        },
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@media screen and (max-width:767px){
    
    .memberinfo {
        padding: 2px;
        width: 90%;
        font-size: 12px;
        div {
            font-size: 12px;
            margin: 2px 0;
            label {
                font-size: 12px;
                margin-right: 2px;
            }
            input {
                width: 60%;
                outline: none;
                background-color: map-get($color, "dark_sub");
                color: #fff;
            }
        }
    }
    .photo-area {
        padding: 5px;
        width: 20%;
        // form {
            
        // }
        .memLevel {
            padding: 3px 0;
            color: #fff;

        }
        .btn-area {
            display: flex;
            button {
                font-size: 12px;
                padding: 5px ;
                margin: 0 2px;
            }
        }
        #myimg {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        border: 1px solid map-get($color, primary);
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    }
    
}
.title {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    line-height: 50px;
    border-bottom: 2px solid map-get($color, primary);
    font-family: "Cube11";
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
            font-size: 20px;
        }
        .btn-area {
            display: flex;
            button {
                margin: 0 5px;
            }
        }
    }
    #myimg {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 50%;
        border: 2px solid map-get($color, primary);
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
}
</style>
