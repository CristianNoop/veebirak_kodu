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
			<tr v-bind:courseList="courseList" v-for="(c, index) in courseList"
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
        methods: {
            addNewCourse: function (title, semester, grade) {
                this.courseList.push(new Course(title, semester, grade));
                this.title = "";
                this.grade = "";
                this.semester = "";
            },

        },
        data: () => {
            return {
                courseList: [
                    new Course("Agile software development", 1, 82),
                    new Course("System modeling", 1, 85),
                    new Course("Object-oriented programming", 2, 99),
                    new Course("Estonian language Level A2", 2, 65)
                ],
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