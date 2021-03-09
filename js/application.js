function removeDollarSign(string) {
    var newString = '';
    for(i=0;i<string.length;i++) {
        if(string[i] !== '$') {
            newString += string[i];
        }
    }
    return newString;
}

var costCalculator = function (ele) {

    var groceryString = $(ele).find('.price').text();
    var groceryPrice = removeDollarSign(groceryString);
    var quantity = parseFloat($(ele).find('.quantity input').val())

    var cost = groceryPrice * quantity

    return cost
}

var sum = function (acc, x) {return acc + x};

var costUpdater = function (ele) {

    var totalPriceArray = [];

    $('tbody tr').each(function (i, ele) {

        var groceryCost = costCalculator(ele);

        totalPriceArray.push(groceryCost);

        $(this).find('.cost').html('$'+ groceryCost);

    })

    if(totalPriceArray.length === 0) {

        $('#totalPrice').html("$" + 0);

    } else {

        var totalPrice = totalPriceArray.reduce(sum);

        $('#totalPrice').html("Total Price: $" + totalPrice);
    }


}


$(document).ready(function() {

    costUpdater();

    $(document).on('click', '.btn.remove', function (event) {

        $(this).closest('tr').remove();

        costUpdater();
        
    })

    $(document).on('change', '.quantity input', function (event) {

        costUpdater();
    })

    $('#addGrocery').on('submit', function (event) {

        event.preventDefault();

        var grocery = $(this).children('[name=grocery]').val();
        var price = $(this).children('[name=price]').val();

        $(('<tr>' + '<td class="grocery">' + grocery + '</td>' + '<td class="price">$' + price + '</td>' + '<td class="quantity">QTY<input class="ml-2" type="number" min="0" value="1" /><button class="btn btn-danger remove ml-1">X</button></td>' + '<td class="cost">' + '</td>' + '</tr>')).prependTo($('tbody'));
        
        costUpdater();

        $(this).children('[name=grocery]').val('');
        $(this).children('[name=price]').val('');
        $(this).children('[name=grocery]').focus()

    });

});