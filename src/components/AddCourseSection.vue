<template>
    <div>
        <button id="add-course-button" class="blue-button" @click="toggleDisplay" >+</button>
        <span id="add-course" v-bind:style="{ display: addCourse }">
            <input class="input" type="text" placeholder="Course title" id="title">
            <input class="input" type="number" min="1" max="8" placeholder="Semester" id="semester">
            <input class="input" type="number" min="0" max="100" placeholder="Grade" id="grade">
            <button class="green-button" id="save-course">Save</button>
            <button class="grey-button" id="cancel-course">Cancel</button>
        </span>
    </div>
</template>

<script>
    export default {
        name: "AddCourseSection",
        data: () => {
            return {
                addCourse: 'none',
            }
        },
        methods: {
            toggleDisplay: function () {
                if (this.addCourse === "none") {
                    this.addCourse = "inline";
                }
                else {
                    this.addCourse = "none"
                }
            }
        }
    }
</script>

<style scoped>

</style>