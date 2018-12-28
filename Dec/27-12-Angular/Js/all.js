var app = angular.module("myApp", ['ui.router']);
app.config(function ($stateProvider) {
    var homeState = {
        name: "home",
        url: "/home",
        templateUrl: "./home.html",
        controller: "homeCtrlTest"
    }

    var contactState = {
        name: "contact",
        url: "/contact",
        templateUrl: "./contact.html",
        controller: "contactCtrlTest"
    }

    var emailState = {
        name: "email",
        url: "/email",
        templateUrl: "./email.html",
        controller: "emailCtrlTest"
    }

    $stateProvider.state(homeState);
    $stateProvider.state(contactState);
    $stateProvider.state(emailState);

});