<template>
  <div class="container home">
    <div class="row">
      <div class="col-4 Options">
        <div class="categories">
          <b>Filter By:</b>
          <a
            v-on:click="filterBy(category)"
            v-for="category in categories"
            v-bind:key="category"
            >{{ category }}</a
          >
        </div>
        <div class="further-options">
          <b>Subscribe:</b>
          <a v-on:click="subscribeRSS()">RSS</a>
          <a v-on:click="subscribeEmail()">Email</a>
        </div>
      </div>
      <div class="col-8">
        <h1>Status message title</h1>
        <div class="">
          <Message v-for="message in messages" v-bind:key="message"></Message>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "@/components/Message.vue";

export default {
  name: "Home",
  components: {
    Message,
  },
  data() {
    return {
      messages: [1, 2, 3],
      categories: [1, 2],
    };
  },
  mounted() {},
  methods: {
    filterBy(category) {
      console.log(category);
    },
    subscribeRSS() {},
    subscribeEmail() {},
  },
};
</script>

<style lang="scss">
.Options {
  text-align: left;
  a {
    display: block;
    color: #0062cc;
  }
  .categories,
  .further-options {
    margin-bottom: 20px;
  }
}
</style>