var PersonModel = Backbone.Model.extend({

      defaults: {
        name : "default",
        surname : "default",
        age : 10
      },

      validate : function(attrs){
        if (attrs.age < 18){
          return console.log("Sorry, " + attrs.name + " is under age.");
        }
      },

      getName : function(){
        alert("The Person's Name is: " + this.get('name'));
      }
});


var PersonView = Backbone.View.extend({

id: 22,

initialize: function(){

this.render();

},


render : function(){

console.log(this.model.get("name"));

}

});






$(function(){

var RyanModel = new PersonModel({name: "Ryan", surname: "Gosden", age : 27 });
//RyanModel.save({name: "Ryan", surname: "Gosden", age : 27 });
var RyanView = new PersonView({model: RyanModel});






});
