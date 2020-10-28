

        $(document).ready(function() {
            $('.menu').on('click', function(){
                $('.download').removeClass('change');
		        $(this).toggleClass('change');
            });
        });
        $(function() { // Shorthand for $( document ).ready()
            $('.menu').on('click', function(){
                $('.download_link').removeClass('change');
                $('.munu_color').toggleClass('change');
                $('.munu_color .colors .colors_title p').toggleClass('animate__animated animate__zoomInRight');
                $('.munu_color .colors .red, .munu_color .colors .blue, .munu_color .colors .yellow, .munu_color .colors .green, .munu_color .colors .black').toggleClass('animate__animated animate__fadeInRight');
                $('.munu_color .colors .body_colors_title p').toggleClass('animate__animated animate__zoomInRight');
            });
        });
        $(document).ready(function() {
            $('.download').on('click', function(){
                $('.menu').removeClass('change');
		        $(this).toggleClass('change');
                $('.munu_color .colors .colors_title p').removeClass('animate__animated animate__zoomInRight');
                $('.munu_color .colors .red, .munu_color .colors .blue, .munu_color .colors .yellow, .munu_color .colors .green, .munu_color .colors .black').removeClass('animate__animated animate__fadeInRight');
                $('.munu_color .colors .body_colors_title p').removeClass('animate__animated animate__zoomInRight');
            });
        });
        $(function() { // Shorthand for $( document ).ready()
            $('.download').on('click', function(){
                $('.munu_color').removeClass('change');
		        $('.download_link').toggleClass('change');
            });
        });
        $(function() { 
            $('.red').on('click', function(){
		        $('i, .bold, .regular').toggleClass('set_red');
                $('i, .bold, .regular').removeClass(' set_yellow set_green set_black set_blue');
            });
        });

        $(function() {
            $('.blue').on('click', function(){
		        $('i, .bold, .regular').toggleClass('set_blue');
                $('i, .bold, .regular').removeClass('set_red set_yellow set_green set_black ');
            });
        });

        $(function() {
            $('.yellow').on('click', function(){
		        $('i, .bold, .regular').toggleClass('set_yellow');
                $('i, .bold, .regular').removeClass('set_red set_green set_black set_blue');
            });
        });
        $(function() {
            $('.green').on('click', function(){
		        $('i, .bold, .regular').toggleClass('set_green');
                $('i, .bold, .regular').removeClass('set_red set_yellow set_black set_blue');
            });
        });

        $(function() {
            $('.black').on('click', function(){
		        $('i, .bold, .regular').toggleClass('set_black');
                $('i, .bold, .regular').removeClass('set_red set_yellow set_green set_blue');
            });
        });

        $(function() {
            $('#light').click(function() {
                if( $(this).is(':checked')) {
                    $('body').removeClass('change_body1');
                    $('body').addClass('change_body');
                }
            }); 
        }); 
        $(function() {
            $('#dark').click(function() {
                if( $(this).is(':checked')) {
                    $('body').removeClass('change_body');
                    $('body').addClass('change_body1');
                }
            }); 
        });
 