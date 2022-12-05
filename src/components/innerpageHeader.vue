<template>
    <router-link to="/">
        <div class="innerpageHeader">
            <div class="title">TIMEVOLTS</div>
            <div class="icon"><img src="Group.png" alt=""></div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "innerpageHeader",
}
</script>
<style lang="scss" scoped>
    div.innerpageHeader{
        background-image: url("/public/Union.png");
        background-repeat: no-repeat;
        background-position: center bottom;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .title{
            font-size: 23px;
            letter-spacing: 4%;
            font-weight: bold;
            color: #ffe1b5;
            margin: 5px 0;
        }
        .icon{
            margin-bottom: 5px;
        }
    }
    
</style>