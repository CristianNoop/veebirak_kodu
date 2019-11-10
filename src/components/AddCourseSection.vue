<template>
	<div>
		<button id="add-course-button" class="blue-button" @click="toggleDisplay">+</button>
		<span id="add-course" v-bind:style="{ display: addCourse }">
            <input class="input" type="text" placeholder="Course title" id="title" v-model="title">
            <input class="input" type="number" min="1" max="8" placeholder="Semester" id="semester" v-model="semester">
            <input class="input" type="number" min="0" max="100" placeholder="Grade" id="grade" v-model="grade">
            <button class="green-button" id="save-course"
					v-on:click="addItems">Save</button>
            <button class="grey-button" id="cancel-course" @click="toggleDisplay">Cancel</button>
        </span>
	</div>
</template>

<script>

    export default {
        name: "AddCourseSection",
        data: () => {
            return {
                addCourse: "none",
                title: "",
                semester: "",
                grade: "",

            }

        },
        methods: {
            toggleDisplay: function () {
                if (this.addCourse === "none") {
                    this.addCourse = "inline";
                } else {
                    this.addCourse = "none"
                }
                this.title = "";
                this.semester = "";
                this.grade = "";
            },
            addItems: function () {
                this.$emit("addNewItem", [this.title, this.semester, this.grade])
				this.title = "";
				this.semester = "";
				this.grade = "";
            },


        },

    }
</script>

<style scoped>

</style>