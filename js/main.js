
$( function() {

    // init variable
    var room;
    var room_comfort;
    var check_choose = [];
    var i = 0;
    var resultImg = $('.result-box').find('img');
    var result = $('.result-box').find('.result');
    // room 2 = standart
    var choose_1 = ['fireplace'],
        choose_2 = ['fireplace', 'terrace'],
        choose_3 = ['terrace'],
        choose_4 = ['boiler'],
        choose_5 = ['boiler', 'fireplace'],
        choose_6 = ['boiler', 'fireplace', 'terrace'],
        choose_7 = ['hamam', 'fireplace', 'terrace'],
        choose_8 = ['boiler', 'terrace'],
        choose_9 = ['boiler', 'hamam', 'fireplace', 'terrace'],
        choose_10 = ['boiler', 'hamam'],
        choose_11 = ['boiler', 'hamam', 'fireplace'],
        choose_12 = ['boiler', 'hamam', 'terrace'],
        choose_13 = ['boiler', 'hamam', 'dressing', 'fireplace'],
        choose_14 = ['boiler', 'hamam', 'dressing'],
        choose_15 = ['boiler', 'dressing', 'fireplace'],
        choose_16 = ['boiler', 'dressing'],
        choose_17 = ['hamam', 'dressing', 'fireplace'],
        choose_18 = ['hamam', 'dressing'],
        choose_19 = ['dressing', 'fireplace'],
        choose_20 = ['dressing'],
      choose_21 = ['boiler', 'hamam', 'dressing', 'fireplace', 'terrace'],
      choose_22 = ['boiler', 'hamam', 'dressing', 'terrace'],
      choose_23 = ['boiler', 'dressing', 'fireplace', 'terrace'],
      choose_24 = ['boiler', 'dressing', 'terrace'],
      choose_24_1 = ['dressing', 'terrace'],
    //room2 = comfort
      choose_25 = ['boiler', 'hamam', 'fireplace', 'bathroom'],
      choose_26 = ['boiler', 'bathroom'],
      choose_27 = ['boiler', 'kitchen'],
      choose_28 = ['boiler', 'hamam', 'bathroom'],
      choose_29 = ['boiler', 'bathroom', 'kitchen'],
      choose_30 = ['boiler', 'fireplace', 'bathroom'],
      choose_31 = ['boiler', 'hamam', 'kitchen'],
      choose_32 = ['boiler', 'fireplace', 'kitchen'],
      choose_33 = ['boiler', 'hamam', 'bathroom', 'kitchen'],
      choose_34 = ['boiler', 'fireplace', 'bathroom', 'kitchen'],
      choose_35 = ['boiler', 'hamam', 'fireplace', 'bathroom'],
      choose_36 = ['boiler', 'hamam', 'fireplace', 'kitchen'],
      //
      choose_37 = ['boiler', 'hamam', 'fireplace', 'bathroom', 'terrace', 'kitchen'],
      choose_38 = ['boiler', 'bathroom', 'terrace'],
      choose_39 = ['boiler', 'terrace', 'kitchen'],
      choose_40 = ['boiler', 'hamam', 'bathroom', 'terrace'],
      choose_41 = ['boiler', 'bathroom', 'terrace', 'kitchen'],
      choose_42 = ['boiler', 'fireplace', 'bathroom', 'terrace'],
      choose_43 = ['boiler', 'hamam', 'terrace', 'kitchen'],
      choose_44 = ['boiler', 'fireplace', 'terrace', 'kitchen'],
      choose_45 = ['boiler', 'hamam', 'bathroom', 'terrace', 'kitchen'],
      choose_46 = ['boiler', 'fireplace', 'bathroom', 'terrace', 'kitchen'],
      choose_47 = ['boiler', 'hamam', 'fireplace', 'bathroom', 'terrace'],
      choose_48 = ['boiler', 'hamam', 'fireplace', 'terrace', 'kitchen'],
      // 105
      choose_49 = ['boiler', 'hamam', 'dressing', 'fireplace', 'bathroom', 'terrace', 'kitchen'],
      choose_50 = ['boiler', 'dressing', 'bathroom'],
      choose_51 = ['boiler', 'bathroom', 'terrace'],
      choose_52 = ['boiler', 'dressing', 'bathroom', 'terrace'],
      choose_53 = ['boiler', 'dressing', 'kitchen'],
      choose_54 = ['boiler', 'terrace', 'kitchen'],
      choose_55 = ['boiler', 'dressing', 'terrace', 'kitchen'],
      choose_56 = ['boiler', 'hamam', 'dressing'],
      choose_57 = ['boiler', 'hamam', 'terrace'],
      choose_58 = ['boiler', 'hamam', 'dressing', 'terrace'],
      choose_59 = ['boiler', 'dressing', 'fireplace'],
      choose_60 = ['boiler', 'fireplace', 'terrace'],
      choose_61 = ['boiler', 'dressing', 'fireplace', 'terrace'],
      choose_62 = ['boiler', 'hamam', 'dressing', 'bathroom'],
      choose_63 = ['boiler', 'hamam', 'bathroom', 'terrace'],
      choose_64 = ['boiler', 'hamam', 'dressing', 'bathroom', 'terrace'],
      choose_65 = ['boiler', 'dressing', 'bathroom', 'kitchen'],
      choose_66 = ['boiler', 'bathroom', 'terrace', 'kitchen'],
      choose_67 = ['boiler', 'dressing', 'bathroom', 'terrace', 'kitchen'],
      choose_68 = ['boiler', 'dressing', 'fireplace', 'bathroom'],
      choose_69 = ['boiler', 'fireplace', 'bathroom', 'terrace'],
      choose_70 = ['boiler', 'dressing', 'fireplace', 'bathroom', 'terrace'],
      choose_71 = ['boiler', 'hamam', 'dressing', 'kitchen'],
      choose_72 = ['boiler', 'hamam', 'terrace', 'kitchen'],
      choose_73 = ['boiler', 'hamam', 'dressing', 'terrace', 'kitchen'],
      choose_74 = ['boiler', 'dressing', 'fireplace', 'kitchen'],
      choose_75 = ['boiler', 'fireplace', 'terrace', 'kitchen'],
      choose_76 = ['boiler', 'dressing', 'fireplace', 'terrace', 'kitchen'],
      choose_77 = ['boiler', 'hamam', 'dressing', 'fireplace'],
      choose_78 = ['boiler', 'hamam', 'fireplace', 'terrace'],
      choose_79 = ['boiler', 'hamam', 'dressing', 'fireplace', 'terrace'],
      choose_80 = ['boiler', 'hamam', 'dressing', 'bathroom', 'kitchen'],
      choose_81 = ['boiler', 'hamam', 'bathroom', 'terrace', 'kitchen'],
      choose_82 = ['boiler', 'hamam', 'dressing', 'bathroom', 'terrace', 'kitchen'],
      choose_83 = ['boiler', 'dressing', 'fireplace', 'bathroom', 'kitchen'],
      choose_84 = ['boiler', 'fireplace', 'bathroom', 'terrace', 'kitchen'],
      choose_85 = ['boiler', 'dressing', 'fireplace', 'bathroom', 'terrace', 'kitchen'],
      choose_86 = ['boiler', 'hamam', 'dressing', 'fireplace', 'bathroom'],
      choose_87 = ['boiler', 'hamam', 'fireplace', 'bathroom', 'terrace'],
      choose_88 = ['boiler', 'hamam', 'dressing', 'fireplace', 'bathroom', 'terrace'],
      choose_89 = ['boiler', 'hamam', 'dressing', 'fireplace', 'kitchen'],
      choose_90 = ['boiler', 'hamam', 'fireplace', 'terrace', 'kitchen'],
      choose_91 = ['boiler', 'hamam', 'dressing', 'fireplace', 'terrace', 'kitchen'];


    // init room checked
    $('.room-check').find('input').each(function(){
        if($(this).prop('checked')) {
            room = $(this).attr('id');
        }
    });
    $('.room-comfort').find('input').each(function(){
        if($(this).prop('checked')) {
            room_comfort = $(this).attr('id');
        }
    });
    $('.room-check').find('input').change(function() {
        if(room == 'room3' && room_comfort == 'comfort' && $(this).attr('id') =='room2') {
            $('#boiler').prop('checked', false);
        }
        $('#kitchen').prop('checked', false);
        $('#bathroom').prop('checked', false);
        $('#office').prop('checked', false);
        room = $(this).attr('id');
        if(room == 'room3') {
            $('#office').prop('disabled', true);
        } else {
            $('#office').prop('disabled', false);
        }
        saveComponent();
        changeResult();
    });
    $('.room-comfort').find('input').change(function() {
        $(this).prop('checked', true);
        if(room == 'room3' && room_comfort == 'comfort' && $(this).attr('id') =='standart') {
            $('#boiler').prop('checked', false);
        }
        room_comfort = $(this).attr('id');
        $('#kitchen').prop('checked', false);
        $('#bathroom').prop('checked', false);
        $('#office').prop('checked', false);
        if(room == 'room2' && $(this).attr('id') == 'comfort') {
            $('.checkbox-list').find('input').each(function(index){
                if($(this).attr('id') == 'boiler' && $(this).prop('checked') == 0) {
                    $(this).prop('checked', true);
                }
            });
        }
        if(room == 'room3' && $(this).attr('id') == 'standart') {
            $('.checkbox-list').find('input').each(function(){
                if($(this).attr('id') == 'terrace' && !$(this).prop('checked') || $(this).attr('id') == 'dressing' && !$(this).prop('checked')) {
                    saveComponent();
                    $(this).prop('checked', true);
                }
                if($(this).attr('id') == "kitchen" && $(this).prop('checked') ||
                  $(this).attr('id') == "boiler" && $(this).prop('checked') ||
                  $(this).attr('id') == "bathroom" && $(this).prop('checked')
                ) {
                    $('.room-comfort').find('input').each(function(){
                        if($(this).attr('id') == 'comfort') {
                            $(this).prop('checked', true);
                            room_comfort = $(this).attr('id');
                        }
                    });
                }
            });
        }
        saveComponent();
        changeResult();
    });
    saveComponent();
    changeResult();

    // change components
    $('.checkbox-list').find('input').change(function() {
        if(room == 'room3' && room_comfort == 'standart') {
            if($(this).attr('id') == "kitchen" && $(this).prop('checked') ||
              $(this).attr('id') == "boiler" && $(this).prop('checked') ||
              $(this).attr('id') == "bathroom" && $(this).prop('checked')
            ) {
                console.log('click');
                $('.room-comfort').find('input').each(function(){
                    if($(this).attr('id') == 'comfort') {
                        $(this).prop('checked', true);
                        room_comfort = $(this).attr('id');
                    }
                });
            }
        }
        if($(this).prop('checked') == 0) {
            var this_id = $(this).attr('id');
            if($.inArray( this_id, check_choose ) !== -1) {
                check_choose.forEach(function(item, i){
                    if(item == this_id){
                        check_choose.splice(i, 1);
                    }
                });
                //i--;
            }
        }
        saveComponent();
        changeResult();
    });

    // init choose room
    function changeResult() {
        console.log(room);
        console.log(room_comfort);
        console.log(check_choose);
        $('.checkbox-list').find('input').each(function(){
            if($(this).attr('id') == 'office' && $(this).prop('checked')) {
                $('.room-check').find('input').each(function(){
                    if($(this).attr('id') == 'room3') {
                        $(this).prop('checked', true);
                        room = $(this).attr('id');
                    }
                });
                $('.room-comfort').find('input').each(function(){
                    if($(this).attr('id') == 'standart') {
                        $(this).prop('checked', true);
                        room_comfort = $(this).attr('id');
                    }
                });
            }
        });
        if(room == 'room2' && room_comfort == 'standart') {
            result.html('63 м2');
            resultImg.attr('src', 'image/63.jpg');
            $('.checkbox-list').find('input').each(function(){
                if($(this).attr('id') == 'bathroom' && $(this).prop('checked')) {
                    $('.room-comfort').find('input').each(function(){
                        if($(this).attr('id') == 'standart') {
                            $(this).prop('checked', true);
                            room_comfort = $(this).attr('id');
                        }
                    });
                }

                // пусто
                // камин
                if(check_choose.length == 0 ||
                  check_choose.toString() == choose_1.toString()) {
                    result.html('63 м2');
                    resultImg.attr('src', 'image/63.jpg');
                }
                // камин, терраса
                // терраса
                if(check_choose.toString() == choose_2.toString() ||
                  check_choose.toString() == choose_3.toString()) {
                    result.html('63 м2 с террасой');
                    resultImg.attr('src', 'image/63-terrace.jpg');
                }

                // котельная, камин, терраса
                // хамам, камин, терраса
                // котельная, терраса
                // котельная, камин, терраса, хамам
                // котельная, хамам, терраса
                if(
                  check_choose.toString() == choose_6.toString() ||
                  check_choose.toString() == choose_7.toString() ||
                  check_choose.toString() == choose_8.toString() ||
                  check_choose.toString() == choose_9.toString() ||
                  check_choose.toString() == choose_12.toString()
                ) {
                    result.html('73 м2 с террасой');
                    resultImg.attr('src', 'image/73.jpg');
                }
                // котельная
                // котельная, камин
                // котельная, хамам
                // котельная, камин, хамам
                if(
                  check_choose.toString() == choose_4.toString() ||
                  check_choose.toString() == choose_5.toString() ||
                  check_choose.toString() == choose_10.toString() ||
                  check_choose.toString() == choose_11.toString()
                ) {
                    result.html('73 м2');
                    resultImg.attr('src', 'image/73.jpg');
                }
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
                ) {
                    result.html('82 м2');
                    resultImg.attr('src', 'image/81.66.jpg');
                }
                // котельная, камин, хамам, гардеробная при спальне, терраса
                // котельная, хамам, гардеробная при спальне, терраса
                // котельная, камин, гардеробная при спальне, терраса
                // котельная, гардеробная при спальне, терраса
                if(
                  check_choose.toString() == choose_21.toString() ||
                  check_choose.toString() == choose_22.toString() ||
                  check_choose.toString() == choose_23.toString() ||
                  check_choose.toString() == choose_24.toString() ||
                  check_choose.toString() == choose_24_1.toString()
                ) {
                    result.html('82 м2 с террасой');
                    resultImg.attr('src', 'image/93.jpg');
                }
            });
        }
        if(room == 'room2' && room_comfort == 'comfort') {
            result.html('96 м2');
            resultImg.attr('src', 'image/95.70.jpg');
            $('.checkbox-list').find('input').each(function(index){
                if($(this).attr('id') == 'boiler' && !$(this).prop('checked')) {
                    $(this).prop('checked', true);
                }

                // котельная (авто)
                // котельная (авто), хоз санузел, черная кухня, хамам, камин
                // котельная (авто), хоз санузел
                // котельная (авто), черная кухня
                // котельная (авто), хамам
                // котельная (авто), камин
                // котельная (авто), хоз санузел, хамам
                // котельная (авто), хоз санузел, черная кухня
                // котельная(авто), хоз санузел, камин
                // котельная(авто), черная кухня, хамам
                // котельная(авто), черная кухня, камин
                // котельная(авто), хамам, камин
                // котельная(авто), хоз санузел, черная кухня, хамам
                // котельная(авто), хоз санузел, черная кухня, камин
                // котельная(авто), хоз санузел, хамам, камин
                // котельная(авто), черная кухня, хамам, камин
                if(
                  check_choose.toString() == choose_4.toString() ||
                  check_choose.toString() == choose_25.toString() ||
                  check_choose.toString() == choose_26.toString() ||
                  check_choose.toString() == choose_27.toString() ||
                  check_choose.toString() == choose_5.toString() ||
                  check_choose.toString() == choose_10.toString() ||
                  check_choose.toString() == choose_11.toString() ||
                  check_choose.toString() == choose_28.toString() ||
                  check_choose.toString() == choose_29.toString() ||
                  check_choose.toString() == choose_30.toString() ||
                  check_choose.toString() == choose_31.toString() ||
                  check_choose.toString() == choose_32.toString() ||
                  check_choose.toString() == choose_33.toString() ||
                  check_choose.toString() == choose_34.toString() ||
                  check_choose.toString() == choose_35.toString() ||
                  check_choose.toString() == choose_36.toString()
                ) {
                    result.html('96 м2');
                    resultImg.attr('src', 'image/95.70.jpg');
                }

                // котельная (авто), терраса
                // котельная (авто), хоз санузел, черная кухня, хамам, камин, терраса
                // котельная (авто), хоз санузел, терраса
                // котельная (авто), черная кухня, терраса
                // котельная (авто), хамам, терраса
                // котельная (авто), камин, терраса
                // котельная (авто), хоз санузел, хамам, терраса
                // котельная (авто), хоз санузел, черная кухня, терраса
                // котельная(авто), хоз санузел, камин, терраса
                // котельная(авто), черная кухня, хамам, терраса
                // котельная(авто), черная кухня, камин, терраса
                // котельная(авто), хамам, камин, терраса
                // котельная(авто), хоз санузел, черная кухня, хамам, терраса
                // котельная(авто), хоз санузел, черная кухня, камин, терраса
                // котельная(авто), хоз санузел, хамам, камин, терраса
                // котельная(авто), черная кухня, хамам, камин, терраса
                if(
                  check_choose.toString() == choose_8.toString() ||
                  check_choose.toString() == choose_37.toString() ||
                  check_choose.toString() == choose_38.toString() ||
                  check_choose.toString() == choose_39.toString() ||
                  check_choose.toString() == choose_6.toString() ||
                  check_choose.toString() == choose_12.toString() ||
                  check_choose.toString() == choose_40.toString() ||
                  check_choose.toString() == choose_41.toString() ||
                  check_choose.toString() == choose_42.toString() ||
                  check_choose.toString() == choose_43.toString() ||
                  check_choose.toString() == choose_44.toString() ||
                  check_choose.toString() == choose_9.toString() ||
                  check_choose.toString() == choose_45.toString() ||
                  check_choose.toString() == choose_46.toString() ||
                  check_choose.toString() == choose_47.toString() ||
                  check_choose.toString() == choose_48.toString()
                ) {
                    result.html('96 м2 с террасой');
                    resultImg.attr('src', 'image/95-terrace.jpg');
                }

                // 105
                if(
                  check_choose.toString() == choose_49.toString() ||
                  check_choose.toString() == choose_50.toString() ||
                  check_choose.toString() == choose_51.toString() ||
                  check_choose.toString() == choose_52.toString() ||
                  check_choose.toString() == choose_53.toString() ||
                  check_choose.toString() == choose_54.toString() ||
                  check_choose.toString() == choose_55.toString() ||
                  check_choose.toString() == choose_56.toString() ||
                  check_choose.toString() == choose_57.toString() ||
                  check_choose.toString() == choose_58.toString() ||
                  check_choose.toString() == choose_59.toString() ||
                  check_choose.toString() == choose_60.toString() ||
                  check_choose.toString() == choose_61.toString() ||
                  check_choose.toString() == choose_62.toString() ||
                  check_choose.toString() == choose_63.toString() ||
                  check_choose.toString() == choose_64.toString() ||
                  check_choose.toString() == choose_65.toString() ||
                  check_choose.toString() == choose_66.toString() ||
                  check_choose.toString() == choose_67.toString() ||
                  check_choose.toString() == choose_68.toString() ||
                  check_choose.toString() == choose_69.toString() ||
                  check_choose.toString() == choose_70.toString() ||
                  check_choose.toString() == choose_71.toString() ||
                  check_choose.toString() == choose_72.toString() ||
                  check_choose.toString() == choose_73.toString() ||
                  check_choose.toString() == choose_74.toString() ||
                  check_choose.toString() == choose_75.toString() ||
                  check_choose.toString() == choose_76.toString() ||
                  check_choose.toString() == choose_77.toString() ||
                  check_choose.toString() == choose_78.toString() ||
                  check_choose.toString() == choose_79.toString() ||
                  check_choose.toString() == choose_80.toString() ||
                  check_choose.toString() == choose_81.toString() ||
                  check_choose.toString() == choose_82.toString() ||
                  check_choose.toString() == choose_83.toString() ||
                  check_choose.toString() == choose_84.toString() ||
                  check_choose.toString() == choose_85.toString() ||
                  check_choose.toString() == choose_86.toString() ||
                  check_choose.toString() == choose_87.toString() ||
                  check_choose.toString() == choose_88.toString() ||
                  check_choose.toString() == choose_89.toString() ||
                  check_choose.toString() == choose_90.toString() ||
                  check_choose.toString() == choose_91.toString()
                ) {
                    result.html('105 м2');
                    resultImg.attr('src', 'image/106.jpg');
                }
            });
            console.log(check_choose);
        }
        if(room == 'room3' && room_comfort == 'standart') {
            result.html('93 м2');
            resultImg.attr('src', 'image/93.jpg');
            $('.checkbox-list').find('input').each(function(){
                if($(this).attr('id') == 'terrace' && !$(this).prop('checked') || $(this).attr('id') == 'dressing' && !$(this).prop('checked')) {
                    saveComponent();
                    $(this).prop('checked', true);
                }
                if($(this).attr('id') == "terrace" && $(this).prop('checked')){
                    result.html('93 м2 с террасой');
                }
                if($(this).attr('id') == "kitchen" && $(this).prop('checked') ||
                  $(this).attr('id') == "boiler" && $(this).prop('checked') ||
                  $(this).attr('id') == "bathroom" && $(this).prop('checked')
                ) {
                    $('.room-comfort').find('input').each(function(){
                        if($(this).attr('id') == 'comfort') {
                            $(this).prop('checked', true);
                            room_comfort = $(this).attr('id');
                        }
                    });
                }
            });
            console.log(check_choose);
        }
        if(room == 'room3' && room_comfort == 'comfort') {
            result.html('93 м2');
            resultImg.attr('src', 'image/93.jpg');
            $('.checkbox-list').find('input').each(function(){
                if($(this).attr('id') == "terrace" && $(this).prop('checked')){
                    result.html('93 м2 с террасой');
                }
                if($(this).attr('id') == "kitchen" && $(this).prop('checked') && $(this).attr('id') == "dressing" && !$(this).prop('checked') ||
                  $(this).attr('id') == "boiler" && $(this).prop('checked') && $(this).attr('id') == "dressing" && !$(this).prop('checked') ||
                  $(this).attr('id') == "bathroom" && $(this).prop('checked') && $(this).attr('id') == "dressing" && !$(this).prop('checked')
                ) {
                    result.html('112 м2');
                    resultImg.attr('src', 'image/111.jpg');
                    if($(this).attr('id') == 'terrace' && !$(this).prop('checked')) {
                        saveComponent();
                        $(this).prop('checked', true);
                    }
                }
                if($(this).attr('id') == "dressing" && $(this).prop('checked')) {
                    result.html('134 м2');
                    resultImg.attr('src', 'image/133.jpg');
                }
            });
            // result.html('Нету данных от заказчика!');
        }
    }

    // save components
    function saveComponent() {
        $('.checkbox-list').find('input:checked').each(function(index , value){
            if($.inArray( $(this).attr('id'), check_choose ) == -1) {
                check_choose[index] = $(this).attr('id');
                //i++;
            }
        });
    }



    // Steps
    $('.checkbox-list').find('input').change(function() {
        if($('.checkbox-list').find('input:checked').length != 0) {
            $('.checkbox-list').parents('.main-step').find('.btn-next').attr('disabled', false);
        } else {
            $('.checkbox-list').parents('.main-step').find('.btn-next').attr('disabled', true);
        }
    });
    $('.roofing-list').find('input').change(function() {
        $('.roofing-list').parents('.main-step').find('.btn-next').attr('disabled', false);
    });
    $('.facade-list').find('input').change(function() {
        $('.facade-list').parents('.main-step').find('.btn-next').attr('disabled', false);
    });
    $('.interior-list').find('input').change(function() {
        $('.interior-list').parents('.main-step').find('.btn-next').attr('disabled', false);
    });
    $('.payment-list').find('input').change(function() {
        $('.payment-list').parents('.main-step').find('.btn-next').attr('disabled', false);
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
    $('label i').hover(function (e){
        e.preventDefault();
        if($(this).parents('label').find('.info').css('display') == 'none'){
            $(this).parents('label').find('.info').show();
        } else {
            $(this).parents('label').find('.info').hide();
        }
    });
} );