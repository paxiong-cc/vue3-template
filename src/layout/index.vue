<template>
  <section class="manage-container">
    <!-- 顶部 -->
    <NavBar />
    <RouterView class="content-box" />
    <Footer />
  </section>
</template>

<script lang="ts">
import NavBar from './nav.vue'
import Footer from './footer.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    NavBar,
    Footer
  }
})
</script>

<style lang="scss" scoped>
.manage-container {
  @include flex($dr: column);
}

.content-box {
  flex: 1;
  // min-height: 600px;
}
</style>
