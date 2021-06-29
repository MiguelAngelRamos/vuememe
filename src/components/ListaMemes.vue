<template>
  <h1>Listado de Memes</h1>
  <select class="mt-5 form-select" v-model="cantidadMeme">
    <option value=""> All </option>
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="20">20</option>
  </select>

  <button class="mt-2 btn btn-success" @click="llamarActionCantidad">Buscar</button>

  <div class="mt-5 col-10 offset-1 row">
    <div class="mt-2 col-4" v-for="m in memes" :key="m.id">
      <Meme :memecard="m"/>
    </div>
  
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Meme from '../components/Meme.vue';

export default {
  components: {
    Meme
  },
  data() {
    return {
      cantidadMeme: 0
    }
  },
  computed: {
    ...mapState(['memes'])
  },
  methods: {
    ...mapActions(['obtenerMemes']),
    llamarActionCantidad() {
      console.log("llamarActionCantidad")
      this.obtenerMemes(this.cantidadMeme)
    }
  },
  created() {
    /** En primera instancia traemos todos los memes */
    this.obtenerMemes();
  }
};
</script>

<style></style>
