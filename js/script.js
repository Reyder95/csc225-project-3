$(document).ready(function() {

  var apiBase = 'http://statenweb.mockable.io/conversions/';

  axios.get(apiBase)
       .then(function(response){
              // console.log(response.data);
              var cmInInch = response.data.centimetersInInch;
              var inchInCm = response.data.inchesInCm;

              $('.convert-in-to-cm').on("click", function(event) {
                event.preventDefault();
                var result = $('#in-to-centi-text').val() * cmInInch;
                $('.in-to-centi-result').html(result);
              });

              $('.convert-cm-to-in').on("click", function(event) {
                event.preventDefault();
                var result = $('#centi-to-in-text').val() * inchInCm;
                $('.centi-to-in-result').html(result);
              });
      });
});
