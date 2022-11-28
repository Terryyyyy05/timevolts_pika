<template>
  <div class="product_test">
    <h1>Test</h1>
    <hr />
    <h1>這是h1 title</h1>
    <h2>這是h2 title</h2>
    <h3>這是h3 title</h3>
    <h4>這是h4 title</h4>
    <h5>這是h5 title</h5>
    <hr />
    <p class="p_xl">p_xl 安安你好我很好大家好 hfl hfdslkhjl sdhjlfkh hdfsl</p>
    <p class="p_lg">p_lg 安安你好我很好大家好 hfl hfdslkhjl sdhjlfkh hdfsl</p>
    <p class="p_md">p_md 安安你好我很好大家好 hfl hfdslkhjl sdhjlfkh hdfsl</p>
    <hr />
    <h3>bgc_test</h3>
    <div class="bgc_test container">
      <div class="bg_primary">bg_primary</div>
      <div class="bg_primary_sub">bg_primary_sub</div>
      <div class="bg_accent">bg_accent</div>
      <div class="bg_accent_sub">bg_accent_sub</div>
      <div class="bg_accent_reverse">bg_accent_reverse</div>
    </div>
    <div class="bgc_test container">
      <div class="bg_body_dark">bg_body_dark</div>
      <div class="bg_dark">bg_dark</div>
      <div class="bg_dark_sub">bg_dark_sub</div>
      <div class="bg_muted ">bg_muted </div>
      <div class="bg_light">bg_light</div>
      <div class="bg_light_sub">bg_light_sub</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1,
h2,
h3,
h4,
h5,
p {
  border: 1px solid red;
  width: fit-content;
}

.container{
  border: 1px solid blue;
}

.bgc_test {
  display: flex;
  gap: 30px;
  margin-bottom: 50px;
  div {
    aspect-ratio: 1/1;
    width: 150px;
  }
}
</style>
