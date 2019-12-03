function add_to_cart(info){
  //info will be the stuff displayed in the reciept
  // item description as well as teh price
  display_notif(info);
  
  //console.log(info.item_description)
  //console.log(info.price)
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
