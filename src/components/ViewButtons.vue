<template>
    <div class="controls">
        <button @click="setInfoView" id="profile-button" class="pill" v-bind:class="{'active': !isCourseView}">Profile</button>
        <button @click="setCourseView" id="courses-button" class="pill" v-bind:class="{'active': isCourseView}">Courses</button>
    </div>
</template>

<script>
    import CourseTable from './CoursesTable.vue'
    import ProfileView from './ProfileView.vue'

    export default {
        name: "ViewButtons",
        data:
            () => {
            return {
                view: ProfileView,
                isInfoView: true,
                isCourseView: false
            }
        },
        methods: {
            setCourseView: function () {
                this.$emit('changeView', CourseTable);
                this.isCourseView = true;
            },
            setInfoView: function () {
                this.$emit('changeView', ProfileView);
                this.isInfoView = true;
            }
        }
    }
</script>

<style scoped>

</style>