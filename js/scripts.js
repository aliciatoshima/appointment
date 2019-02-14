$(document).ready(function() {
  $("#add form").submit(function(event) {
    var firstName = $("input#firstname").val();
    var lastName= $("input#lastname").val();
    var DoB = $("input#born").val();
    var insurance = $("input:radio[name=insurance]:checked").val();
    var drInsurance = $("input#drinsurance").val();
    var listinsurance = $("input#listinsurance").val();
    var address1 = $("input#address1").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var zip= $("input#zip").val();

    $("#firstname1").text(firstName);
    $("#lastname1").text(lastName);
    $("#born1").text(DoB);
    $("#insurance1").text(insurance);
    $("#drinsurance1").text(drInsurance);
    $("#listinsurance1").text(listinsurance);
    $("#address11").text(address1);
    $("#city1").text(city);
    $("#state1").text(state);
    $("#zip1").text(zip);

  $("#results").show();
  event.preventDefault();
  });
});
