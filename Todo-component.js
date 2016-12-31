Vue.component('todo-item', {
  template: '\
    <li>\
      <input class="toggle" type="checkbox" v-on:click="$emit(\'done\')">\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})