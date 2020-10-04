<template>
  <div class="card message">
    <div class="card-body body text-left">
      <div>
        <b class="">Case ID: {{ message.id }}</b>
        <span class="float-right">{{ message.publishDate }}</span>
      </div>
      <div class="card-title">
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
        <div class="text-right">
          <a class="btn-custom">Edit</a>
          <a class="btn-custom btn-delete">Delete</a>
        </div>
        <div class="text-right">
          <a class="btn-custom">Add an update</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: ["message", "admin"],
  mounted() {},
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
.btn-custom {
  font-family: 'Montserrat-SemiBold';
  display: inline-block;
  padding: 15px;
  border: 1px solid #007bff;
  color: #007bff;
  font-size: 1.3em;
  margin: 10px;
  min-width: 150px;
  text-align: center;
  &.btn-delete {
    border: 1px solid #ff0033;
    color: #fff;
    background-color: #ff0033;
  }
}
</style>