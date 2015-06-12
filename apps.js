var PizzaPlanetApp = angular.module('PizzaPlanetApp',[]);

PizzaPlanetApp.controller('PPController',['$scope',function($scope){
  
$scope.starters = [{name:'Calamari', description:'Yummy Pears in Calamari',price:'4.95'},{name:'Shellfish', description:'Yummy Pears in Calamari',price:'8.95'}] 
  
$scope.mains = [{name:'Dal', description:'Mung Dal',price:'14.95'},{name:'Aloo Gobi', description:'Yummy Pears in Calamari',price:'18.95'}] 
   
$scope.extras = [{name:'Oyster Sauce', description:'Mung Dal',price:'1.95'},{name:'Relish', description:'Ballymaloe',price:'1.95'}] 
                                }]);
 
