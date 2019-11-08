<template>
    <div class="controls">
        <button @click="setInfoView" id="profile-button" class="pill active">Profile</button>
        <button @click="setCourseView" id="courses-button" class="pill">Courses</button>
    </div>
</template>

<script>
    import CourseTable from './CoursesTable.vue'
    import ProfileView from './ProfileView.vue'

    export default {
        name: "ViewButtons",
        data: () => {
            return {
                view: ProfileView
            }
        },
        methods: {
            setCourseView: function () {
                this.$emit('changeView', CourseTable)
            },
            setInfoView: function () {
                this.$emit('changeView', ProfileView)
            }
        }
    }
</script>

<style scoped>

</style>