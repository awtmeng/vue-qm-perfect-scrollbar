A Vue.js plugin for perfect-scrollbar tested up to ```Vue v2.0.5```

## Installation

Install through npm

``` bash
npm install vue-perfect-scrollbar --save

```

``` javascript
// Require dependencies
var Vue = require('vue');
var VuePs = require('vue-perfect-scrollbar');
// Tell Vue to use the plugin
Vue.use(VuePs);

```

### Usage
The plugin is available through ```this.$ps``` in components or ```Vue.Ps```

###### Example
``` javascript
// From some method in one of your Vue components

this.$ps.initialize(container, {
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
});

// If the size of your container or content changes, call update.

this.$ps.update(container);

// If you want to destroy the scrollbar, use destroy.

this.$ps.destroy(container);


```