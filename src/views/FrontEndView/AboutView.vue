<template>
  <div class="about">
    <h1>關於我們</h1>
    <p>About us</p>
    <button class="primary">click me</button>
    <button class="secondary">click me</button>
    <button class="lightbox">click me</button>
    <button class="disable">click me</button>

  </div>
</template>

<script>
// @ is an alias to /src

</script>

<style scope lang="scss">
@import "../../assets/css/app.scss";

h1{
	font-family: 'Cube11';
  color: antiquewhite;
}
p{
	font-family: '8bit';
}
.primary{
  @include btn-primary;
  margin: 20px;
}
.secondary{
  @include btn-secondary;
  margin: 20px;
}
.lightbox{
  @include btn-lightbox;
  margin: 20px;
}
.disable{
  @include btn-disable;
  margin: 20px;
}

</style>
