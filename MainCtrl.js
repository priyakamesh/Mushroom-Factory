app.controller ("MainCtrl", function ($scope, mainFactory){
  mainFactory.getJson()
    .then ((value) =>{
      $scope.mushroomList = value
    })
})
