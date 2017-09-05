<template>
  <div class="flip-padding-container">
    <div class="flip-container">
      <div class="flipper">
        <div class="front">
          <md-card class="card root">
            <md-layout md-column md-align="center" class="nowrap">
              <menu-item :title="option.main" />
              <menu-item :title="option.side1" />
              <menu-item :title="option.side2" />
              <menu-item :title="option.salad" />
            </md-layout>
            <div class="cost">{{option.cost}}/{{option.costWithoutMain}} uah</div>
          </md-card>
        </div>
        <div class="back">
          <md-card class="card root">
            <md-layout md-align="center" md-vertical-align="center">
              <md-button class="md-raised md-accent upload-button" @click.native="">
                Full ({{option.cost}} uah)
              </md-button>
              <md-button class="md-raised md-accent upload-button" @click.native="">
                Without main ({{option.costWithoutMain}} uah)
              </md-button>
            </md-layout>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .nowrap {
    flex-wrap: nowrap;
  }

  .card.root {
    padding: 10px;
    height: 100%;
  }

  .cost {
    display: block;
    width: 100%;
    margin-top: 15px;
    font-size: 1.3em;
  }

  /* Animations */
  .flip-container {
    -webkit-perspective: 1000;
    perspective: 1000;
    width: 100%;
    height: 250px;
  }

  .flip-container:hover .flipper {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }

  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }

  .front, .back {
    width: 100%;
    height: 250px;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }

  .front {
    z-index: 2;
  }

  .back {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }

  .flip-padding-container {
    width: 45%;
    padding: 10px;
  }

  @media screen and (max-width: 640px) {
    .flip-padding-container {
      width: 100%;
    }
  }

  @media screen and (min-width: 1000px) {
    .flip-padding-container {
      width: 30%;
    }
  }
</style>

<script>
  import MenuItem from './MenuItem';

  export default {
    name: 'menu-option',
    props: {
      option: Object,
    },
    components: {
      'menu-item': MenuItem,
    },
  };
</script>
