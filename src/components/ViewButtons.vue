<template>
    <div class="controls">
        <button @click="setInfoView" id="profile-button" class="pill" v-bind:class="{'active': !isCourseView}">Profile</button>
        <button @click="setCourseView" id="courses-button" class="pill" v-bind:class="{'active': isCourseView}">Courses</button>
    </div>
</template>

<script>
    export default {
        name: "ViewButtons",
        data:
            () => {
            return {
                isCourseView: false
            }
        },
        methods: {
            setCourseView: function () {
                this.$emit('changeView', false);
                this.isCourseView = true;
            },
            setInfoView: function () {
                this.$emit('changeView', true);
                this.isCourseView = false;
            }
        }
    }
</script>

<style scoped>

</style>