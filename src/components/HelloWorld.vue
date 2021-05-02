<template>
  <!-- <div v-if="course == {}">loading</div>
  <div v-else> -->
  <div>
    {{ name }}
    {{ course }}
    {{ users }}
    {{ temp }}
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  toRefs,
} from 'vue';
import request from '@/api/request';

export default defineComponent({
  props: {
    msg: String,
  },
  setup(props) {
    const func = () => {
      console.log('hello');
    };

    const state = reactive({
      name: '',
      temp: {},
    });
    let course: any = reactive([]);

    onMounted(async () => {
      console.log('hello');
      const course2 = await request.fetchAndStoreCourses('search?');
      console.log(course2);
      console.log('hello');
      course = course2;
      console.log(course);
      [state.temp] = course2;
      state.name = 'hello';
    });

    // const users = await request.fetchAndStoreCourses('search?');

    // const data2 = computed(() => data.course);

    return {
      // users,
      course,
      ...toRefs(state),
    };
  },
});
</script>

<style scoped>
</style>
