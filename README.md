A Vue.js plugin for perfect-scrollbar

## Installation

Install through npm

``` bash
npm install vue-qm-perfect-scrollbar --save

```

``` javascript
// Require dependencies
var Vue = require('vue');
var VuePs = require('vue-qm-perfect-scrollbar');
// Tell Vue to use the plugin
Vue.use(VuePs);

```

### github
https://github.com/awtmeng/vue-qm-perfect-scrollbar

### Usage
The plugin is available through ```this.$ps``` in components or ```Vue.Ps```

###### Example

``` css
  require('perfect-scrollbar/dist/css/perfect-scrollbar.min.css')

```

``` javascript
// To initialise the plugin

let container = this.$refs.test[0]
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