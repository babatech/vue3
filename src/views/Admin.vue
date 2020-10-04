<template>
  <div class="admin">
    <div class="row">
      <div class="col-12">
        <h1>List of entries in database</h1>
        <div class="">
          <div>
            <div v-if="messages.length > 0">
              <Message
                v-for="message in messages"
                v-bind:key="message"
                v-bind:message="message"
                v-bind:admin="true"
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
  name: "Admin",
  components: {
    Message,
  },
  data() {
    return {
      messages: [],
      categories: [],
    }
  },
  mounted(){
    this.getCategories();
    this.getMessages();

  },
  methods: {
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
      messageService.getAllMessages({}).then((res) => {
        this.messages = res.data;
      });
    },
  }
}
</script>

<style lang="scss">

</style>