import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';
import BaseContainer from './components/layout/BaseContainer.vue';

const app = createApp(App);

app.use(store);

app.component('base-container', BaseContainer);

app.mount('#app');
