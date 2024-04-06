<script lang="ts">
import { defineComponent } from 'vue';
import { Course, localCourses } from "@/theme/types/course";
import CourseCard from '@/theme/components/CourseCard.vue';
export default defineComponent({
  name: 'CourseFeed',
  components: {
    CourseCard,
  },
  props: {
    courses: {
      type: Array as () => Array<Course>,
      required: true,
    },
  },
  setup(props) {
    return {
      courses: props.courses,
    };
  },
  data() {
    return {
      courses: localCourses,
    }
  },
});
</script>

<template>
  <div class="flex flex-wrap -mx-4">
    <CourseCard v-for="(course, index) in courses" :key="index" :course="course" />
  </div>
</template>