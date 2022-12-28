<template>
    <all-header />
    <innerpageHeader></innerpageHeader>
    <div class="container">
        <the-heading heading="關於我們" subheading="About us"></the-heading>

        <div class="about">
            <div class="about-title">
                <img src="@/assets/image/about/4lighting.svg" />
                <h2>組織介紹</h2>
                <img src="@/assets/image/about/4lighting.svg" />
            </div>
            <div class="about-content">
                <div class="about-pic">
                    <img src="@/assets/image/about/member.jpg" alt="" />
                </div>
                <p class="content">
                    在現代科學的輔助下，時萬伏特讓時光旅行不再只是空想，探索人類的歷史這個不可能實現的想法，我們現在讓不可能成為可能!!只要是過去發生的年代我們都可以進行穿越，並且在時空管理局的縝密規範之下，我們誠摯地邀請您一同成為遨遊歷史的其中一員!
                </p>
            </div>
        </div>

        <div class="about">
            <div class="about-title">
                <img src="@/assets/image/about/4lighting.svg" />
                <h2>機型介紹</h2>
                <img src="@/assets/image/about/4lighting.svg" />
            </div>
            <div class="about-content reverse">
                <div class="content">
                    <p>
                        我們研發出一種新型的技術，利用電流作為驅動導入我們的機器之中，我們製造電流的方式是利用皮卡丘電擊而產生，這同時也是我們品牌的發想概念，請放心，此種方式對您的身體沒有任何損害，過程中您不會感覺到任何疼痛。當皮卡丘的尾巴接觸您身體的當下，您已經在目的地準備開始您宏偉且史詩的旅程了。說而言不如起而行，再多的文字也比不上親身體驗過來得刻骨銘心，馬上報名我們的行程來體驗看看吧!
                    </p>
                    <router-link to="/experience"
                        ><button class="btn-primary">
                            我要體驗
                        </button></router-link
                    >
                </div>
                <div class="about-pic reverse1">
                    <img
                        class="machine"
                        src="@/assets/image/about/timemachine.png"
                        alt=""
                    />
                </div>
            </div>
        </div>

        <div class="about">
            <div class="about-title">
                <img src="@/assets/image/about/4lighting.svg" />
                <h2>會員制度</h2>
                <img src="@/assets/image/about/4lighting.svg" />
            </div>
            <div class="about-content">
                <div class="member-list">
                    <div class="member-list-title">
                        <img src="@/assets/image/about/face22.svg" />
                        <h4>普通會員</h4>
                    </div>
                    <div class="member-list-intro">
                        <ul>
                            <li>註冊即可獲得</li>
                        </ul>
                    </div>
                </div>
                <div class="member-list">
                    <div class="member-list-title">
                        <img src="@/assets/image/about/star22.svg" />
                        <h4>白金會員</h4>
                    </div>
                    <div class="member-list-intro">
                        <ul>
                            <li>穿越次數達3次</li>
                            <li>累積消費價格達$20000</li>
                            <li>搶先得知新上架行程</li>
                            <li>行程購買9折</li>
                        </ul>
                    </div>
                </div>
                <div class="member-list">
                    <div class="member-list-title">
                        <img src="@/assets/image/about/diamond22.svg" />
                        <h4>鑽石會員</h4>
                    </div>
                    <div class="member-list-intro">
                        <ul>
                            <li>穿越次數達10次</li>
                            <li>累積消費價格達$100000</li>
                            <li>搶先得知新上架行程</li>
                            <li>行程購買8折</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <pageTop />
    <all-footer />
</template>

<script>
export default {
    name: "AboutView",
    data() {
        return {
            cardOne: "start",
        };
    },
};
</script>

<style scoped lang="scss">
@import "@/assets/css/utils/variables";

.about {
    width: 80%;
    margin: 50px auto;
    border: 1px solid map-get($color, primary);
    background-color: map-get($color, dark_sub);
    color: map-get($color, primary);

    .about-title {
        display: flex;
        border-bottom: 1px solid map-get($color, primary);
        justify-content: center;
        padding: 10px;

        img {
            width: 15%;
        }
    }

    .about-content {
        display: flex;
        justify-content: space-evenly;

        .about-pic {
            width: 50%;
            margin: auto;
            padding: 10px;

            img {
                width: 100%;
                vertical-align: baseline;
            }

            .machine {
                animation: Move 3s infinite;
            }
        }

        .member-list {
            width: 33.33%;
            margin: 10px;
            padding: 20px;

            .member-list-title {
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 5px;

                img {
                    width: 10%;
                    margin-top:5px ;
                    margin-right: 10px;
                }

                h4 {
                    margin: auto 0;
                }
            }

            .member-list-intro {
                width: 80%;
                background-color: map-get($color, primary);
                color: map-get($color, dark);
                padding: 10px 30px;
                height: 200px;
                position: relative;

                li {
                    list-style: square;
                    line-height: 2;
                    letter-spacing: 1px;
                }
            }
        }
    }

    @keyframes Move {
        0% {
            transform: translate(0, 0);
        }

        50% {
            transform: translate(0, 20px);
        }

        100% {
            transform: translate(0, 0);
        }
    }

    .content {
        width: 50%;
        margin: 10px;
        font-size: 17px;
        line-height: 1.5;
        letter-spacing: 1px;
        align-self: center;
        text-indent: 2rem;

        .btn-primary {
            margin: 30px auto;
        }
    }
}

@media screen and (max-width: 768px) {
    .about {
        width: 90%;

        .about-title {
            img {
                width: 20%;
            }
        }

        .about-content {
            flex-direction: column;

            .about-pic {
                width: 90%;
            }

            .content {
                width: 90%;
            }

            .member-list {
                width: 70%;
                margin: auto;

                .member-list-title {
                    img {
                        width: 15%;
                    }

                    h4 {
                        font-size: 17px;
                    }
                }

                .member-list-intro {
                    height: 150px;
                }
            }
        }
    }

    .about-content.reverse {
        flex-direction: column-reverse;
    }
}
</style>
