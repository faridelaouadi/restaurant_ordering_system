$(document).ready(function() {
    if (window.location.href.indexOf("cart") > -1) {
      //dynamically generate the cart on the page
      load_cart()
    }
  });

function add_to_cart(info){
  //info will be the stuff displayed in the reciept
  // item description as well as teh price
  display_notif("add to cart", info);
  var cart_retrieved = localStorage.getItem("cart")
  if (cart_retrieved === null){
    //make a new cart
    var cart = [info];
    localStorage.setItem('cart', JSON.stringify(cart));
  }else{
    var cart = JSON.parse(cart_retrieved);
    cart.push(info)
    localStorage.setItem('cart', JSON.stringify(cart));
  }


}

function onRowClick(tableId, callback) {
  var table = document.getElementById(tableId),
      rows = table.getElementsByTagName("tr"),
      i;

    for (i = 0; i < rows.length; i++) {
        table.rows[i].onclick = function (row) {return function () {callback(row);};}(table.rows[i]);
    }
}

function display_notif(type, info){
  //the different types of toasts are success, warning ... info and error
  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "70",
    "hideDuration": "1000",
    "timeOut": "2000",
    "extendedTimeOut": "500",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  switch (type){
    case "add to cart":
      toastr.success(info.item_description + ': £' + info.price, 'Added to Cart');
      break;
    case "remove from cart":
      toastr.warning("Successfully removed "+info+ " from cart");
  }

}

function load_cart(){
  var table = document.getElementById('cart_body');
  table.innerHTML = ""; //clear the table
  var cart = JSON.parse(localStorage.getItem("cart"));
  var total = 0;

  for (var i = 0; i < cart.length; i++) {

    var row = table.insertRow(-1);
    var item_number = row.insertCell(0);
    var item_description = row.insertCell(1);
    var item_price = row.insertCell(2);
    item_number.innerHTML = String(i+1);
    item_description.innerHTML = cart[i].item_description;
    item_price.innerHTML = cart[i].price;

    total += cart[i].price
  }
  document.getElementById('total').innerHTML = '£' + String(Math.round(total * 100) / 100);

  onRowClick("cart_body", function (row){
    var value = row.getElementsByTagName("td")[0].innerHTML;
    var description = row.getElementsByTagName("td")[1].innerHTML;
    var r = confirm("Proceed to delete '"+description+ "' from cart?");
    if (r == true) {
      document.getElementById("cart_body").deleteRow(value-1);
      //edit the cart
      cart.splice(value-1,1) //this is how you remove elements from a list in javascript
      localStorage.setItem('cart', JSON.stringify(cart)); //change the elements in the cart in local storage
      display_notif("remove from cart", description)
      load_cart() //refresh the page
    }

  });
}

function pizza_toppings(number_of_toppings, type_of_pizza, price){
  console.log("open modal for "+ String(number_of_toppings)+" toppings")


  var last_valid_selection = null;

  $('#toppings_label')[0].innerHTML = "Choose "+ String(number_of_toppings) +" topping(s) here"
  $('#select_toppings').change(function(event) {

    if ($(this).val().length > number_of_toppings) {

      $(this).val(last_valid_selection);
    } else {
      last_valid_selection = $(this).val();
    }
  }); //this is what restircts the user from choosing more than they are paying fpr
  $('#toppings_modal').modal('show'); //show the modal
  $("#submit_toppings").click(function(){
    var topping_choices = $('#select_toppings').val();
    console.log("they chose the following toppings --> ",topping_choices )
    $('#toppings_modal').modal('hide'); //hide the modal
    var info={
      "item_description": type_of_pizza + " pizza with "+ topping_choices,
      "price":price
    }
    add_to_cart(info)

  });
}
