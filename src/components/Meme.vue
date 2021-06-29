<template>
  <div class="meme card" style="width: 17rem;">
    <img :src="memecard.url" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ memecard.name}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    memecard: Object
  }
};
</script>

<style scoped>
  .meme {
    border: 1px solid grey;
  }

  .meme img {
    max-height: 230px;
    max-width: 270px;
  }
</style>
