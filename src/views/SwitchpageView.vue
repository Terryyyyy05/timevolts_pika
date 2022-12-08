<template>
    <main>
        <div class="wrap">
        <div class="front-end"><router-link to="/home"><h2>前台</h2></router-link></div>
        <div class="back-end"><router-link to="/managelogin"><h2>後台</h2></router-link></div>
    </div>
    <p>本網站為緯育TibaMe_前端設計工程師班第79期學員專題成果作品，本平台僅供學習、展示之用。若有抵觸有關著作權，或有第三人主張侵害智慧財產權等情事，均由學員負法律上責任，緯育公司概不負責。若有侵權疑慮，您可以私訊<a href="https://www.facebook.com/TibaMe/">[緯育TibaMe]</a>，後續會由專人協助處理。</p>
    </main>
</template>     

<script>
export default {
}
</script>
<style scoped lang="scss">
main {
    height: 100vh;
    position: relative;

    .wrap {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 100%;

        .front-end, .back-end {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            border: 5px solid #fec570;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            position: relative;
            &:hover {
                text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
                box-shadow: inset 0 0 20px #fec570, 0 0 20px #fec570;
            }

            &::after {
                position: absolute;
                content: "";
                top: -10px;
                left: -10px;
                right: -10px;
                bottom: -10px;
                transition:
                    .5s outline-color,
                    .5s outline,
                    .5s transform;
                transition-timing-function: cubic-bezier(0.2, .8, 0.25, .8);
                transform: scale3d(1.3, 1.3, 0.7);
                outline: 0px solid;
                outline-color: rgba(255, 255, 255, .05);
                outline-offset: -10px;
                border-radius: 50%;
            }

            &:hover::after {
                top: 10px;
                left: 10px;
                right: 10px;
                bottom: 10px;
                transform: scale(1);
                outline: 1px solid;
                outline-color: rgba(255, 255, 255, 0.6);
                outline-offset: 10px;
                border-radius: 50%;
                transition: .5s outline-offset cubic-bezier(0.2, .8, 0.25, .8), .5s outline-color cubic-bezier(0.2, .8, 0.25, .8), .5s outline cubic-bezier(0.2, .8, 0.25, .8);
            }
            a {
                text-decoration: none;
                color: #fab042;
            }
        }
        
        }
        p{  
            font-size: 16px;
            color: #fffaec;
            position: absolute;
            bottom: 2%;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 80%;
            height: fit-content;
            text-align: center;
            line-height: 1.5;
            a{
                color: #fab042;
                text-decoration: none;
            }
        }
    }
</style>