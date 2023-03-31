import { createApp } from 'vue'
import components from '@/components/GlobalLibrary';
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router';
const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);
});
const store = createPinia();

app.use(store);
app.use(router);
app.mount('#app')
