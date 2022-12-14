
import { reactive, ref } from "vue";
export default {
    name: "mainTheme",
    setup() {
        //取得時間
        let nowTime = reactive({
            data: ""
        })
        let myDate = new Date();
        function setTime(myDate) {
            const year = myDate.getFullYear();
            const month = myDate.getMonth() + 1 < 10 ? "0" + (myDate.getMonth() + 1) : (myDate.getMonth() + 1);
            const date = myDate.getDate() < 10 ? "0" + (myDate.getDate()) : myDate.getDate();
            const h = myDate.getHours();
            const m = myDate.getMinutes() < 10 ? "0" + myDate.getMinutes() : myDate.getMinutes();
            const s = myDate.getSeconds() < 10 ? "0" + myDate.getSeconds() : myDate.getSeconds();
            const time = h + ":" + m + ":" + s;
            const day = year + "-" + month + "-" + date;

            nowTime.data = day + ' ' + time;
        }
        function nowTimes() {
            setTime(myDate);
            setInterval(() => {
                myDate = new Date();
                setTime(myDate)
            }, 1000)
        }
        nowTimes()
        return {
            nowTime,
        }
    }
}
