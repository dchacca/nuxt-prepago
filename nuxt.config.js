export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Nunito',
                type: 'text/css'
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        name: 'chasing-dots',
        color: '#ff5638',
        background: 'white',
        height: '4px'
    },
    /*
     ** Global CSS
     */
    css: [
        { src: '@fortawesome/fontawesome-free/css/all.css', lang: 'css' },
        { src: '~/assets/style.css', lang: 'css' }
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    devModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org/docs/
        'bootstrap-vue/nuxt',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/toast',
        '@nuxtjs/pwa',
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: 'http://nenasprepago.test/api/v1/auth',
        proxyHeaders: false,
        credentials: false,
        /*proxy: true*/
    },
    /*proxy: {
        '/api/': {
            target: 'http://nenasprepago.test/api/v1/auth',
            pathRewrite: { '^/api/': '' },
            changeOrigin: true

        }
    },*/
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/login', method: 'post', propertyName: 'token' }, //data.token
                    logout: false,
                    user: { url: '/user', method: 'get', propertyName: 'data' },
                },
                tokenRequired: true,
                tokenType: 'Bearer'
            },
            facebook: {
                client_id: 'your facebook app id',
                userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email',
                scope: ['public_profile', 'email']
            },
            google: {
                client_id: 'your gcloud oauth app client id'
            },
        },
        redirect: {
            login: '/login',
            logout: '/',
            user: '/profile',
            callback: '/'
        },
    },
    toast: {
        position: 'top-right',
        duration: 2000
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}
