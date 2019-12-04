$(document).ready(function() {
    if (window.location.href.indexOf("cart") > -1) {
      //if we are on the cart page
      //dynamically generate the cart on the page
      load_cart()
    }
  });

function add_to_cart(info){
  //info will be the stuff displayed in the reciept
  // item description as well as teh price
  display_notif(info);
  var cart_retrieved = localStorage.getItem("cart")
  if (cart_retrieved === null){
    //make a new cart
    var cart = [info];
    localStorage.setItem('cart', JSON.stringify(cart));
  }else{
    var cart = JSON.parse(cart_retrieved);
    cart.push(info)
    console.log("new cart would be ---> "+ cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }


}

function onRowClick(tableId, callback) {
    var table = document.getElementById(tableId),
        rows = table.getElementsByTagName("tr"),
        i;
    for (i = 0; i < rows.length; i++) {
        table.rows[i].onclick = function (row) {
            return function () {
                callback(row);
            };
        }(table.rows[i]);
    }
};

function display_notif(info){
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
  toastr.success(info.item_description + ': £' + info.price, 'Added to Cart');
}

function load_cart(){
  console.log("re render the table")
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

  //the lines above are creating the cart page

  //now lets include the onclick functionality

  onRowClick("cart_body", function (row){
    var value = row.getElementsByTagName("td")[0].innerHTML;
    console.log("Deleting row ---> ", value);
    document.getElementById("cart_body").deleteRow(value-1);
    //edit the cart
    cart.splice(value-1,1) //this is how you remove elements from a list in javascript 
    localStorage.setItem('cart', JSON.stringify(cart));
    load_cart()

});
}
