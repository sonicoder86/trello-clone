import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faFeatherAlt,
  faTrash,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';

library.add(faHome, faFeatherAlt, faTrash, faStar);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#root');
