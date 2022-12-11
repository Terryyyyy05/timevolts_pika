<template>
    <all-header />
    <innerpageHeader></innerpageHeader>
    <div class="container">
        <the-heading heading="會員中心" subheading="Member Center"></the-heading>
    </div>

    <div class="container main-content">
        <nav>
            <router-link to="/memberCenter/memberInfo">會員資料</router-link>
            <router-link to="/memberCenter/itineraryOrder">行程訂單</router-link>
            <router-link to="/memberCenter/productOrder">商品訂單</router-link>
            <router-link to="/memberCenter/memberCoupon">商品折價券</router-link>
            <router-link to="/memberCenter/itineraryCollection">行程收藏</router-link>
            <router-link to="/memberCenter/productCollection">商品收藏</router-link>
        </nav>
        <div class="sub-content">
            <div class="content-frame">
                <router-view/>
            </div>
        </div>
    </div>
    <all-footer />
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .container.main-content {
        display: flex;
        align-items: flex-start;
        // height: 75vh;
        outline: 1px solid red;
        nav {
            width: 20%;
            margin: 10% 10% 0 0;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-content: center;
            border: 1px solid #ffe1b5;
            a{
                font-size: 12px;
                padding: 10% 3%;
                border-bottom: 1px solid #ffe1b5;
                &:last-child{
                    border-bottom: 0;
                }
            }
        }
        .sub-content{
            padding: 20px;
            outline: 1px solid yellow;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }
    }
    @media screen and (min-width: 768px){
        .container.main-content{
            nav{
                a{
                    font-size: 20px;
                }
            }
        }
        
    }
</style>