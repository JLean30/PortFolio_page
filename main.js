$(document).ready(function () {
    $('#init').click(function(){
        console.log("click");
        $('#container-profile').attr('hidden',false);
        $('#init-section').attr('hidden',true);
    });
});