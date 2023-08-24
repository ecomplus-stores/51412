import { isMobile } from '@ecomplus/storefront-twbs'

if (!isMobile) {
    if (window.requestIdleCallback) {
        window.requestIdleCallback(() => {
            setTimeout(() => {
                import('./scroll-lock')
            }, 200)
        })
    } else {
        setTimeout(() => {
            import('./scroll-lock')
        }, 400)
    }
}
