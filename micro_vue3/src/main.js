import {
  qiankunWindow,
  renderWithQiankun
} from 'vite-plugin-qiankun/dist/helper';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

let app;

function render(props) {
  const { container } = props;
  app = createApp(App);
  app.use(router).mount(container instanceof Element
    ? (container.querySelector("#appvue3"))
    : (container)
  );
}
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({ container: "#appvue3" });
} else {
  
  renderWithQiankun({
   
    mount(props) {
      console.log('--mount');
      render(props)
    },
    bootstrap() {

      console.log('--bootstrap');
    },
    update() {
      console.log('--update');
    },
    unmount() {

      console.log('--unmount');
      app?.unmount();
    }
  });
}




createApp(App).mount('#appvue3')
