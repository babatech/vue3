<template>
  <div class="container home">
    <div class="row">
      <div class="col-4">

      </div>
      <div class="col-8">
        <h1>Status message title</h1>
        <div class="">
          <Message v-for="message in messages" v-bind:key="message"></Message>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Message from '@/components/Message.vue'

export default {
  name: 'Home',
  components: {
    Message
  },
  data(){
    return {
      messages: [1,2,3]
    }
  }
}
</script>
