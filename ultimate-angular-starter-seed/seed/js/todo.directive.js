function todoApp() {
  return {
    restrict: 'E', // Match directive by element name
    controller: 'TodoController as todo',
    template: `
    <div class="todo">
      <form class="todo__form" ng-submit="todo.addTodo()">
        <input type="text" ng-model="todo.newTodo" placeholder="Add New Todo">
      </form>

      <input
        type="text"
        placeholder="Type to search!"
        ng-model="search">

      <a ng-click="type = 'completed'">Completed</a>
      <a ng-click="type = 'title'">Title</a>

      <ul class="todo__list">
        <li ng-repeat="item in todo.list | orderBy: type: true | filter: search">
          <input
            type="checkbox"
            id="todo-{{ $index }}"
            ng-model="item.completed"
            ng-change="todo.toggleState(item)">
          <label class="toggle" for="todo-{{ $index }}"></label>
          <p ng-dblclick="showEditField = true" ng-hide="showEditField">{{ item.title}}</p>
          <div ng-show="showEditField">
            <input type="text"
               ng-model="item.title"
               ng-blur="todo.updateTodo(item); showEditField = false"
               todo-autofocus="showEditField">
          </div>
          <a ng-click="todo.removeTodo(item)">&#215</a>
        </li>
      </ul>

      <p class="todo__remaining">
        <span ng-show="todo.getRemaining().length > 0">
          You have {{todo.getRemaining().length }} of {{ todo.list.length }} items remaining
        </span>
        <span ng-show="todo.getRemaining().length === 0">
          You are super productive! Boy, will you look at the time!
          {{ todo.getCurrentTimestamp() | date: 'medium'}}
        </span>
      </p>
    </div>
    `
  }
}

angular
  .module('app')
  .directive('todoApp', todoApp);
