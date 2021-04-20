   /// some script
        
        // jquery ready start
        $(document).ready(function() {
            // jQuery code
            //////////////////////// Prevent closing from click inside dropdown
            $(document).on('click', '.dropdown-menu', function (e) {
              e.stopPropagation();
            });
        
            if ($(window).width() < 992) {
        
                  $('.has-submenu a').click(function(e){
                      e.preventDefault();
                    $(this).next('.megasubmenu').toggle();
        
                    $('.dropdown').on('hide.bs.dropdown', function () {
                       $(this).find('.megasubmenu').hide();
                    })
                  });
        
            }
        
            
        }); // jquery end

         /// some script
            
            // jquery ready start
            $(document).ready(function() {
                // jQuery code
            
                // add padding top to show content behind navbar
                $('body').css('padding-top', $('.navbar').outerHeight() + 'px')
            
                //////////////////////// detect scroll top or down
                if ($('.smart-scroll').length > 0) { // check if element exists
                     var last_scroll_top = 0;
                    $(window).on('scroll', function() {
                        scroll_top = $(this).scrollTop();
                        if(scroll_top < last_scroll_top) {
                            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
                        }
                        else {
                            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
                        }
                        last_scroll_top = scroll_top;
                    });
                }
            
                
            }); // jquery end