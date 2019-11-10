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
			<tr v-for="(c, index) in courses"
				:key="c.id">
				<td>{{index+1}}</td>
				<td>{{c.title}}</td>
				<td>{{c.semester}}</td>
				<td>{{c.grade}}</td>
			</tr>
			</tbody>
		</table>
		<br>
		<br>
		<AddCourseSection v-on:addNewItem="addNewCourse($event[0], $event[1], $event[2])"/>
	</div>
</template>

<script>
    import AddCourseSection from './AddCourseSection.vue'
    import Course from "@/models/Course";

    export default {
        name: "CoursesTable",
		props:["courses"],
        methods: {
            addNewCourse: function (title, semester, grade) {
                this.courses.push(new Course(title, semester, grade));
                this.title = "";
                this.grade = "";
                this.semester = "";
            },
        },
        data: () => {
            return {
                title: "",
                semester: "",
                grade: "",
            }
        },

        components: {
            AddCourseSection
        }
    }
</script>

<style scoped>

</style>