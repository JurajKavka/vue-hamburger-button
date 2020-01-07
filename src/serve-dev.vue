<script>
import Vue from 'vue';
import HamburgerButton from '@/hamburger-button.vue';

export default Vue.extend({
  name: 'App',
  components: {
    HamburgerButton
  },
  data () {
    return {
      isOpened: false,
      isInHamburgerState: true
    }
  },
  methods: {
    onClickStandaloneButton (isInHamburgerState) {
      this.isInHamburgerState = isInHamburgerState
    },
    onClickMenuButton () {
      this.isOpened = !this.isOpened;
    }
  }
  
});
</script>

<template>
  <div id="App">
    <h4>Default hamburger</h4>
    <div class="example-default-hamburger">
      <HamburgerButton
        :is-hamburger="true"
        @click="onClickStandaloneButton"
      />
      <div class="state-label">
        <pre>{{ isInHamburgerState ? "Hamburger" : "Cross" }}</pre>
      </div>
    </div>

    <h4>Big red hamburger</h4>
    <HamburgerButton
      :is-hamburger="true"
      theme="big-red-hamburger"
    />

    <h4>Simple menu slider</h4>
    <div 
      class="example-menu-slider"
      :class="[ isOpened ? 'opened' : 'closed' ]"
    >
      <HamburgerButton
        class="hamburger-button"
        :class="[ isOpened ? 'opened' : 'closed' ]"
        :is-hamburger="true"
        @click="onClickMenuButton"
      />
      <div 
        class="slider-text" 
      >
        <ul>
          <li><a href="#">Menu Item 1</a></li>
          <li><a href="#">Menu Item 2</a></li>
          <li><a href="#">Menu Item 3</a></li>
          <li><a href="#">Menu Item 4</a></li>
          <li><a href="#">Menu Item 5</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./scss/default-theme";
@import "./scss/big-red-hamburger";

.example-default-hamburger {
  display: flex;
  flex-direction: row;

  .state-label {
    pre {
      margin: 9px 0 0 5px;
      color: #555;
    }
  }
}

.example-menu-slider {
  width: 250px;
  transition: all 0.4s;
  background-color: #efefef;

  &.opened {
    margin-left: 0;
    display: block;
  }

  &.closed {
    margin-left: -220px;
    display: block;
  }

  .hamburger-button {
    transition: all 0.4s;
    float: right;
    margin-right: 5px;

    &.opened {
      margin-right: 5px
    }

    &.closed {
      transition: all 0.4s;
    }
  }

  // Source: https://www.w3schools.com/css/css_navbar.asp
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
  }

  li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #555;
    color: white;
  }
}
</style>
