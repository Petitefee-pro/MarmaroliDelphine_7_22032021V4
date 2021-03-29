import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
/*import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';*/

/*//plugins Bootstrap-vue et Bootstrap
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp.use(BootstrapVue)
createApp.use(BootstrapVueIcons)

app.use(Bootstrap);*/

const app = createApp(App);
app.use(router, VueRouter);
app.mount('#app');


/*createApp(App).mount('#app')*/
