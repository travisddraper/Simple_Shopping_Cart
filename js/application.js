//inside of the ready function of jQuery, I need to run a price update
//that appends to each <tr> a $$ amount based on the value inputed to
//the quantity field

//Need to create a "Cancel" button that will remove its <tr> and need
//to make sure I add this on the document.body so it is appended to each
//<tr> that is created and not just the ones that exist.


$(document).ready(function() {

    $(document).on('click', '.btn.remove', function (event) {

        $(this).closest('tr').remove();

    })

    $('#addGrocery').on('submit', function (event) {

        event.preventDefault();

        var grocery = $(this).children('[name=grocery]').val();
        var price = $(this).children('[name=price]').val();

        console.log(grocery);
        console.log(price);

        $('tbody').append('<tr>' + '<td class="grocery">' + grocery + '</td>' + '<td class="price">$' + price + '</td>' + '<td class="quantity">QTY<input class="ml-2" type="number" value="" /><button class="btn btn-sm remove ml-1">Cancel</button></td>' + '</tr>')

        $(this).children('[name=grocery]').val('');
        $(this).children('[name=price]').val('');

    });

});