<template>
    <div>
        <button id="add-course-button" class="blue-button">+</button>
        <span id="add-course">
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
        name: "AddCourseSection"
    }
</script>

<style scoped>

</style>