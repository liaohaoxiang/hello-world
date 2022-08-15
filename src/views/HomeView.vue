<template>
  <div class="home">
    <div>
      <input type="text" v-model="msg" />
      <input type="text" v-model="info.name" />
    </div>
    <div>
      <Vmodel v-model="parentMsg" />
    </div>
    <div @click.self="handleClick">
      <button type="button">+</button>
    </div>
    <div class="vuex-container">
      <h2>TodoList: {{ getToDoListCount }}</h2>
      <div>
        <input type="text" v-model="inputValue" />
        <button @click="handleTodoIncrement">+</button>
        <input type="checkbox" v-model="isOpenFilter" />
      </div>
      <p class="err-msg" v-if="commitErrMsg">{{ commitErrMsg }}</p>
      <ul>
        <li v-for="(item, index) in todoList" :key="item.id">
          {{ item.text }} - {{ item.done ? '已完成' : '未完成' }}
          <span>
            <button v-if="!item.done" @click="handleTodoResolve(item.id)">
              解决
            </button>
            <button @click="handleTodoRemove(index)">-</button>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Vue from 'vue';
import Vmodel from '@/components/vmodel-test.vue';

export default Vue.extend({
  name: 'HomeView',
  components: {
    Vmodel,
  },
  data() {
    return {
      input: '',
      info: {
        name: 'neo',
      },
      parentMsg: '',
      inputValue: '',
      commitErrMsg: '',
      isOpenFilter: false,
    };
  },
  computed: {
    ...mapState({
      todoList: (state) => state.todoList,
    }),
    ...mapGetters(['getDoneToDoList', 'getToDoListCount', 'getCount']),
    msg: {
      get() {
        return this.input;
      },
      set(val) {
        this.input = val;
      },
    },
  },
  watch: {
    info: {
      handler(oldVal, val) {
        console.log('watch info', oldVal, val);
      },
      deep: true,
    },
  },
  methods: {
    handleClick(e) {
      console.log(e.target);
      console.log(e.currentTarget);
    },
    handleTodoIncrement() {
      if (this.inputValue !== '') {
        this.commitErrMsg = '';
        this.$store.commit('addToDoList', {
          todoItem: {
            id: this.getCount + 1,
            text: this.inputValue,
            done: false,
          },
        });
        this.inputValue = '';
      } else {
        this.commitErrMsg = '请输入TODO的事件';
        this.inputValue = '';
      }
    },
    handleTodoRemove(index) {
      console.log('index', index);
      this.$store.commit('removeToDoList', {
        index,
      });
    },
    handleTodoResolve(id) {
      console.log('id', id);
      this.$store.commit('resolveToDo', {
        id,
      });
    },
  },
});
</script>

<style>
.vuex-container {
  width: 30%;
  margin: 0 auto;
}
.err-msg {
  background-color: brown;
  color: azure;
}
</style>
