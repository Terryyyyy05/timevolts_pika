<template>
    <all-header/>
    <innerpageHeader></innerpageHeader>
    <nav>
        <router-link to="/memberCenter/memberInfo">會員資料</router-link>
        <router-link to="/memberCenter/itineraryOrder">行程訂單</router-link>
        <router-link to="/memberCenter/productOrder">商品訂單</router-link>
        <router-link to="/memberCenter/memberCoupon">商品折價券</router-link>
        <router-link to="/memberCenter/itineraryCollection">行程收藏</router-link>
        <router-link to="/memberCenter/productCollection">商品收藏</router-link>
    </nav>
    <main>
        <router-view/>
    </main>
    <all-footer/>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;

    }
</style>