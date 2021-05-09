<template>
  {{ lecturers }}
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
  Lecturer,
} from '@/assets/CourseInfo';

export default defineComponent({
  name: 'DLecturer',
  props: {
    lecturer: { type: Array as PropType<Lecturer[]>, default: basicTemplate },
  },

  setup(props) {
    const lecturers = computed(() => props.lecturer[0]?.name?.jp);

    console.log(lecturers);
    return {
      lecturers,
    };
  },
});

</script>
