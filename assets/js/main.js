var settings = {
    "url": "https://nicobrave.github.io/assets/data/test_data.json",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (data) {


    console.log(data[0]['name']);



  });

 

