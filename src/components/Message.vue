<template>
  <div class="message">
      <div class="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum blandit aliquam. Curabitur nec lectus eget erat scelerisque sagittis eu in lacus. Etiam placerat leo est, eu maximus mi eleifend lacinia. Sed cursus lacus eu velit volutpat feugiat. Integer molestie risus vel semper dictum. Integer vehicula lacinia sapien vel feugiat. In nec turpis purus. Cras sodales, nibh eu interdum pharetra, neque metus aliquam libero, nec porta magna tellus vel arcu. Integer ac egestas magna. Mauris mi lorem, consequat a accumsan at, sagittis eget est. In non sollicitudin nibh. Praesent id viverra mi, vel pretium turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</div>
  </div>
</template>

<script>
export default {
    name: 'Message',
    props: ['message']
}
</script>

<style lang="scss">
.message{
    margin-bottom: 10px;
    padding: 15px 0;
    background-color: #cecaca;
    .body{
        background-color: #fff;
    }
}
</style>