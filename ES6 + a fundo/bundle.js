"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Códigos antes do ES6 será convertido para 
var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.array = [];
  } //Como meu contexto é de uma classe, eu preciso do this para acessar os atributos


  _createClass(List, [{
    key: "add",
    value: function add(element) {
      this.array.push(element);
      console.log(this.array);
    }
  }]);

  return List;
}(); //Isso é uma herança. Eu posso também adicionar outras coisas nela


var TaskList = /*#__PURE__*/function (_List) {
  _inherits(TaskList, _List);

  var _super = _createSuper(TaskList);

  function TaskList() {
    var _this;

    _classCallCheck(this, TaskList);

    //Chamando o construtor de List
    _this = _super.call(this);
    _this.user = 'Ricardo';
    return _this;
  }

  _createClass(TaskList, [{
    key: "printUser",
    value: function printUser() {
      console.log(this.user);
    }
  }]);

  return TaskList;
}(List);

var TaskList2 = /*#__PURE__*/function () {
  function TaskList2() {
    _classCallCheck(this, TaskList2);

    this.tasks = [];
  } //Métodos estáticos não enxergam o restante da classe...
  //server, geralmente, para receber um valor e retornar outro independente da classe!


  _createClass(TaskList2, null, [{
    key: "addTask",
    value: function addTask() {
      this.tasks.push('New Task');
      console.log(this.tasks);
    }
  }]);

  return TaskList2;
}();

var MyMath = /*#__PURE__*/function () {
  function MyMath() {
    _classCallCheck(this, MyMath);
  }

  _createClass(MyMath, null, [{
    key: "sum",
    //Aqui é apenas um exemplo, mas serve para demonstrar que métodos estáticos são independentes! 
    value: function sum(a, b) {
      return a + b;
    }
  }]);

  return MyMath;
}();

var myList = new TaskList();

document.getElementById('newTask').onclick = function () {
  //Funciona do mesmo jeito
  myList.add('New task');
  myList.printUser();
};

console.log(MyMath.sum(5, 5));
TaskList2.addTask();
