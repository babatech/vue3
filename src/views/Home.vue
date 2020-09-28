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
            href="#"
            >{{ category.name }}</a
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
          <div>
            <div v-if="messages.length > 0">
              <Message
                v-for="message in messages"
                v-bind:key="message"

                v-bind:message="message"
              ></Message>
            </div>
          </div>
          <div v-if="messages === null">loading...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import messageService from "@/services/message.service";
import categoryService from "@/services/category.service";
import Message from "@/components/Message.vue";

export default {
  name: "Home",
  components: {
    Message,
  },
  data() {
    return {
      messages: [],
      categories: [],
    };
  },
  mounted() {
    messageService.getAllMessages({}).then((res) => {
      this.messages = res.data;
    });
    categoryService.getAllCategories({}).then( (res) => {
      this.categories = res.data;
    })
  },
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
  }
  .categories,
  .further-options {
    margin-bottom: 20px;
  }
}
</style>