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
        $("#add-course").toggle("hide");
    });


    $("#save-course").click(function (event) {
        console.log("hi");
        var inputs = $("#add-course").children(".input");

        for (let i = 0; i < inputs.length; i++) {
            var input = inputs.eq(i);
            if (input.val() == "") {
                input.focus()
                return;
            }
        }
        var course = new Course(inputs.eq(0).val(), inputs.eq(1).val(), inputs.eq(2).val())
        addCourseToTable(course)

    });

    function init() {
        //On seda siin vaja? 2.ülesanne Note osa.
        /*$("#name").text(user.firstname + " " + user.lastname);
        $("#birthdate").text(user.birthday);
        $("#faculty").text(user.faculty);
        $("#gpa").text(user.gpa);*/


        for (let i = 0; i < courses.length; i++){
            var course = courses[i];
            addCourseToTable(course);
        }
    }

    function makeActiveInactive($button1, $button2) {
        if (!$button1.hasClass("active")) {
            $button1.addClass("active");
            $button2.removeClass("active");
        }
    }

    function addCourseToTable($course) {
        let tr = $("<tr></tr>");

        let count = $("#coursesrows").children().length;
        let idx = $("<td></td>").text(count+1);
        let name = $("<td></td>").text($course.title);
        let semester = $("<td></td>").text($course.semester);
        let grade = $("<td></td>").text($course.grade);

        tr.append(idx, name, semester, grade);

        $("#coursesrows").append(tr);
    }
})