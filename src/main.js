import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { createPinia } from "pinia";
// import PrimeVue from "primevue/config";
// import "tailwindcss/tailwind.css";
// import "./assets/tailwind/tailwind.css";
import "./assets/tailwind.css";
// import _ from "lodash";
const app = createApp(App);
// import "./assets/tailwind.css";
/*
createApp(App).use(router).mount("#app");
import { firestorePlugin } from "vuefire";
import { createDynamicForms } from '@asigloo/vue-dynamic-forms';
import "./assets/tailwind.css";
import './index.css'
*/
// vue.use(firestorePlugin)
/* const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);


requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = _.upperFirst(
    _.camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  app.component(componentName, componentConfig.default || componentConfig);
}); */
app.use(createPinia()).use(router).mount("#app");
// app.use(createPinia()).use(router).mount('#app')
// .use(VueDynamicForms) .use(firestorePlugin)

//const VueDynamicForms = createDynamicForms({
// Global Options go here
// });

/* createApp(App)
  .use(firestorePlugin)
  .use(createPinia())
  .use(router)
  .mount("#app");
https://github.com/appwrite/sdk-for-node
  https://appwrite.io/
 */
