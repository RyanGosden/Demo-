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

var PersonCollection = Backbone.Collection.extend({

model: PersonModel

});





var PersonView = Backbone.View.extend({

  // class : "list-group-item",
  // tagName : "li",
  // el : "list-group",


initialize: function(){

this.render();

},


render : function(){

this.collection.each(function(model) {
  $(".list-group").append('<li class="list-group-item">' + model.get("name") + '</li>');
  });

}

});





$(function(){

var person1 = new PersonModel({name: "Ryan", surname: "Gosden", age : 33 });
var person2 = new PersonModel({name: "Michelle", surname: "Gosden", age : 34 });

var personCollection = new PersonCollection ([person1, person2]);
var personView = new PersonView({collection: personCollection});








});
