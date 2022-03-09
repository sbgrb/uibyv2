import Vue from 'vue'
import Button from "./button";
import icon from "./icon";
import input from "./input";

Vue.component('g-button',Button)
Vue.component('g-icon',icon)
Vue.component('g-input',input)
new Vue({
    el:'#app',
})