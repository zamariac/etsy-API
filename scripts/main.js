var form = $('form');
var etsySearches = [];

var urlString = 'https://api.etsy.com/v2/listings/active.js?api_key=qd4p1ispdj60aj3wybzgpcgb&keywords=cows&includes=Images,Shop`';
var newString = urlString.slice(85, -22);
console.log(newString);

form.on('submit', function(e){
	e.preventDefault();
	var input = $('.etsy-input');

	etsySearches.push(input.val());
	input.val('');
	render(etsySearches);
	console.log(etsySearches);

			
});

function render(search){
	var etsyList = search.map(function(listItem){
		return '<div>'+ listItem+ '</div'>

	$('.etsy-input').html(etsyList);
});
}

var settings = {

	url: 'https://api.etsy.com/v2/listings/active.js?api_key=qd4p1ispdj60aj3wybzgpcgb&keywords=cows&includes=Images,Shop`',
	dataType: 'JSONp',
	type: 'GET',

	success: function(response){

		var container = $('#etsy-info');

		for (i = 0; i < 24; i++){
			//console.log(response.results[i].Images[0].url_75x75);

			var imageUrl = response.results[i].Images[0].url_75x75;

			$('<img src="' + imageUrl + '">').load(function(){
				$(this).appendTo('#etsy-info');


			})




		//stackoverflow code for url to dom
		//$('<img src="'+ imgPath +'">').load(function() {
  		//$(this).width(some).height(some).appendTo('#some_target');
   		 //});

		}


		//console.log(response['results']);
		//console.log(response['results']['Images'])

		
		//this is jess sample code
		// data.forEach(function(val, i, array){
		// 	var newEl = $('<div></div>', {'results-id': val.id}).html(val.name).data("results", val.id);
		// 	//container.append(newEl)
		// 	console.log(results-id);

		// });
		
	},

	error: function(err){

	},
	complete:function(){
		console.log("i got a response")

	},

}


$.ajax(settings);




//APP NAME zamariac KEYSTRING qd4p1ispdj60aj3wybzgpcgb SHARED SECRET dsz75l03qw