const app = angular.module("mushroomApp", ["ngRoute"])

app.config(($routeProvider) =>{
  $routeProvider
  .when("/",{
    controller: "MainCtrl",
    templateUrl: "partial/main.html"
  })
  .otherwise("/")
})
