<script lang="ts">
import { defineComponent } from 'vue';
import {Course} from "@/theme/types/course";

export default defineComponent({
  name: 'CourseCard',
  props: {
    course: {
      type: Object as () => Course,
      required: true,
    },
  },
  setup(props) {
    return {
      course: props.course,
    };
  },
});
</script>


<template>
  <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-lg font-semibold md-2">{{ course.course_name }}</h2>
      <p class="text-gray-700 mb-4">{{ course.description }}</p>
      <p class="text-sm text-gray-600">Course Code: {{ course.course_code }}</p>
      <p class="text-sm text-gray-600">Lecturer: {{ course.instructor }}</p>
      <p class="text-sm text-gray-600">Discipline: {{ course.discipline }}</p>
      <div class="flex flex-wrap mt-4">
        <span v-for="(tag, index) in course.tags" :key="index" class="mr-2 mb-2 px-2 py-1 rounded-full bg-gray-200 text-gray-700 text-xs">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>