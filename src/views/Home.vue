<template>
  <div class="mt-5 container">
    <ListaMemes />
  </div>
</template>

<script>
// @ is an alias to /src

import ListaMemes from "../components/ListaMemes.vue";
export default {
  name: "Home",
  components: {
    ListaMemes,
  },
};
</script>
