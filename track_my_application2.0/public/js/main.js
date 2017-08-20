$(document).ready(function () {
    $('.deleteJob').on('click', function deleteJob() {
        var confirmation = confirm('are you sure?');

        if (confirmation) {

            $.ajax({
                type: 'Delete',
                url: "/jobs/delete/" + $(this).data('id')

            }).done(function (response) {
                window.location.replace('/');
            });

            window.location.replace('/');

        } else {
            console.log("Error here");
            return false;
        }
    });
});



