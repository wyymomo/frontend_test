<template>
  <!-- <div v-if="course == {}">loading</div>
  <div v-else> -->
  <!-- <div>{{ courses }}</div> -->
  <div>
    <el-col
      v-for="(course, i) in courses"
      :key="i"
      :span="8"
    >
      <el-card shadow="hover">
        <d-title :title="course.title" />
        <d-lecturer :lecturer="course.lecturers" />
        <d-category :category="course.category" />
        <d-summary :summary="course.summary" />
        <d-schedule-semester :schedule="course.schedule" />
        <d-schedule-times :schedule="course.schedule" />
      </el-card>
    </el-col>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  toRefs,
} from 'vue';
import request from '@/api/request';
// import { Basic, CourseInfo } from '@/assets/CourseInfo';
// import { PropType } from '@vue/composition-api';
import DTitle from '@/components/data/d_title.vue';
import DLecturer from '@/components/data/d_lecturer.vue';
import DCategory from '@/components/data/d_category.vue';
import DSummary from '@/components/data/d_summary.vue';
import DScheduleSemester from '@/components/data/d_schedule_semester.vue';
import DScheduleTimes from '@/components/data/d_schedule_times.vue';

export default defineComponent({
  components: {
    DTitle,
    DLecturer,
    DCategory,
    DSummary,
    DScheduleSemester,
    DScheduleTimes,
  },
  setup() {
    const state = reactive({
      courses: [{}],
    });

    onMounted(async () => {
      const fetchedData = await request.fetchAndStoreCourses('search?');
      state.courses = fetchedData.slice(0, 10);
    });

    // const titleData = computed((title: Object) => props.courseData.title.name);

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style scoped>
</style>
