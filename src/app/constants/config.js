angular.module ('app.constants.config', [])
    .constant ('CONFIG', {
    url: "http://www.hashup.io",
    homePage: "/home",
    navigation:{
        app: '/app/'
    },
    debug: true,
    appName: "HASHUP",
    defaultPageTitle: "This is my great app",
    defaultPageKeywords: "List my keywords here",
    defaultPageDescription: "Put your default page description here"
});
