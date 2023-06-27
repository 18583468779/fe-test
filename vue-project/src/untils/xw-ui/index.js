import Carousel from "./Carousel/index.vue";
import CarItem from "./Carousel/item.vue";

let XwUI = {}; //自定义组件库

XwUI.install = function (Vue) {
  Vue.component(Carousel.name, Carousel);
  Vue.component(CarItem.name, CarItem);
};

export default XwUI;
