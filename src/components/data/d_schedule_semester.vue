<template>
  <div>
    {{ semesterData }}
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
  Schedule,
} from '@/assets/CourseInfo';

export default defineComponent({
  name: 'DScheduleSemester',
  props: {
    schedule: { type: Object as PropType<Schedule>, default: basicTemplate },
  },

  setup(props) {
    const semesterData = computed(() => props.schedule?.semester?.jp);

    return {
      semesterData,
    };
  },
});

</script>
