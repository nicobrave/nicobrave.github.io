var settings = {
    "url": "https://nicobrave.github.io/assets/data/test_data.json",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (data) {

   let name = data.name

    console.log(data);
  });

