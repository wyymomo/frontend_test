<template>
  {{ titleData }}
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  PropType,
} from 'vue';

import {
  basicTemplate,
  Title,
} from '@/assets/CourseInfo';

export default defineComponent({
  name: 'DTitle',
  props: {
    title: { type: Object as PropType<Title>, default: basicTemplate },
  },

  setup(props) {
    const titleData = computed(() => props.title?.name?.jp);

    console.log(titleData);
    return {
      titleData,
    };
  },
});

</script>
