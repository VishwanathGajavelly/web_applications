var app = angular.module("JobApp", []);
app.controller("JobCtrl", JobCtrl);

function JobCtrl() {
    
    this.jobs = [];
    var jobData = localStorage['jobsList'];

    if(jobData != undefined) {
		this.jobs = JSON.parse(jobData);
	}

    
    localStorage['jobsList'] = JSON.stringify(this.jobs);
    
    this.addNewJob = function() {
        this.jobs.push({'date': new Date().toDateString(), 'companyName': this.newCompany ,'location': this.newLocation ,'jobTitle': this.jobTitle  });
        this.newJob = "";
    
        localStorage['jobsList'] = JSON.stringify(this.jobs);
	}

    this.contentEdit = function(msg) {
		console.log(this.jobs);
		console.log("doubleclicked");
		
		for(i=0;i<this.jobs.length;i++) {
			if(this.jobs[i].companyName == msg) {
				this.jobs[i].companyName = event.target.innerText;
			}
		}

		localStorage['jobsList'] = JSON.stringify(this.jobs);

		console.log(this.jobs);

		event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
	};

    this.enterAgain = function(msg) {
		if(event.which == 13 && msg != "") {
			this.contentEdit(msg);
			console.log(11);
		}
	}
  
    this.deleteJob = function(index) {
        if (confirm('Are you sure you want to delete this?')) {
            this.jobs.splice(index, 1);
            delete window.localStorage[index];
            localStorage['jobsList'] = JSON.stringify(this.jobs);
        }
    }
}