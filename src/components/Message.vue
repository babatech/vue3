<template>
  <div class="message">
        <div class="body text-left">
            <div>
                <b class="">Case ID: {{message.id}}</b>
                <span class="text-right">{{message.publishDate}}</span>
            </div>
            <div>
                {{message.title}}
            </div>
            <div>
                <b>Start Date: </b>
                {{message.startDate}}
            </div>
            <div>
                {{message.description}}
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
</style>