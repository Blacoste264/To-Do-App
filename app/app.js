//module
(function() {
  'use strict';

  angular
    .module('toDoAppList', []);
})();
//controller
(function() {
  'use strict';

  angular
    .module('toDoAppList')
    .controller('ToDoController', ToDoController);

  ToDoController.$inject = [];

  /* @ngInject */
  function ToDoController() {
    var vm = this;
    vm.toDoItem = "";
    vm.toDoList = [];
//add new list item
    vm.add = function() {
      vm.toDoList.push({
        todo: vm.toDoObject.toDoItem,
        priority: vm.toDoObject.priorities
      });
    }

  }

})();
