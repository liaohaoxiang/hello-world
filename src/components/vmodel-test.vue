<template>
  <div>
    <input type="text" :value="value" v-on="inputEvent">
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  data(){
    return {
      inputEvent: {
        input: (e) => this.$emit('input', e.target.value)
      }
    }
  }
}
</script>

<style>

</style>