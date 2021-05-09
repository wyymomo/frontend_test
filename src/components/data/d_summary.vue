<template>
  <div>
    {{ summaryData }}
  </div>
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
  Basic,
} from '@/assets/CourseInfo';

export default defineComponent({
  name: 'DSummary',
  props: {
    summary: { type: Object as PropType<Basic>, default: basicTemplate },
  },

  setup(props) {
    const summaryData = computed(() => props.summary?.jp);

    console.log(summaryData);
    return {
      summaryData,
    };
  },
});

</script>
