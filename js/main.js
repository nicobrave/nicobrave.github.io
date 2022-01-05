var settings = {
    "url": "https://nicobrave.github.io/data/test_data.json",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (id) {
    console.log(id);
  });
