<template>
    <h4 class="h4">行程評論</h4>
    <comments  v-for="comment in visibleComments" :key="comment.id">
        <div class="wrap">
            <div class="left">
                <div class="usercomment">
                    <h6 class="user">{{comment.user}}</h6>
                    <p class="comment">{{comment.comment}}</p>
                </div>
                <div class="stars">{{comment.stars}}</div>
            </div>
            <div class="right">
                <input type="button" value="檢舉" @click="report">
                <p class="date">{{comment.date}}</p>
            </div>
        </div>
    </comments>
    <show-more-comment
      :trueOrFalse="distinguishTrueFalse"
      @show-more="AddvisibleInformation"
   ></show-more-comment>
</template>

<script>
import comments from "@/components/itineraryPeriod/comments.vue";
import showMoreComment from "@/components/itineraryPeriod/showMoreComment.vue"

export default {
    components:{
        comments,
        showMoreComment
    },
    data(){
        return{
            comments: [
                {
                    user: "王曉明",
                    comment: "行程很有趣，希望有機會再來體驗，極度推薦。",
                    stars: "*****",
                    date: "2022-11-28"
                },
                {
                    user: "張小美",
                    comment: "緊張刺激的行程，搭配多元的選擇，及各種旅行商品和道具，非常適合各年齡層的人來體驗。",
                    stars: "*****",
                    date: "2022-11-24"
                },
                {
                    user: "林曉華",
                    comment: "時光機穿梭很緊張，尼斯湖風景優美，氣候宜人，想要尋找尼斯湖水怪的人可以來參加哦。",
                    stars: "****",
                    date: "2022-10-30"
                },
                {
                    user: "張大保",
                    comment: "尼斯湖水怪好可愛，旅行的嫁個稍貴，希望能有多點特價。",
                    stars: "****",
                    date: "2022-10-29"
                },
                {
                    user: "巫小弟",
                    comment: "各種旅行商品和道具，尼斯湖風景優美，氣候宜人，希望有機會再來體驗，極度推薦",
                    stars: "*****",
                    date: "2022-11-15"
                },
                {
                    user: "朱大哥",
                    comment: "我不知道要說什麼，希望大家可以如期完成團專",
                    stars: "**",
                    date: "2022-11-08"
                },
                {
                    user: "許巴宰",
                    comment: "別混了，都來給我真寫團專哦。",
                    stars: "*",
                    date: "2022-11-11"
                },
            ],
            commentsVisible: 3,
        };
    },
    computed:{
        visibleComments() {
            return this.comments.slice(0, this.commentsVisible);
        },
        distinguishTrueFalse() {
            return this.commentsVisible !== comments.length ? true : false;
        },
    },
    methods:{
        report(){
            alert('檢舉成功，將有人進行審核');
        },
        AddvisibleInformation() {
            this.commentsVisible += 2;
        },
    }
}

</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/layout/rwd.scss";


h4 {
    font-size: 22px;
    line-height: 26.4px;
    letter-spacing: 1.1px;
    color: #fff;
    width: 1000px;
    margin: 20px auto;
    text-align: center;
    
}
.wrap{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    color: #fff;
    margin: auto;
    width: 1000px;
}
.left{
    width: 85%;
    margin: 10px;
    padding: 10px;
}
.user{
    width: 100px;
    height: 50px;
}
.comment{
    text-align: left;
    line-height: 1.2;
}
.right {
    width: 15%;
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.usercomment{
    display: flex;
}
input{
    width: 50px;
    height: 26px;
}
.date{
    height: 10px;
}
@include m(){
    h4{
        width: 100%;
    }
    .wrap{
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
        height: 130px;
        padding: 10px;
    }
    .left{
        width: 100%;
        height: 110px;
        padding: 0;
    }
    .right{
        width: 100%;
        height: 20px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: end;
        align-self: center;
        padding: 0;
        margin: 0;
    }
    .date{
        margin-right: 35%;
    }
    .usercomment{
       width: 100%;
    }
    .user{
        width: 15%;
    }
    .comment{
        width: 85%;
    }
}
</style>