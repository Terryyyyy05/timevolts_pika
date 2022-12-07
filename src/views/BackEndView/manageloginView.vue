<template>
    <div class="wrap">
        <div class="title">管理員登入</div>
        <div class="accountwrap">
            <label>帳號:<input type="text"></label>   
        </div>
        <div class="pswwrap">
            <label>密碼:<input type="password"></label>  
        </div>
        <div class="btnwrap">
            <button value="登入">登入</button>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import "@/assets/css/utils/variables";

    .wrap{
        width: 300px;
        height: fit-content;
        margin: calc(50vh - 150px) auto;
        border: 2px solid map-get($color, "primary");
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        font-size: 24px;
        color: #ffe1b5;
    }
    .title, .accountwrap, .pswwrap, .btnwrap{
        width: 100%;
        height: 30px;
        padding: 10px 0;
        margin: 0 10px;
    }
    .btnwrap{
        display: flex;
        justify-content: end;
    }
    button{
        width: 20%;
        margin-right: 20px;
    }
</style>