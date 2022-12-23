<template>
    <div
        v-for="participants in participantsInfo"
        :key="participants.name"
        class="wrap"
    >
        <div class="name">{{ participants.name }}</div>
        <div class="email">{{ participants.email }}</div>
        <div class="birthday">{{ participants.birthday }}</div>
        <div class="mobilephone">{{ participants.mobilephone }}</div>
        <div class="address">{{ participants.address }}</div>
    </div>
</template>
<script>
export default {
    name: "participantsInfo",
    data() {
        return {
            participantsInfo: [
                {
                    name: "aaa",
                    email: "aaa@gmail.com,",
                    birthday: "1999/01/01",
                    mobilephone: "0912345678",
                    address: "桃園市中壢區復興路48號",
                },
                {
                    name: "bbb",
                    email: "bbb@gmail.com,",
                    birthday: "1999/02/02",
                    mobilephone: "0912345678",
                    address: "桃園市中壢區復興路48號",
                },
            ],
        };
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
    width: 20%;
}
.email {
    width: 20%;
}
.birthday {
    width: 20%;
}
.mobilephone {
    width: 20%;
}
.address {
    width: 20%;
}
</style>
