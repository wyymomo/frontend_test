<template>
  <div>
    {{ categoryData }}
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
  name: 'DCategory',
  props: {
    category: { type: Object as PropType<Basic>, default: basicTemplate },
  },

  setup(props) {
    const categoryData = computed(() => props.category?.jp);

    console.log(categoryData);
    return {
      categoryData,
    };
  },
});

</script>
