<template>
  <h1>Listado de Memes</h1>
  <select class="mt-5 form-select" v-model="cantidadMeme">
    <option value=""> All </option>
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="20">20</option>
  </select>

  <div class="mt-5 col-10 offset-1 row">
    <div class="card" style="width: 18rem;">
      <img src="" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    
  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      cantidadMeme: 0
    }
  },
  computed: {
    ...mapState(['memes'])
  },
  methods: {
    ...mapActions(['obtenerMemes'])
  }
};
</script>

<style></style>
