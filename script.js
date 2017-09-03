var BeerApp = function() {

    var beers = []
    var addBeer = function(name, category) {
        var obj = {
            name: name,
            category: category
        }
        beers.push(obj);
    }

    // addBeer('corona', 'mexican');

    // var postbeer = function() {
    //     addBeer();
    // }
    function updateBeers() {

    }
    return {
        addBeer: addBeer,
        updatebeers: updatebeers
    }
}

var beerApp = BeerApp();

$('.post-beer').on('click', function() {
    beerApp.addBeer("corona", "mexican");
});