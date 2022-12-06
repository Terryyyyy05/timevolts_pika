<template>
    <div class="innerpageHeader">
        <div class="title"><router-link to="/Home">TIMEVOLTS</router-link></div>
        <div class="icon"><router-link to="/Home"><img src="Group.png" alt=""></router-link></div>
    </div>
</template>

<script>
export default {
    name: "innerpageHeader",
}
</script>
<style lang="scss" scoped>
    div.innerpageHeader{
        pointer-events: none;
        background-image: url("/public/Union.png");
        background-repeat: no-repeat;
        background-position: center 100%;
        background-size: contain;
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
            pointer-events: auto;
            font-size: 16px;
            letter-spacing: 1.5%;
            font-weight: bold;
            color: #ffe1b5;
            margin: 5px 0;
            a{
                text-decoration: none;
                color: #ffe1b5;
            }
        }
        .icon{
            pointer-events: auto;
            margin-bottom: 10px;
            width: 40px;
            object-fit: cover;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    @media screen and (min-width: 768px) {
        div.innerpageHeader{
        .title{
            font-size: 23px;
            letter-spacing: 4%;
            margin: 5px 0;
        }
        .icon{
            width: 66px;
            object-fit: cover;
        }
    }
    }
</style>