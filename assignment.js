// put your javascript code here
$(document).ready(function () {
    //    Generate Templates
    var source = $("#main-template").html();
    var main_template = Handlebars.compile(source);

    source = $("#animals-template").html();
    var animals_template = Handlebars.compile(source);

    source = $("#single-animal-template").html();
    var single_animal_template = Handlebars.compile(source);

    //    Tabs Click
    $('#reptiles-tab').click(function () {
        $(".navbar-nav .active").removeClass("active");
        $("#reptiles-tab").addClass("active");
        $('#container').html(animals_template(animals_data.category[0]));

        setAnimalThumbnailClick(0);
    });
    $('#mammals-tab').click(function () {
        $(".navbar-nav .active").removeClass("active");
        $("#mammals-tab").addClass("active");
        $('#container').html(animals_template(animals_data.category[1]));

        setAnimalThumbnailClick(1);
    });
    $('#birds-tab').click(function () {
        $(".navbar-nav .active").removeClass("active");
        $("#birds-tab").addClass("active");
        $('#container').html(animals_template(animals_data.category[2]));

        setAnimalThumbnailClick(2);
    });
    $('.navbar-brand').click(function () {
        $(".navbar-nav .active").removeClass("active");
        $('#container').html(main_template);
    });


    function setAnimalThumbnailClick(cateIndex) {
        //animal click
        $('.animal-thumbnail').click(function () {
            var index = $(this).data("id");
            $('#container').html(single_animal_template(animals_data.category[cateIndex].animals[index]));

        });
    }

    // Initial main page
    $('.navbar-brand').click();

});
