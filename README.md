# vue-hamburger-button
Don't take this component too seriously. It is just a [hamburger button](https://en.wikipedia.org/wiki/Hamburger_button) taken from W3C article [How TO - Menu Icon](https://www.w3schools.com/howto/howto_css_menu_icon.asp). This is the animated version.

## Preview
If You want to see button in action, check the mentioned W3C tutorial, or install this project locally. It's as simple as to run these commands:

```
git clone ...
``` 

```
npm install
```

```
npm run serve
```
## Installation and usage
You can install this component from [npm](https://www.npmjs.com/) with `npm` or `yarn`.
```
npm install <name>
```

### Example app
This is very simple example of using `HamburgerButton`. Please inspect source code of the component and styles, to see its `props`, how to styles are composed and how they can be customized.

> **NOTE**: Even the `default-theme` has to be imported manually.

```
<template>
  <div id="app">
    <HamburgerButton
      :is-hamburger="true"
      theme="my-custom-theme"
      @click="onClick($event)"
    />
    {{ isHamburger ? 'Hamburger' : 'Cross' }}
  </div>
</template>

<script>
import HamburgerButton from 'vue-hamburger-button'

export default {
  name: 'app',
  components: {
    HamburgerButton
  },
  data () {
    return {
      isHamburger: true
    }
  },
  methods: {
    onClick(isInHamburgerState){
      this.isHamburger = isInHamburgerState
    }
  }
}
</script>

<style lang="scss">
/* Styles (themes) are not bundled within component itself. They must be specified 
manually, even the 'default-theme', which is part of npm package. */
@import 'vue-hamburger-button/src/scss/default-theme.scss';

/* This example of customization extends default-theme. You can also copy whole
default-theme to new file and customize size of the button, thickness of the bars etc. */
.my-custom-theme {
  @extend .default-theme;

  .bar1, .bar2, .bar3 {
    background-color: red;
  }
}
</style>
```

### Component props
  - `isHamburger`: `true`, if initial state of the button is *hamburger*, or `false` if the initial state is *cross*. Default is `true`.
  - `theme`: Name of the *root* class of your customized style. Default value is `default-theme`.
  
  
### Component events
  - `onClick(isInHamburgerState)`: event on mouse click, with argument, if the button is in *hamburger* or in *cross* state.
  
### Component customization
See the example app how to customize, but basically, it is about to have one *root* class, that will be passed to `theme` parameter. 

> **NOTE:** If You change *height* (thickness) of the bars, animation will not play very well. You will need to customize `translate` attribute of the `transform` property. I don't have exact recepie, how to set those values. I'm doing it just simple with *try and error* method and it works well.


## TODO
  - write tests
  - technically this is a clickable `div` and no `button`.  I'm not very happy with it.