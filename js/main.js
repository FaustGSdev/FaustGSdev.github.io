
$( function() {

    // init variable
    var room;
    var room_comfort;
    var check_choose = [];
    var i = 0;
    var result = $('.result-box').find('.result');
    // room 2
    var choose_1 = ['fireplace'],
        choose_2 = ['fireplace', 'terrace'],
        choose_3 = ['terrace'],
        choose_4 = ['boiler'],
        choose_5 = ['boiler', 'fireplace'],
        choose_6 = ['boiler', 'fireplace', 'terrace'],
        choose_7 = ['fireplace', 'terrace', 'hamam'],
        choose_8 = ['terrace', 'boiler'],
        choose_9 = ['terrace', 'boiler', 'fireplace', 'hamam'],
        choose_10 = ['boiler', 'hamam'],
        choose_11 = ['boiler', 'hamam', 'fireplace'],
        choose_12 = ['boiler', 'hamam', 'terrace'],
        choose_13 = ['dressing', 'boiler', 'hamam', 'fireplace'],
        choose_14 = ['dressing', 'boiler', 'hamam'],
        choose_15 = ['dressing', 'boiler', 'fireplace'],
        choose_16 = ['dressing', 'boiler'],
        choose_17 = ['dressing', 'hamam', 'fireplace'],
        choose_18 = ['dressing', 'hamam'],
        choose_19 = ['dressing', 'fireplace'],
        choose_20 = ['dressing'],
      choose_21 = ['boiler', 'fireplace', 'hamam', 'terrace', 'dressing'],
      choose_22 = ['boiler', 'hamam', 'terrace', 'dressing'],
      choose_23 = ['boiler', 'terrace', 'dressing', 'fireplace'],
      choose_24 = ['boiler', 'terrace', 'dressing'];

    // init choose room
    function changeResult() {
        if(room == 'room2' && room_comfort == 'standart') {
            result.html('63 м2');
            $('.checkbox-list').find('input').each(function(){
                if($(this).attr('id') == 'terrace' && $(this).attr('checked') == 'checked') {
                    result.html('63 м2 с террасой');
                }
            });
        }
        if(room == 'room2' && room_comfort == 'comfort') {
            result.html('96 м2');
            $('.checkbox-list').find('input').each(function(){
                if($(this).attr('id') == 'boiler') {
                    if($.inArray( $(this).attr('id'), check_choose ) == -1) {
                        check_choose[i] = $(this).attr('id');
                        i++;
                    }
                    $(this).attr('checked', true);
                }
                if($(this).attr('id') == 'terrace' && $(this).attr('checked') == 'checked') {
                    result.html('96 м2 с террасой');
                }
            });
            console.log(check_choose);
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
            // result.html('93');
        }
        if(room == 'room3' && room_comfort == 'comfort') {
            $('.checkbox-list').find('input').each(function(){
                if($(this).attr('id') == 'terrace' && $(this).attr('checked') == 'checked') {
                    result.html('96 м2');
                }
                if($(this).attr('id') == "bathroom" && $(this).attr('checked') == 'checked') {
                    result.html('112 м2');
                }
                if($(this).attr('id') == "kitchen" && $(this).attr('checked') == 'checked') {
                    result.html('112 м2');
                }
                if($(this).attr('id') == "boiler" && $(this).attr('checked') == 'checked') {
                    result.html('112 м2');
                }
                if($(this).attr('id') == "dressing" && $(this).attr('checked') == 'checked') {
                    result.html('134 м2');
                }
            });
            // result.html('Нету данных от заказчика!');
        }
    }

    // init room checked
    $('.room-check').find('input').each(function(){
        if($(this).prop('checked')) {
            room = $(this).attr('id');
            console.log(room);
        }
        changeResult();
    });
    $('.room-comfort').find('input').each(function(){
        if($(this).prop('checked')) {
            room_comfort = $(this).attr('id');
            console.log(room_comfort);
        }
        changeResult();
    });
    $('.room-check').find('input').change(function() {
        room = $(this).attr('id');
        console.log(room);
        changeResult();
    });
    $('.room-comfort').find('input').change(function() {
        room_comfort = $(this).attr('id');
        console.log(room_comfort);
        changeResult();
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
        console.log(check_choose);
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

        // Choose Room 2
        if(room == 'room2' && room_comfort == 'standart') {
            if(check_choose.length == 0) { result.html('63 м2'); }
            // камин
            if(check_choose.toString() == choose_1.toString()) { result.html('63 м2'); }
            // камин, терраса
            if(check_choose.toString() == choose_2.toString()) { result.html('63 м2 с террасой'); }
            // терраса
            if(check_choose.toString() == choose_3.toString()) { result.html('63 м2 с террасой'); }
            // котельная
            // котельная, камин
            // котельная, камин, терраса
            // хамам, камин, терраса
            // котельная, терраса
            // котельная, камин, терраса, хамам
            // котельная, хамам
            // котельная, камин, хамам
            // котельная, хамам, терраса
            if(
              check_choose.toString() == choose_4.toString() ||
              check_choose.toString() == choose_5.toString() ||
              check_choose.toString() == choose_6.toString() ||
              check_choose.toString() == choose_7.toString() ||
              check_choose.toString() == choose_8.toString() ||
              check_choose.toString() == choose_9.toString() ||
              check_choose.toString() == choose_10.toString() ||
              check_choose.toString() == choose_11.toString() ||
              check_choose.toString() == choose_12.toString()
                ) { result.html('73 м2'); }
            // котельная, камин, хамам, гардеробная при спальне
            // котельная, хамам, гардеробная при спальне
            // котельная, камин, гардеробная при спальне
            // котельная, гардеробная при спальне
            // камин, хамам, гардеробная при спальне
            // хамам, гардеробная при спальне
            // камин, гардеробная при спальне
            // гардеробная при спальне
            if(
              check_choose.toString() == choose_13.toString() ||
              check_choose.toString() == choose_14.toString() ||
              check_choose.toString() == choose_15.toString() ||
              check_choose.toString() == choose_16.toString() ||
              check_choose.toString() == choose_17.toString() ||
              check_choose.toString() == choose_18.toString() ||
              check_choose.toString() == choose_19.toString() ||
              check_choose.toString() == choose_20.toString()
            ) { result.html('82 м2'); }
            // котельная, камин, хамам, гардеробная при спальне, терраса
            // котельная, хамам, гардеробная при спальне, терраса
            // котельная, камин, гардеробная при спальне, терраса
            // котельная, гардеробная при спальне, терраса
            if(
              check_choose.toString() == choose_21.toString() ||
              check_choose.toString() == choose_22.toString() ||
              check_choose.toString() == choose_23.toString() ||
              check_choose.toString() == choose_24.toString()
            ) { result.html('82 м2 с террасой'); }
        }
        if(room == 'room2' && room_comfort == 'comfort') {
            $('.checkbox-list').find('input').each(function(){
                if($(this).attr('id') == 'terrace' && $(this).attr('checked') == 'checked') {
                    result.html('96 м2 с террасой');
                } else {
                    result.html('96 м2');
                }
            });
            $('.checkbox-list').find('input').change(function() {
                if($(this).attr('id') == 'terrace') {
                    result.html('96 м2 с террасой');
                } else {
                    result.html('96 м2');
                }
            });
        }
        if(room == 'room3' && room_comfort == 'standart') {
            $('.checkbox-list').find('input').each(function(){
                if($(this).attr('id') == 'terrace' && $(this).attr('checked') == 'checked') {
                    result.html('96 м2');
                }
                if($(this).attr('id') == "bathroom" && $(this).attr('checked') == 'checked') {
                    result.html('112 м2');
                }
                if($(this).attr('id') == "kitchen" && $(this).attr('checked') == 'checked') {
                    result.html('112 м2');
                }
                if($(this).attr('id') == "boiler" && $(this).attr('checked') == 'checked') {
                    result.html('112 м2');
                }
                if($(this).attr('id') == "dressing" && $(this).attr('checked') == 'checked') {
                    result.html('134 м2');
                }
            });
            $('.checkbox-list').find('input').change(function() {
                if($(this).attr('id') == 'terrace') {
                    result.html('96 м2');
                }
                if($(this).attr('id') == "bathroom") {
                    result.html('112 м2');
                }
                if($(this).attr('id') == "kitchen") {
                    result.html('112 м2');
                }
                if($(this).attr('id') == "boiler") {
                    result.html('112 м2');
                }
                if($(this).attr('id') == "dressing") {
                    result.html('134 м2');
                }
            });
        }
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