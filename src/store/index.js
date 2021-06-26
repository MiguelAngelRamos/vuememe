import { createStore } from 'vuex'

export default createStore({
  state: {
    title: "The Memes",
    memes: []
  },
  mutations: {
    /* Encargado de actualizar el State */
    /* Payload son los nuevos datos */
    actualizarMemes(state, payload) {
      state.memes = payload;
    }

  },
  actions: {
    /* Podemos hacer llamdos a Apis */
    async obtenerMemes({commit}, payload) {
      try {
        const data = await fetch('https://api.imgflip.com/get_memes');
        const getMemes = await data.json();

        if(!payload) {
          console.log("Traemos todos los memes");
          commit('actualizarMemes', getMemes);
        } else {
          const resultTemp = [];
          // Aqui es donde le damos el tamaño al arreglo
          getMemes.data.memes.ForEach((meme, index) => {
            if( index < payload ) {
              resultTemp.push(meme)
            }
          });
          commit()
        }

      } catch (error) {
        console.log(error);
      }
    }
  },

  modules: {
  }
})
