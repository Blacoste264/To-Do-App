(function() {
  'use strict';

  angular
    .module('app', []);
})();

(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = [];

  /* @ngInject */
  function MainController() {
    var vm = this;
    vm.title = "MainController";
    vm.name = "Brittany";
    //todo list
    vm.todos = [{
      taskName: "Write an Angular js Tutorial for Todo-List"
    }];

    //add new todo
    vm.addTodo = function() {
      vm.todos.push({
        taskName: vm.newTodo,
      });
      vm.newTodo = ""; //Reset the text field.
    };

    activate();

    function activate() {

    }
  }
})();
