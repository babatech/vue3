<template>
  <div class="card message">
    <div class="card-body body text-left" >
      <div>
        <b class="">Case ID: {{ message.id }}</b>
        <span class="float-right">{{ message.publishDate }}</span>
      </div>
      <div class="card-title" v-on:click="goToDetail(message.id)">
        <h5 class="font-weight-bold">{{ message.title }}</h5>
      </div>
      <div>
        <b>Start Date: </b>
        {{ message.startDate }}
      </div>
      <div class="card-text">
        <p class="description">{{ message.description }}</p>
      </div>
      <div v-if="admin">
        <h6>Updates: </h6>
        <p class="update" v-for="update in message.updates" v-bind:key="update">
          <b>Date: </b> {{ update.date }}<br>
          <b>Status: </b> {{ update.status }}<br>
          <b>update Description: </b><br>
          {{ update.description }}
        </p>
        <p v-show="message.updates.length === 0">No updates yet</p>
      </div>
      <div v-if="admin">
        <div class="text-right">
          <a class="btn-custom" v-on:click="editMessage(message)">Edit</a>
          <a class="btn-custom btn-delete" v-on:click="deleteMessage(message)"
            >Delete</a
          >
        </div>
        <div class="text-right">
          <a class="btn-custom" v-on:click="addUpdate(message)"
            >Add an update</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import messageService from "@/services/message.service";
export default {
  name: "Message",
  props: ["message", "admin"],
  data() {
    return {}
  },
  mounted() {},
  methods: {
    editMessage(message) {
      this.$emit("edit-message", message);
    },
    deleteMessage(message) {
      const conf = confirm("Are you sure to delete the message?");
      if (conf) {
        messageService.deleteMessage(message.id).then((res) => {
          console.log(res);
          this.$emit("reload-messages", message);
        });
      }
    },
    addUpdate(message) {
      this.$emit("add-update", message);
    },
    goToDetail(id){
      this.$router.push('/entry/'+id) 
    }
  },
};
</script>

<style lang="scss">
.message {
  margin-bottom: 10px;
  padding: 15px 0;
  background-color: #cecaca;
  .body {
    background-color: #fff;
  }
}
.description {
  padding-top: 30px;
}
.card-title{
  cursor: pointer;
}

</style>