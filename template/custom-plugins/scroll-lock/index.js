import { isMobile } from '@ecomplus/storefront-twbs'

if (!isMobile) {
    if (window.requestIdleCallback) {
        window.requestIdleCallback(() => {
            setTimeout(() => {
                import('./_scroll-lock')
            }, 300)
        })
    } else {
        setTimeout(() => {
            import('./_scroll-lock')
        }, 400)
    }
}
