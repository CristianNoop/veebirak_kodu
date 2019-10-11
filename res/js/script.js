$(function () {
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

        cleanAndHideAddCourse();
    });


    $("#add-course-button").click(function (event) {
        $("#add-course").toggle("hide");
    });


    $("#save-course").click(function (event) {
        var inputs = $("#add-course").children(".input");

        for (let i = 0; i < inputs.length; i++) {
            var input = inputs.eq(i);
            if (input.val() === "") {
                input.focus()
                return;
            }
        }


        var course = new Course(inputs.eq(0).val(), inputs.eq(1).val(), inputs.eq(2).val())
        addCourseToTable(course);

        cleanAndHideAddCourse();

    });

    function init() {
        $("#name").text(user.firstname + " " + user.lastname);
        $("#birthdate").text(user.birthday);
        $("#faculty").text(user.faculty);
        $("#gpa strong").text(user.gpa);


        for (let i = 0; i < courses.length; i++) {
            var course = courses[i];
            addCourseToTable(course);
        }
        calculateGPA()

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
        let idx = $("<td></td>").text(count + 1);
        let name = $("<td></td>").text($course.title);
        let semester = $("<td></td>").text($course.semester);
        let grade = $("<td></td>").text($course.grade);

        tr.append(idx, name, semester, grade);

        $("#coursesrows").append(tr);
    }


    function cleanAndHideAddCourse() {
        $("#add-course").children(".input").val("");
        $("#add-course").hide();

    }

    function calculateGPA() {
        let points = 0
        $('#coursesrows td:last-child ').each(function () {
            let grade = parseInt($(this).text())
            if (grade > 90)
                points += 4;
            else if (grade > 80)
                points += 3;
            else if (grade > 70)
                points += 2;
            else if (grade > 60)
                points += 1;
            else if (grade > 50)
                points += 0.5;

        })

        let GPA = points / $("#coursesrows").children().length
        $("#gpa .strong").text(GPA);
    }
})