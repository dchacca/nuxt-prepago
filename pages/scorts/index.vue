<template>
  <div class="container">

    index scorts
    <nuxt-child/>
  </div>
</template>
<script>
    export default {
        layout: 'MyLayout',
        validate({
            params
        }) {
            // Must be a number
            return /^\d+$/.test(params.id)

        }
    }
</script>
