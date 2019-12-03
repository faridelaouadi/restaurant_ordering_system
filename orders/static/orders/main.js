$(document).ready(function() {
    if (window.location.href.indexOf("cart") > -1) {
      //if we are on the cart page
      //dynamically generate the cart on the page
      var cart = JSON.parse(localStorage.getItem("cart"));
      var total = 0;
      var table = document.getElementById('cart_body');

      for (var i = 0; i < cart.length; i++) {

        var tr = document.createElement('tr');
        var th = document.createElement('th');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');

        var text1 = document.createTextNode(cart[i].item_description);
        var text2 = document.createTextNode(cart[i].price);
        var text3 = document.createTextNode(String(i+1));

        td1.appendChild(text1);
        td2.appendChild(text2);
        th.appendChild(text3)
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);

        table.appendChild(tr);

        total += cart[i].price
      }
      document.getElementById('total').innerHTML = '£' + String(total);




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





/*
<tr>
  <th scope="row">{{ forloop.counter }}</th>
  <td>Mark</td>
  <td>Otto</td>
</tr>*/
