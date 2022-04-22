// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Kayla',
  siteLanguage: "fr",
  plugins: [
    {
      use: 'gridsome-plugin-matomo',
      options: {
        host: 'https://hetic.ulyssegebe.fr',
        siteId: 1
      }
    },
    {
      use: "klaro-gridsome",
      options: {
        privacyPolicy: "/donnees-personelles/",
        cookieName: "consent",
        storageMethod: "cookie",
        translations: {
          fr: {
            consentModal: {
              description:
                "Nous collectons et traitons vos informations personnelles dans le but suivant",
            },
            matomo: {
              description:
                "Website analytics powered by Matomo, allowing us to see how visitors use our website.",
            },
            purposes: {
              analytics: "Analytics",
              security: "Security",
              livechat: "Livechat",
              advertising: "Advertising",
              styling: "Styling",
            },
            acceptSelected: "Accepter",
          },
        },
        apps: [
          {
            name: "matomo",
            default: true,
            title: "Matomo/Piwik",
            purposes: ["analytics"],
            cookies: [
              "[/^_pk_.*$/g, '/', 'app-kayla.netlify.app']",
              "[/^_pk_.*$/g, '/', 'localhost']",
              'piwik_ignore',
            ],
            callback: function(consent, service) {
              console.log(
                `User consent for service ${service.name}: consent=${consent}`
              );
                if(consent==true){
                    _paq.push(['rememberCookieConsentGiven']);
                } else {
                    _paq.push(['forgetCookieConsentGiven']);
                }
            },
            required: false,
            optOut: false,
            onlyOnce: true,
          },
        ],
      },
    },
  ]
}
