<template>
    <div id="courses-container" class="tab">
        <h1 class="title">Courses</h1>
        <table id="courses">
            <thead>
            <tr>
                <th>#</th>
                <th>Course Title</th>
                <th>Semester</th>
                <th>Grade</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(c, index) in courseList" :key="c.id">
                <td>{{index+1}}</td>
                <td>{{c.title}}</td>
                <td>{{c.semester}}</td>
                <td>{{c.grade}}</td>
            </tr>
            </tbody>
        </table>
        <br>
        <br>
        <AddCourseSection/>
    </div>
</template>

<script>
    import AddCourseSection from './AddCourseSection.vue'
    import Course from "@/models/Course";

    export default {
        name: "CoursesTable",

        data: () => {
            return {
                courseList: [
                    new Course("Agile software development", 1, 82),
                    new Course("System modeling", 1, 85),
                    new Course("Object-oriented programming", 2, 99),
                    new Course("Estonian language Level A2", 2, 65)
                ]
            }
        },

        components: {
            AddCourseSection
        }
    }
</script>

<style scoped>

</style>