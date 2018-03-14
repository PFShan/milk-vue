import Vue from 'vue';
import Indicator from './activity-indicator.vue';

let instance;

const createInstance = () => {
  if (!instance) {
    const Activity = Vue.extend(Indicator);
    instance = new Activity({
      el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
  }
};
const ActivityIndicator = (type, message, color) => {
  createInstance();
  const options = {
    'visible': true,
    'message': message || '加载中...',
    'background': `background-color: ${color}` || 'background-color: rgba(40, 40, 40, .7)',
    'type': type || 'loading'
  };
  Object.assign(instance, options);
  return instance;
};
ActivityIndicator.show = (type, message, color) => {
  if (!instance) {
    ActivityIndicator(type, message, color);
  } else {
    instance.visible = true;
    instance.type = type;
  }
};
ActivityIndicator.hide = () => {
  instance.visible = false;
};

export default ActivityIndicator;

