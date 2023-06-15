
$( function() {

    // init variable
    var room;
    var room_comfort;
    var check_choose = [];
    var i = 0;

    // init choose room
    function changeResult() {
        if(room == 'room2' && room_comfort == 'standart') {
            $('.result-box').find('.result').html('63');
        }
        if(room == 'room2' && room_comfort == 'comfort') {
            $('.checkbox-list').find('input').each(function(){
                if($(this).attr('id') == 'boiler') {
                    if($.inArray( $(this).attr('id'), check_choose ) == -1) {
                        check_choose[i] = $(this).attr('id');
                        i++;
                    }
                    $(this).attr('checked', true);
                }
            });
            console.log(check_choose);
            // $('.result-box').find('.result').html('96');
        }
        if(room == 'room3' && room_comfort == 'standart') {
            $('.checkbox-list').find('input').each(function(){
                if($(this).attr('id') == 'terrace' || $(this).attr('id') == 'dressing') {
                    if($.inArray( $(this).attr('id'), check_choose ) == -1) {
                        check_choose[i] = $(this).attr('id');
                        i++;
                    }
                    $(this).attr('checked', true);
                }
            });
            console.log(check_choose);
            // $('.result-box').find('.result').html('93');
        }
        if(room == 'room3' && room_comfort == 'comfort') {
            $('.checkbox-list').find('input').each(function(){
                //$(this).attr('checked', false);
            });
            // $('.result-box').find('.result').html('Нету данных от заказчика!');
        }
    }

    // init room checked
    $('.room-check').find('input').each(function(){
        if($(this).prop('checked')) {
            room = $(this).attr('id');
            console.log(room);
        }
    });
    $('.room-comfort').find('input').each(function(){
        if($(this).prop('checked')) {
            room_comfort = $(this).attr('id');
            console.log(room_comfort);
        }
    });
    $('.room-check').find('input').change(function() {
        room = $(this).attr('id');
        console.log(room);
        changeResult()
    });
    $('.room-comfort').find('input').change(function() {
        room_comfort = $(this).attr('id');
        console.log(room_comfort);
        changeResult()
    });
    changeResult();

    // change components
    $('.checkbox-list').find('input').change(function() {
        $('.checkbox-list').find('input:checked').each(function(index , value){
            if($.inArray( $(this).attr('id'), check_choose ) == -1) {
                check_choose[i] = $(this).attr('id');
                i++;
            }
        });
        if($(this).prop('checked') == 0) {
            var this_id = $(this).attr('id');
            if($.inArray( this_id, check_choose ) !== -1) {
                check_choose.forEach(function(item, i){
                    if(item == this_id){
                        check_choose.splice(i, 1);
                    }
                });
                i--;
            }
        }
        console.log(check_choose);
    });




    // Steps
    $('.roofing-list').find('input').change(function() {
        $('.roofing-list').parents('.main-step').find('.btn-next').attr('disabled', false);
    });
    $('.facade-list').find('input').change(function() {
        $('.facade-list').parents('.main-step').find('.btn-next').attr('disabled', false);
    });
    $('.interior-list').find('input').change(function() {
        $('.interior-list').parents('.main-step').find('.btn-next').attr('disabled', false);
    });

    // ** nav btn step
    var activeStep;
    $('.btn-next').on('click touchstart', function (){
        activeStep = $('.steps').find('.main-step.step-active').data('id');
        var nextStep = $('.steps').find('.main-step.step-active').next().data('id');
        $('.main-step.step-active').removeClass('step-active');
        $('.steps').find('.main-step').each(function(){
            if($(this).data('id') == nextStep) {
                $(this).addClass('step-active');
            }
        });
    });
    $('.btn-prev').on('click touchstart', function (){
        activeStep = $('.steps').find('.main-step.step-active').data('id');
        var prevStep = $('.steps').find('.main-step.step-active').prev().data('id');
        $('.main-step.step-active').removeClass('step-active');
        $('.steps').find('.main-step').each(function(){
            if($(this).data('id') == prevStep) {
                $(this).addClass('step-active');
            }
        });
    });


    // if(radio){
    //     radio.addClass('error');
    //     error++;
    //     radio.each(function(){
    //         if($(this).prop('checked')) {
    //             modelSex = $(this).val();
    //             radio.removeClass('error');
    //             radio.addClass('valid');
    //             error--;
    //         }
    //     });
    // }
    // if(age == "0-3") {
    //     $('.baby').addClass('active');
    // }
    // if(modelSex == "Female") {
    //     $('.female').each(function(){
    //         if($(this).data('age') == age) {
    //             $(this).addClass('active');
    //         }
    //     });
    // }
    // if($('#search').is(':focus') && !$('.search-drop').hasClass('active')) {
    //     $('.search-drop').addClass('active');
    //     $('g.active-holder g').removeClass('show');
    //     if ( $('.part-holder').css('display') == 'block' ) {
    //         $('.part-holder').fadeOut();
    //         $('.body-img').removeClass('active');
    //     }
    // }
} );