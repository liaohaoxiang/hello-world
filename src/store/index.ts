import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [{ done: true, id: 1, text: '测试todo' }],
    count: 1,
  },
  getters: {
    getDoneToDoList(state) {
      return (isOpen: boolean) =>
        state.todoList.filter((item) => item.done === isOpen);
    },
    getToDoListCount(state) {
      return state.todoList.length;
    },
    getCount(state) {
      return state.count;
    },
  },
  mutations: {
    addToDoList(state, payload) {
      state.todoList.push(payload.todoItem);
      state.count += 1;
    },
    removeToDoList(state, payload) {
      state.todoList.splice(payload.index, 1);
    },
    resolveToDo(state, payload) {
      const targe = state.todoList.find((item) => item.id === payload.id);
      if (targe) {
        targe.done = true;
      }
    },
  },
  actions: {},
  modules: {},
});
