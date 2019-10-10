$(function() {
    var user = new User("Jonathan", "Doep", "12/08/1953", "Software Engineering", 4.52);
    var c1 = new Course("Algorithmics", 1, 99);
    var c2 = new Course("Parallel Computing", 2, 87);
    var c3 = new Course("Software Project", 2, 100);
    var c4 = new Course("Requirements Engineering", 1, 68);
    var courses = [c1, c2, c3, c4];

    init()

    $("#courses-button").click(function (event) {
        console.log("asfas");
        $("#profile-container").hide();
        $("#courses-container").show();
    });
    $("#profile-button").click(function (event) {
        console.log("asfas");
        $("#profile-container").show();
        $("#courses-container").hide();
    });


    function init() {
        //On seda siin vaja? 2.ülesanne Note osa.
        /*$("#name").text(user.firstname + " " + user.lastname);
        $("#birthdate").text(user.birthday);
        $("#faculty").text(user.faculty);
        $("#gpa").text(user.gpa);*/


        for (let i = 0; i < courses.length; i++){
            let tr = $("<tr></tr>");

            let count = $("#coursesrows").children().length;
            let idx = $("<td></td>").text(count+1);
            let name = $("<td></td>").text(courses[i].title);
            let semester = $("<td></td>").text(courses[i].semester);
            let grade = $("<td></td>").text(courses[i].grade);

            tr.append(idx, name, semester, grade);

            $("#coursesrows").append(tr);
        }
    }

})