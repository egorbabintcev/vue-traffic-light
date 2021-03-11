import { createStore } from "vuex";

const store = createStore({
  state: {
    colors: ["red", "yellow", "green"],
    next: null,
    dir: 1,
  },

  mutations: {
    setNextColor(state, activeColor) {
      const activeIdx = state.colors.findIndex((c) => c === activeColor);
      const nextIdx = activeIdx + state.dir;
      if (nextIdx === state.colors.length || nextIdx < 0) {
        state.dir *= -1;
      }
      state.next = state.colors[activeIdx + state.dir];
    },
  },
});

export default store;
