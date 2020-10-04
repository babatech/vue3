<template>
  <div class="home">
    <div class="row">
      <div class="col-4 Options">
        <div class="categories mt-30">
          <b>Filter By:</b>
          <a
            v-on:click="filterBy(category)"
            v-for="category in categories"
            v-bind:key="category"
            v-bind:class="{ active: category.id === filter.category }"
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
      filter: {
        category: null,
      }
    };
  },
  mounted() {
    this.getCategories();
    this.getMessages();
  },
  methods: {
    /**
     * Event listener for category filter
     */
    filterBy(category) {
      this.filter.category = this.filter.category === category.id ? null: category.id;
      this.getMessages();
    },

    /**
     * Event listener for subscribe by RSS
     */
    subscribeRSS() {},

    /**
     * Event listener for subscribe by E-mail
     */
    subscribeEmail() {},
    buildPayload() {
      const payload = {};
      if (this.filter.category) {
        payload.category = this.filter.category;
      }

      return payload;
    },

    /**
     * Get Categories list from server
     */
    getCategories() {
      categoryService.getAllCategories({}).then((res) => {
        this.categories = res.data;
      });
    },

    /**
     * get Message list form server
     */
    getMessages() {
      const payload = this.buildPayload();

      messageService.getAllMessages(payload).then((res) => {
        this.messages = res.data;
      });
    },
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
  .categories{
    a.active{
      color: black;
    }
  }
}
.mt-30 {
  margin-top: 30px;
}
.mt-20 {
  margin-top: 20px;
}
</style>