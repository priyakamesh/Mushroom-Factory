app.factory("mainFactory", function ($http){
  return {
    getJson : ()=>{
      return $http.get(`mushroom.json`)
        .then((value) => {
          console.log(value.data.mushrooms)
          return value.data.mushrooms
        })
        .catch(()=>{alert("rejected")})
    }
  }
})
