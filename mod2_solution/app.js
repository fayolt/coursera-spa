(function () {
'use strict';

var app = angular.module('ShoppingListCheckOff', []);
app.controller('ToBuyController', ToBuyController);
app.controller('AlreadyBoughtController', AlreadyBoughtController);
app.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  
  var tbCtrl = this;

  tbCtrl.tbItems = ShoppingListCheckOffService.getToBuyItems();

  tbCtrl.boughtAction = function(index){
    ShoppingListCheckOffService.boughtAction(index);
  }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  
  var abCtrl = this;

  abCtrl.abItems = ShoppingListCheckOffService.getAlreadyBoughtItems();

}

function ShoppingListCheckOffService(){

  var service = this;

  var tbItems = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    }
  ];

  var abItems = [];
  
  service.getToBuyItems = function(){
    return tbItems;
  }

  service.getAlreadyBoughtItems = function(){
    return abItems;
  }

  service.boughtAction = function (index){
    
    var boughtItem = tbItems[index];
    abItems.push(boughtItem);
    tbItems.splice(index, 1);
    return abItems;
  }

}

})();
