<template>
  <div>
    <!-- nuxtに_slug.vueがレンダリングされているが、何故そうなるのかをまだ理解していない -->
    <nuxt/>
    <visits/>
  </div>
</template>

<script>
import Visits from '~/components/Visits';
export default {
  components: { Visits },
};
</script>
