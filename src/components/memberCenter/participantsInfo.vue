<template>
    <div
        v-for="participants in participantsInfo"
        :key="participants.participant_name"
        class="wrap"
    >
        <div class="name">
            {{ participants.name }}
        </div>
        <div class="email">{{ participants.email }}</div>
        <div class="mobilephone">{{ participants.phone }}</div>
    </div>
</template>
<script>
import { BASE_URL } from "@/assets/js/commom";

export default {
    name: "participantsInfo",
    data() {
        return {
            // participantsInfo: [
            //     {
            //         participant_name: "",
            //         participant_email: "",
            //         participant_phone: "",
            //     },
            // ],
            participantsInfo: [],
        };
    },
    created() {
        this.getData();
    },

    methods: {
        getData() {
            fetch(`${BASE_URL}/getMemberParticipatesInfo.php`)
                .then((res) => res.json())
                .then((data) => {
                    // this.result = data;
                    // console.log(this.result);
                    // console.log(this.result[0].participant_name);
                    // this.participant_name = data[0].participant_name;
                    // this.participant_email = data[0].participant_email;
                    // this.participant_phone = data[0].participant_phone;
                    const qqs = [];
                    for (const key in data) {
                        const qq = {
                            name: data[key].participant_name,
                            email: data[key].participant_email,
                            phone: data[key].participant_phone,
                        };
                        qqs.push(qq);
                    }
                    this.participantsInfo = qqs;
                });
        },
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 5px;
    text-align: center;
    border-bottom: 1px dashed map-get($color, primary);
}
.name {
    width: 33%;
}
.email {
    width: 33%;
}

.mobilephone {
    width: 33%;
}
</style>
