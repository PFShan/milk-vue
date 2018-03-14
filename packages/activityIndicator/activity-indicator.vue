<template>
  <transition name="activity-fade">
    <div class="activity-wrapper" v-show="visible">
      <div class="activity activity-default" :style="background" v-show="type === 'loading'">
        <template>
          <v-icon type="loading" size="lg" />
          <div class="activity-message">{{ message }}</div>
        </template>
      </div>
      <div class="activity activity-default" style="background-color: rgb(128, 128, 128)" v-show="type === 'juhua'">
        <div class="m-load2">
          <div class="line">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="circlebg"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Icon from '../icon';
  export default {
    name: 'Activity',
    components: { Icon },
    data() {
      return {
        visible: false,
        type: '',
        background: '',
        message: ''
      };
    }
  };
</script>
