var drinkStorage = new HashStorage();

function HashStorage() {
	var storage = {};
	
	this.addValue = function(key, value) {
		storage[key] = value;
	}
	
	this.getValue = function(key) {
		if (key in storage) 
			return storage[key];
		return false;
	}
	
	this.deleteValue = function(key) {
		if (key in storage) {
			delete storage[key];
			return true;
		}
		return false;
	}
	
	this.getKeys = function() {
		return Object.keys(storage);
		var keys = [];
		for (var key in storage) {
			keys.push(key);
		}
		return $keys;
		}
	}

//---------Оживляем кнопки-------------------------------------

function addDrink () {
	var drinkName = prompt('Enter drink name');
	if (drinkName === null) {
			alert ('The drink enter was canceled');
		}
	else	{ 
		var drinkIsAlko = confirm('Is the drink alcohol?');
	 	if (drinkIsAlko === false) {
			alert ('The drink enter was canceled');
		}
		else {
			var drinkRecipe = prompt ('Enter drink recipe');
			if (drinkRecipe === null) {
			alert ('The drink enter was canceled');
			}
			else {
			// сформировать хранилище (временный ХЭШ) 
	var info = {'isAlco': drinkIsAlko, 'recipe':drinkRecipe};
	//создать объект который ссылается наш объект hashStorage()
	drinkStorage.addValue(drinkName, info);
			}
		}
	}
}

function getDrink() {
	var drinkName = prompt('Enter drink name');
	var info = drinkStorage.getValue(drinkName);
	if (info) {
		alert('Name: ' + drinkName + 
			'\nInfo: ' + (info.isAlco ? 'alco' : 'not alco' ) + ' \nRETSEPT: ' + info.info);
	}
	else if (drinkName === null) {
			alert ('The drink enter was canceled');
	}
	else {
		alert('No such drink in storage');
	}
}

function deleteDrink() {
	var drinkName = prompt('Enter drink name');
	if (drinkStorage.deleteValue(drinkName)) {
		alert('Name: ' + drinkName + ' deleted');
	}
	else if (drinkName === null) {
			alert ('The drink enter was canceled');
	}
	else {
		alert('no such drink in storage');	
	}
}

function getListDrinks() {
	var drinksList = drinkStorage.getKeys();
	
	if (drinksList.length === 0) {
		alert ('The list of drink is empty')
	}
	else {
		var drinks = '';
		for (var i = 0; i <= drinksList.length; i++) {
		drinks += drinksList[i] + ' ';
		return alert('In storage ' + drinks);
		}
	}
}
