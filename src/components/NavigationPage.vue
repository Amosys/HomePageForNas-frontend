<script setup>
import NavigationIcon from './NavigationIcon.vue';
</script>

<template>
  <div class="navigation-page">
    <h1 class="title">MLYB的NAS</h1>
    <ul class="links-list">
      <li v-for="link in links" :key="link.id" class="link-item">
        <navigation-icon :icon="link.icon" :size="'xl'" :link="link.url" :label="link.name"/>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'NavigationPage',
  data() {
      return {
      links: [
          { id: 1, icon:['fas', 'gear'], name: '系统', url: 'http://192.168.0.151:8080' },
          { id: 2, icon:['fas', 'download'], name: '下载', url: 'http://192.168.0.151:6880' },
          { id: 3, icon:['fab', 'docker'], name: 'docker', url: 'http://192.168.0.151:9000' },
          { id: 3, icon:['fab', 'jenkins'], name: 'jenkins', url: 'http://192.168.0.151:8081' },
          // 添加更多网址链接
      ],
      };
  },
};
</script>

<style>
.navigation-page {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 75vw;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
  width: 100vw;
}

.links-list {
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 将链接分为三列 */
  grid-gap: 20px; /* 设置网格间隔 */
}
</style>