<template>
    <div id="profile-container" class="tab active">
        <div id="profile">
            <div class="avatar">
                <img src="../assets/me.png" id="picture" alt="My picture">
            </div>
            <div class="info">
                <ul>
                    <li id="name">{{user.firstname + " " + user.lastname}}</li>
                    <li id="birthdate">{{user.birthday}}</li>
                    <li id="faculty">{{user.faculty}}</li>
                </ul>
            </div>
            <div id="gpa">
                <strong>{{user.gpa}}</strong>
            </div>
            <div class="clear-fix"></div>
        </div>
    </div>
</template>

<script>
    import User from "@/models/User";
    export default {
        name: "InfoView",
        props: ["courses", "gpa"],
        data() {
            return {
                user: new User("Jonathan", "Dope", "11/10/1999", "Software Engineering", this.gpa)
            }
        },
    }
</script>

<style scoped>

</style>