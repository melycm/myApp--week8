$(function() {

    $.get('/api', function (date){
        updateFeedback(data);
    });

    $('.feedback-form').submit(function(e){
        e.preventDefault();

        console.log('Hello world')

        $.post('api',{
            name: $('#feedback-form-name').val(),
            title: $$('#feedback-form-title').val(),
            message: $('#feedback-form-message').val(),
        },updateFeedback)
    })


    function updateFeedback(data) {
        var output = " ";
        $.each(data, function(ley, item){

        })
}})