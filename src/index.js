import Vue2Qrcode from "./components/Vue2Qrcode.vue";

const components = [Vue2Qrcode];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export { Vue2Qrcode };
