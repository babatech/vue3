<template>
  <div class="admin">
    <div class="row">
      <div class="col-12">
        <h1>List of entries in database</h1>
        <div class="">
          <a class="btn-custom" v-on:click="addEntry()">Add a new entry</a>
          <div>
            <div v-if="messages.length > 0">
              <Message
                v-for="message in messages"
                v-bind:key="message"
                v-bind:message="message"
                v-bind:admin="true"
                v-on:add-update="addUpdate($event)"
                v-on:edit-message="editEntry($event)"
                v-on:reload-messages="getMessages()"
              ></Message>
            </div>
          </div>
          <div v-if="messages === null">loading...</div>
        </div>
      </div>
    </div>
  </div>

  <div class="model-box model-update" v-if="addUpdateTo">
    <div class="model-body text-left">
      <div class="title">
        <h5>Add an update</h5>
      </div>
      <div class="row ">
        <div class="col-3">
          <label>Status</label>
        </div>
        <div class="col-9">
          <select class="form-control"  v-model="messageUpdate.status" >
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Published</option>
          </select>
        </div>
        <div class="col-3">
          <label>Timestamp</label>
        </div>
        <div class="col-9">
          <input type="datetime" class="form-control"  v-model="messageUpdate.date" />
        </div>
        <div class="col-3">
          <label>Text</label>
        </div>
        <div class="col-9">
          <textarea class="form-control"  v-model="messageUpdate.description"></textarea>
        </div>
      </div>
      <div class="text-right">
        <a class="btn-custom btn-cancel" v-on:click="addUpdateTo=null">Cancel</a>
        <a class="btn-custom" v-on:click="onAddUpdate()">Submit</a>
      </div>
    </div>
  </div>

  <div class="model-box model-edit" v-show="editMessage">
    <div class="model-body text-left">
      <div class="title">
        <h5>{{editMessage !==true ? 'Edit' : 'Add a new'}} entry</h5>
      </div>
      <div class="row ">
        <div class="col-3">
          <label>Category</label>
        </div>
        <div class="col-9">
          <select class="form-control"  v-model="message.category" >
            <option v-for="category in categories" v-bind:key="category" v-bind:value="category.id">{{category.name}}</option>
          </select>
        </div>
        <div class="col-3">
          <label>Status</label>
        </div>
        <div class="col-9">
          <select class="form-control"  v-model="message.status" >
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Published</option>
          </select>
        </div>
        <div class="col-3">
          <label>Publish date:</label>
        </div>
        <div class="col-9">
          <input type="text" class="form-control"  v-model="message.publishDate"  />
        </div>
        <div class="col-3">
          <label>Title:</label>
        </div>
        <div class="col-9">
          <input type="text" class="form-control" placeholder="title text" v-model="message.title" />
        </div>
        <div class="col-3">
          <label>Start:</label>
        </div>
        <div class="col-9">
          <input type="text" class="form-control"  v-model="message.startDate"/>
        </div>
        <div class="col-3">
          <label>End:</label>
        </div>
        <div class="col-9">
          <input type="text" class="form-control"  v-model="message.endDate"/>
        </div>
        <div class="col-3">
          <label>Template:</label>
        </div>
        <div class="col-9">
          <select class="form-control">
            <option value="1">Server down</option>
            <option value="PUBLISHED">maintenance mode</option>
          </select>
        </div>
        <div class="col-3">
          <label>Text</label>
        </div>
        <div class="col-9">
          <textarea  class="form-control" v-model="message.description"></textarea>
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
      editMessage: null,
      message: {
        startDate: null,
        endDate: null,
        publishDate: null,
        expectedEndDate: null,
        title: "",
        description: "",
        status: null,
        category: null,
        update: []
      },
      messageUpdate: {
        status: '',
        date: '',
        description: ''
      }
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
    },
    addEntry() {
      this.editMessage = true
    },
    editEntry(message){
      this.message = message;
      this.editMessage = message;
    },
    onAddUpdate() {
      if (this.addUpdateTo) {
        this.addUpdateTo.updates.push(this.messageUpdate)
        messageService.updateMessage(this.addUpdateTo.id,this.addUpdateTo).then(res =>{
          console.log(res);
          this.messageUpdate.status = ''
          this.messageUpdate.description = ''
          this.messageUpdate.date = ''
          this.getMessages()
          this.addUpdateTo = null;
        })
      }
    }
  }
}
</script>

<style lang="scss">

.model-box {
  position: fixed;
  background-color: rgba(0,0,0,.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  > .model-body {
    width: 768px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: #ffffff;
    max-height: 80vh;
    overflow: auto;
  }
  label{
    margin: 15px 0;
  }
  .title{
    margin-bottom: 20px;
  }
}
</style>