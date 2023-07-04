import VueLazyload from 'vue-lazyload';

const options = {
  preLoad: 1.3,
  error: '../assets/gif/loading.gif',
  loading: '../assets/gif/loading.gif',
  attempt: 2,
  observer: true,
  listenEvents: ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend'],
  observerOptions: {
    threshold: 0
  }
}
export default (app, isSsr) => {
  if (!isSsr) {
    app.use(VueLazyload, options);
  } else {
    app.directive('lazy', {
      mounted(el) {
        el.setAttribute('src', options.loading);
      }
    });
  }
};
