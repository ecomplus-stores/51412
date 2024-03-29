const header = {
    handleClickBtnToggleMenu(){
        if (window.innerWidth < 767) {
            $(document).on('click', '.header .header-bars', () => {
                $('body').toggleClass('menu-mobile-active');
            });
        }
    },

    handleUserLoginActions(){
        $('.header .header-account').removeClass('header-account-loading');

        if (ecomPassport.checkLogin()) {
            $('.header .header-account').addClass('header-account-logged-in-user');
        } else {
            $('.header .header-account').addClass('header-account-logged-out-user');
        }

        $('.header .header-account-content-user-name').html(ecomPassport.customer.display_name);

        $(document).on('click', '.header .header-account-open-user-popup', (e) => {
            e.preventDefault();
            $('#user-button')[0].click();
        });

        $(document).on('click', 'div#login-modal button.login-modal__logout.btn.btn-block.btn-danger', () => {
            $('.header .header-account').removeClass('header-account-logged-in-user').addClass('header-account-logged-out-user');
        });

        $(document).on('click', '.header .header-account-dropdown-buttons-logout', (e) => {
            e.preventDefault();

            if (window.innerWidth > 767) {
                if ($('div#login-modal button.login-modal__logout.btn.btn-block.btn-danger').length > 0) {
                    $('div#login-modal button.login-modal__logout.btn.btn-block.btn-danger')[0].click();
                }
            } else {
                utils.removeCookie('ecomPassportClient');
                localStorage.removeItem('ecomPassportClient');
                $('.header .header-account').removeClass('header-account-logged-in-user').addClass('header-account-logged-out-user');
            }
        });

        const send = XMLHttpRequest.prototype.send;
        
        XMLHttpRequest.prototype.send = function() { 
            this.addEventListener('load', function() {
                const URL = this.responseURL;
                
                if (URL.includes('https://passport.e-com.plus/') && URL.includes('token.json')) {
                    $('.header .header-account').removeClass('header-account-logged-out-user').addClass('header-account-logged-in-user');
                    $('.header .header-account-content-user-name').html(ecomPassport.customer.display_name);
                }
            });

            return send.apply(this, arguments);
        }

        if (window.innerWidth < 767) {
            $(document).on('click', '.header .header-account > a', (e) => {
                e.preventDefault();
                $(e.target).closest('.header-account').toggleClass('active');
            });

            $(document).on('click', '.header .header-account-backdrop, .header .header-account-dropdown-close', () => {
                $('.header-account').removeClass('active');
            });
        }
    },

    handleActionsCart(){
        if (window.innerWidth < 767) {
            $('.header .header-cart span#cart-count').html(ecomCart.data.items.length);

            ecomCart.on('save', ({ data }) => {
                console.log('event', data);
                console.log('event', data.items.length);
            });

            $(document).on('click', '#cart-button', event => {
                event.preventDefault();

                $('#cart-button').first()[0].click();
            })
        }
    },

    init() {
        this.handleClickBtnToggleMenu();
        this.handleUserLoginActions();
        this.handleActionsCart();
    }
}

header.init();