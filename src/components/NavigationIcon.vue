<template>
  <div>
    <p  class="link-item">
      <font-awesome-icon :icon="icon" :size=size class="link-icon" />
      <a :href="link" target="_blank" class="link-item__name">{{ label }}</a>
    </p>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'NavigationIcon',
  components: {
    FontAwesomeIcon,
  },
  props: {
    icon: {
      type: Object,
      required: true,
    },
    size: {
      type: String,
      default: 'lg',
    },
    link: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'black',
    },
  },
};

</script>

<style>
.link-item {
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 64px;
  height: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.link-icon {
  margin-bottom: 10px;
  width: 64px;
  height: 64px;
}

.link-item__name {
  color: #555;
  text-decoration: none;
  font-size: 16px;
  margin: 0 auto;
}

.link-item__name:hover {
  color: #222;
  text-decoration: underline;
}
</style>