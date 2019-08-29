<template>
  <nuxt-link v-bind:to="'/scorts/' + scort.name" >

    <b-card
          :title="scort.name+', '+scort.age"
          :img-src="scort.photoUrl"

          img-alt="Image"
          img-top
          class="img-thumbnail shadow-sm"
        >
          <b-card-text>
            <b-badge variant="info" v-for="value in scort.tags" v-bind:key="value.id">
              {{ value }}
            </b-badge>
          </b-card-text>
        </b-card>
  </nuxt-link>

</template>

<script>
    export default {
        data() {
            return {
                scort: {
                    url: '/scorts/Bulma',
                    name: 'Bulma',
                    phone: '51 938561779',
                    photoUrl: require('~/assets/bulma_bunny.png'),
                    age: '18',
                    tags: [
                        "php",
                        "laravel",
                        "Python",
                        'putas'
                    ],
                }
            }
        }
    }
</script>
<style scoped>
    .badge {
        margin-inline: 1px;
    }

    .card-body {
        padding: .2rem;
    }

    .card .card-title,
    .card-text {
        text-align: left;
        color: #000;
    }

    h4 {
        font-size: 1em;
        margin-bottom: .25rem;
        font-weight: 600;
    }

    span {
        font-size: .6em;
        font-size-adjust: initial;
        font-stretch: extra-condensed;
    }
</style>
