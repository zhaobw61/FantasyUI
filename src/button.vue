<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <g-icon class="icon" v-if="icon&&!loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" :name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from './icon'
export default {
  name: 'GuluButton',
  // props:['icon','iconPosition']
  components: {
        'g-icon': Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        // 属性的检查器
        if (value != "left" && value != "right") {
          return false;
        } else {
          return true;
        }
      }
    }
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
@keyframes spin {
  0% {
    transform: rorate(0deg);
    -webkit-transform: rotate(0deg);
  }
  100% {
    transform: rorate(360deg);
    -webkit-transform: rotate(260deg);
  }
}
.g-button {
  font-size: var($font-size);
  height: var($button-height);
  padding: 0 1em;
  border-radius: var($border-radius);
  border: 1px solid var($border-color);
  background: var($button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var($border-color-hover);
  }

  &:active {
    background-color: var($button-active-bg);
  }

  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
