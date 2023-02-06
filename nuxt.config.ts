// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        ['@nuxtjs/google-fonts',{
            download: true,
            families: {
                Roboto: true,
                'Josefin+Sans': true,
                Lato: [100, 300],
                Raleway: {
                  wght: [100, 400],
                  ital: [100]
                },
             },
        }
    ]
    ],
    
})
