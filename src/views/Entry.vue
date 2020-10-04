<template>
  <div>
    <div v-if="message">
      <div class="title">
        <h5>Entry details</h5>
      </div>
      <div class="row">
        <div class="col-12">
          <label>Title:</label>
          <h6>{{ message.title }}</h6>
        </div>
        <div class="col-12">
          <label>Category:</label>
          <p>{{ message.category }}</p>
        </div>
        <div class="col-12">
        </div>
        <div class="col-12">
          <label>Status</label>
          <p>{{ message.status }}</p>
        </div>
        <div class="col-12">
          <label>Publish date:</label>
          <p>{{ message.publishDate }}</p>
        </div>

        <div class="col-12">
          <label>Start:</label>
          <p>{{ message.startDate }}</p>
        </div>
        <div class="col-12">
          <label>End:</label>
          <p>{{ message.endDate }}</p>
        </div>
        <div class="col-12">
          <label>Text</label>
          <p>{{ message.description }}</p>
        </div>
      </div>
      <div class="text-right">
        <a class="btn-custom btn-cancel" v-on:click="editMessage = null"
          >Cancel</a
        >
        <a class="btn-custom" v-on:click="onAddEntry()">Submit</a>
      </div>
    </div>
  </div>
</template>

<script>
import messageService from "@/services/message.service";

export default {
    name: 'Entry',
    data(){
        return {
            message:null
        }
    },
    mounted(){
        if (this.$route.params.entry_id) {
            messageService.getMessage(this.$route.params.entry_id).then((res) => {
                this.message = res.data;
            })
        }
        console.log(this.$route.params.entry_id)
    }
}
</script>

<style lang="sass">
</style>