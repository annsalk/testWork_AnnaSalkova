$(function () {
    $('[data-slider="modal__slider"]').slick({
        prevArrow: '<button class="slick-btn slick-prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"></button>',
        infinite: true,
        slideToShow: 1,
        slideToScroll: 1,
        fade: true,
        arrows: true,
        dots: false
    });

    let modal_close = $('[data-close]');
    modal_close.on('click', function (event) {
        event.preventDefault();
        let modal_parent = $(this).parents('.announcements__item');
        modal_parent.addClass('close');
        alert('Ваше объявление успешно закрыто');

    });

    $('.header__btn-logout').on('click', function () {
        $('.header__btn-personal_area').addClass('off');
        $('.header__btn-my__announcements').addClass('off');
        $('.header__btn-add').addClass('off');
        $('.header__btn-logout').addClass('off');
        $('.header__btn-login').addClass('active');
        $('.header__btn-register').addClass('active');
    });

    $('.btn-default').on('click', function () {
        $('.header__btn-personal_area').addClass('active');
        $('.header__btn-my__announcements').addClass('active');
        $('.header__btn-add').addClass('active');
        $('.header__btn-logout').addClass('active');
        $('.header__btn-login').addClass('off');
        $('.header__btn-register').addClass('off');
    });

    $(function (document, window, index) {
        'use strict';
        var inputs = document.querySelectorAll('.inputfile');
        Array.prototype.forEach.call(inputs, function (input) {
            var label = input.nextElementSibling,
                labelVal = label.innerHTML;

            input.addEventListener('change', function (e) {
                var fileName = '';
                if (this.files && this.files.length > 1)
                    fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                else
                    fileName = e.target.value.split('\\').pop();

                if (fileName)
                    label.querySelector('span').innerHTML = fileName;
                else
                    label.innerHTML = labelVal;
            });

            // Firefox bug fix
            input.addEventListener('focus', function () {
                input.classList.add('has-focus');
            });
            input.addEventListener('blur', function () {
                input.classList.remove('has-focus');
            });
        });
    }(document, window, 0));

    $("#file-1").on('change', function (event) {
        var file = event.target.files[0];
        if (file.size >= 10 * 1024 * 1024) {
            alert("Слишком тяжелый файл");
            return;
        }
    });

    $("#file-2").on('change', function (event) {
        var file = event.target.files[0];
        if (file.size >= 3 * 1024 * 1024) {
            alert("Слишком тяжелый файл");
            return;
        }
    });

    $('#myForm').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true
            }
        },
        messages: {
            email: {
                required: 'Заполните e-mail'
            },
            password: {
                required: 'Заполните пароль'
            }
        },
        submitHandler: function () {
            alert('Ошибка');
        }
    });

    $('#myFormReg').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true
            }
        },
        messages: {
            email: {
                required: 'Заполните e-mail'
            },
            password: {
                required: 'Заполните пароль'
            }
        },
        submitHandler: function () {
            alert('Ошибка');
        }
    });

    $('#myFormPers').validate({
        rules: {
            name: {
                required: true
            },
            city: {
                required: true
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 10
            }
        },
        messages: {
            name: {
                required: 'Заполните Имя'
            },
            city: {
                required: 'Укажите свой город'
            },
            phone: {
                required: 'Укажите свой мобильный телефон',
                minlength: 'Не валидный телефон',
                maxlength: 'Не валидный телефон'
            }
        },
        submitHandler: function () {
            alert('Ошибка');
        }
    });

    $('#myNew').validate({
        rules: {
            heading: {
                required: true
            },
            category: {
                required: true
            },
            about: {
                required: true
            },
            city: {
                required: true
            },
            price: {
                required: true,
                number: true
            }
        },
        messages: {
            heading: {
                required: 'Заполните Заголовок объявления'
            },
            category: {
                required: 'Выберите категорию'
            },
            about: {
                required: 'Заполните Описание объявления'
            },
            city: {
                required: 'Укажите свой город'
            },
            price: {
                required: 'Укажите цену',
                number: 'Цена должна быть целым числом'
            }
        },
        submitHandler: function () {
            alert('Ошибка');
        }
    });

    $('#myChange').validate({
        rules: {
            heading: {
                required: true
            },
            category: {
                required: true
            },
            about: {
                required: true
            },
            city: {
                required: true
            },
            price: {
                required: true,
                number: true
            }
        },
        messages: {
            heading: {
                required: 'Заполните Заголовок объявления'
            },
            category: {
                required: 'Выберите категорию'
            },
            about: {
                required: 'Заполните Описание объявления'
            },
            city: {
                required: 'Укажите свой город'
            },
            price: {
                required: 'Укажите цену',
                number: 'Цена должна быть целым числом'
            }
        },
        submitHandler: function () {
            alert('Ошибка');
        }
    });

});




