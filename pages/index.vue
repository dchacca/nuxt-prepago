<template>
  <div class="container mt-3">
    <div>
      <b-card-group columns>
        <CardVue/>
        <b-card
          title="Card title that wraps to a new line"
          img-src="https://placekitten.com/g/400/450"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
        </b-card>

        <b-card header="Quote">
          <blockquote class="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">
              Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
        <b-card title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
          <b-card-text>This card has supporting text below as a natural lead-in to additional content.</b-card-text>
          <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
        </b-card>

        <b-card bg-variant="primary" text-variant="white">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante.</p>
            <footer>
              <small>
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </b-card>

        <b-card>
          <b-card-title>Title</b-card-title>
          <b-card-text>This card has supporting text below as a natural lead-in to additional content.</b-card-text>
          <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
        </b-card>

        <b-card img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay></b-card>

        <b-card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This card has even longer content than the first.
          </b-card-text>
          <div slot="footer">
            <small class="text-muted">Footer Text</small>
          </div>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
    import CardVue from '~/components/Card.vue'
    export default {
        layout: "MyLayout",
        components: {
            CardVue,
        },
        name: "Index"
    };
</script>

<style>
    @media (min-width: 576px) {
        .card-columns {
            -moz-column-count: 3;
            column-count: 3;
        }
    }

    @media (min-width: 800px) {
        .card-columns {
            -moz-column-count: 4;
            column-count: 4;
        }
    }

    @media (min-width: 1200px) {
        .card-columns {
            -moz-column-count: 4;
            column-count: 4;
        }
    }

    .container {
        margin: 0 auto;
        min-height: 100 vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100 px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5 px;
        padding-bottom: 15 px;
    }

    .links {
        padding-top: 15 px;
    }
</style>
