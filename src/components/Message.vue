<template>
  <div class="card message">
        <div class="card-body body text-left">
            <div>
                <b class="">Case ID: {{message.id}}</b>
                <span class="float-right">{{message.publishDate}}</span>
            </div>
            <div class="card-title">
                <h5 class="font-weight-bold">{{message.title}}</h5>
            </div>
            <div>
                <b>Start Date: </b>
                {{message.startDate}}
            </div>
            <div class="card-text">
                <p class="description">{{message.description}}</p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: ["message"],
  mounted() { }
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
.description{
    padding-top: 30px;
}
</style>