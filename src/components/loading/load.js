import Vue from 'vue';
import LoadComponent from './Load.vue';

let loadding = Vue.extend(LoadComponent);
let instance;

export default {
  open() {
    if(!instance) {
      instance = new loadding({
        el: document.createElement('div')
      });
      if(instance.show === true) {
        return;
      }
      document.body.appendChild(instance.$el);
      instance.show = true;
    }
  },
  close() {
    if(instance) {
      instance.show = false;
      instance = null;
    }
  }
}