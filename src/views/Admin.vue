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
                v-on:add-update="addUpdate($event)"
                v-on:edit-message="addUpdate($event)"
                v-on:reload-messages="getMessages()"
              ></Message>
            </div>
          </div>
          <div v-if="messages === null">loading...</div>
        </div>
      </div>
    </div>
  </div>

  <div class="model-box model-update" v-show="addUpdateTo">
    <div class="model-body">
      <div class="title">
        <h5>Add an update</h5>
      </div>
      <div class="row text-left">
        <div class="col-2">
          <label>Status</label>
        </div>
        <div class="col-10">
          <input type="text" class="form-control" />
        </div>
        <div class="col-2">
          <label>Timestamp</label>
        </div>
        <div class="col-10">
          <input type="text" class="form-control" />
        </div>
        <div class="col-2">
          <label>Text</label>
        </div>
        <div class="col-10">
          <textarea></textarea>
        </div>
      </div>
      <div class="text-right">
        <a class="btn-custom btn-cancel" v-on:click="addUpdateTo=null">Cancel</a>
        <a class="btn-custom" >Submit</a>
      </div>
    </div>
  </div>

  <div class="model-box model-edit" v-show="editMessage">
    <div class="model-body">
      <div class="title">
        <h5>Add an update</h5>
      </div>
      <div class="row text-left">
        <div class="col-2">
          <label>Status</label>
        </div>
        <div class="col-10">
          <input type="text" class="form-control" />
        </div>
        <div class="col-2">
          <label>Timestamp</label>
        </div>
        <div class="col-10">
          <input type="text" class="form-control" />
        </div>
        <div class="col-2">
          <label>Text</label>
        </div>
        <div class="col-10">
          <textarea></textarea>
        </div>
      </div>
      <div class="text-right">
        <a class="btn-custom btn-cancel" v-on:click="editMessage=null">Cancel</a>
        <a class="btn-custom" >Submit</a>
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
      addUpdateTo: null,
      editMessage: null
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

    addUpdate(message) {
      this.addUpdateTo = message;
      console.log(message)
    }
  }
}
</script>

<style lang="scss">

.model-box {
  position: fixed;
  background-color: rgba(233, 230, 230, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  > .model-body {
    width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: #ffffff;
  }
}
</style>