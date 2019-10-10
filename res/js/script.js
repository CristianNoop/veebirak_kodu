$(function() {
    var user = new User("Jonathan", "Doep", "12/08/1953", "Software Engineering", 4.52);
    var c1 = new Course("Algorithmics", 1, 99);
    var c2 = new Course("Parallel Computing", 2, 87);
    var c3 = new Course("Software Project", 2, 100);
    var c4 = new Course("Requirements Engineering", 1, 68);
    var courses = [c1, c2, c3, c4];

    init()

    $("#courses-button").click(function (event) {
        $("#profile-container").hide();
        $("#courses-container").show();
        makeActiveInactive($(this), $("#profile-button"))
        

    });
    $("#profile-button").click(function (event) {
        $("#profile-container").show();
        $("#courses-container").hide();
        makeActiveInactive($(this), $("#courses-button"))

        //hiding the add course button
        $("#add-course").hide()
    });


    $("#add-course-button").click(function (event) {
        console.log("sd")
        $("#add-course").toggle("hide");
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

    function makeActiveInactive($button1, $button2) {
        if (!$button1.hasClass("active")) {
            $button1.addClass("active");
            $button2.removeClass("active");
        }
    }


})