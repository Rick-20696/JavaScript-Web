"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Códigos antes do ES6 será convertido para 
var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.datas = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.datas.push(data);
    }
  }]);

  return List;
}();

var TaskList = /*#__PURE__*/function () {
  function TaskList() {
    _classCallCheck(this, TaskList);

    this.tasks = [];
  } //Como meu contexto é de uma classe, eu preciso do this para acessar os atributos


  _createClass(TaskList, [{
    key: "addTask",
    value: function addTask() {
      this.tasks.push('New task');
      console.log(this.tasks);
    }
  }]);

  return TaskList;
}();

var myList = new TaskList();

document.getElementById('newTask').onclick = function () {
  myList.addTask();
};
