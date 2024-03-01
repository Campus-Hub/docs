<template>
  <div>
<!--    <h2>Course List</h2>-->
<!--    <ul>-->
<!--      <li v-for="course in courses" :key="course.id">-->
<!--        <h3>{{ course.title }}</h3>-->
<!--        <p>{{ course.description }}</p>-->
<!--        <p>Instructor: {{ course.instructor }}</p>-->
<!--      </li>-->
<!--    </ul>-->
    <section class="p-5">
      <div class="mb-5 flex items-center justify-between">
        <h4 class="font-medium text-slate-500">Notifications</h4>
        <div class="rounded-md bg-pink-400/70 px-2 font-semibold text-gray-900">3</div>
      </div>
      <div class="space-y-2">
        <div class="flex space-x-4 rounded-xl bg-white p-3 shadow-sm">
          <img class="aspect-square w-16 rounded-lg bg-center object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXeOqFwpuGs8POfrytccjgsihqbnERH0hOXg&usqp=CAU" alt="" />
          <div>
            <h4 class="font-semibold text-gray-600">Don't miss out</h4>
            <p class="text-sm text-slate-400">Sometimes it really is ambiguous though</p>
          </div>
          <div>
            <button type="button" class="rounded bg-slate-50 px-2 text-xl text-slate-500 hover:bg-slate-100">&times;</button>
          </div>
        </div>
        <div class="flex space-x-4 rounded-xl bg-white p-3 shadow-sm">
          <img class="aspect-square w-16 rounded-lg bg-center object-cover" src="https://iconscout.com/iconscout_logo-1024x1024.png" alt="" />
          <div>
            <h4 class="font-semibold text-gray-600">Did you know?</h4>
            <p class="text-sm text-slate-400">An unlimited domain license has no domain restrictions</p>
          </div>
          <div>
            <button type="button" class="rounded bg-slate-50 px-2 text-xl text-slate-500 hover:bg-slate-100">&times;</button>
          </div>
        </div>
        <div class="flex space-x-4 rounded-xl bg-white p-3 shadow-sm">
          <img class="aspect-square w-16 rounded-lg bg-center object-cover" src="https://icons.getbootstrap.com/assets/img/icons-hero.png" alt="" />
          <div>
            <h4 class="font-semibold text-gray-600">We are excited to share !!</h4>
            <p class="text-sm text-slate-400">Enter to win 1 out of 2 copies of Borderlands 3!</p>
          </div>
          <div>
            <button type="button" class="rounded bg-slate-50 px-2 text-xl text-slate-500 hover:bg-slate-100">&times;</button>
          </div>
        </div>
        <div class="flex space-x-4 rounded-xl bg-white p-3 shadow-sm">
          <img class="aspect-square w-16 rounded-lg bg-center object-cover" src="https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667" alt="" />
          <div>
            <h4 class="font-semibold text-gray-600">Using CSS and @layer</h4>
            <p class="text-sm text-slate-400">When you need to add truly custom CSS rules to a Tailwind project</p>
          </div>
          <div>
            <button type="button" class="rounded bg-slate-50 px-2 text-xl text-slate-500 hover:bg-slate-100">&times;</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import axios from 'axios';
import {Course} from '../types/course'

export default defineComponent ({
  data() {
    return {
      courses: [] as Course[]
    };
  },
  mounted() {
    this.fetchCourses();
  },
  methods: {
    async fetchCourses() {
      try {
        const response = await axios.get('/api/v1/course/list'); // Assuming endpoint for courses
        this.courses = response.data;
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }
  }
});
</script>

<style scoped>

</style>