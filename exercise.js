project = {
  committee: ["Stella", "Salma", "Kai"],
  title: "Very Important Project",
  dueDate : "December 14, 2019",
  id: "3284",
  steps: [
    {description: "conduct interviews",
     dueDate: "August 1, 2018"
    },
    {description: "code of conduct",
     dueDate: "January 1, 2018"
    },
    {description: "compile results",
     dueDate: "November 10, 2018"
    },
    {description: "version 1",
     dueDate: "January 15, 2019"
    },
    {description: "revisions",
     dueDate: "March 30, 2019"
    },
    {description: "version 2",
     dueDate: "July 12, 2019"
    },
    {description: "final edit",
     dueDate: "October 1, 2019"
    },
    {description: "final version",
     dueDate: "November 20, 2019"
    },
    {description: "Wrap up",
     dueDate: "December 1, 2019"
    }
  ]
}

// Update this object so that each step has the name of
// a committee member associated with it (i.e. by adding
// an additional person property in each step object),
// and each committee member has an equal number of tasks.
// Avoid typing out the committee members names
// elsewhere in your code.
//

//option 1:
var count =0;
  function findPerson(){
    if (count > 2){
    count =0}
    name=  project.committee[count]
    count +=1;
    return name;
  };

function add(){
  var projects = project.steps;
  for (var i = 0; i < projects.length; i++) {
    projects[i].member = findPerson()
  }
  };

//option2:

function addMemberToProject (){
//array of people;
  var projects = project.steps; //array of hashes where people must be added;
  //to find people;
  var people = project.committee;

     for (var i = 0; i < projects.length; i++){
       if(i<3){
         pe = people[0]
       }else if (i<6) {
         pe = people[1]
       } else {
         pe = people[2]
       }
       projects[i].member = pe;
     };
  }

addMemberToProject();
