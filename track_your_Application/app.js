var app = angular.module("todoApp", []);
app.controller("TodoCtrl", TodoCtrl);

function TodoCtrl() {
    
    this.todos = [];
    var taskData = localStorage['tasksList'];

    if(taskData != undefined) {
		this.todos = JSON.parse(taskData);
	}

    
    localStorage['tasksList'] = JSON.stringify(this.todos);
    
    this.addNewTodo = function() {
        this.todos.push({'date': new Date().toDateString(), 'companyName': this.newCompany ,'location': this.newLocation ,'jobTitle': this.jobTitle  });
        this.newTodo = "";
    
        localStorage['tasksList'] = JSON.stringify(this.todos);
	}

    this.contentEdit = function(msg) {
		console.log(this.todos);
		console.log("doubleclicked");
		
		for(i=0;i<this.todos.length;i++) {
			if(this.todos[i].companyName == msg) {
				this.todos[i].companyName = event.target.innerText;
			}
		}

		localStorage['tasksList'] = JSON.stringify(this.todos);

		console.log(this.todos);

		event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
	};

    this.enterAgain = function(msg) {
		if(event.which == 13 && msg != "") {
			$scope.contentEdit(msg);
			console.log(11);
		}
	}
  
    this.deleteTodo = function(index) {
        if (confirm('Are you sure you want to delete this?')) {
            this.todos.splice(index, 1);
            delete window.localStorage[index];
            localStorage['tasksList'] = JSON.stringify(this.todos);
        }
    }
}