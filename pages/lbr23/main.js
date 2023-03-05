import firebase from "firebase/app";

// Set the configuration for your app
var config = {
  apiKey: "AIzaSyB9XhcRF7Q6-x8FEyBgbbIorRzC01JX4iM",
  authDomain: "projectId.firebaseapp.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: "https://verification-of-hri.firebaseio.com/",
  storageBucket: "gs://verification-of-hri.appspot.com/"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

// initialize the available comments
input = {"commands":
          {
            "say":[{"argname":"speech","argtype":"open",
              "argopts":[]}],
            "tell":[{"argname":"narrative","argtype":"nominal",
              "argopts":["unspecified","Snow White","Paddington","Cinderella"]}],

            "move to":[{"argname":"destination","argtype":"nominal",
              "argopts":["unspecified","kitchen","living room","bathroom","bedroom"]}],

            "deliver":[{"argname":"item","argtype":"nominal",
              "argopts":["unspecified","groceries","toy"]},

                       {"argname":"destination","argtype":"nominal",
              "argopts":["unspecified","kitchen","living room","bathroom","bedroom"]}],

            "grab":[{"argname":"item","argtype":"nominal",
              "argopts":["unspecified","groceries","toy"]}],

            "approach":[{"argname":"person","argtype":"nominal",
              "argopts":["unspecified","David"]}],

            "place":[
                     {"argname":"item","argtype":"nominal",
              "argopts":["unspecified","groceries","toy"]},

                     {"argname":"destination","argtype":"nominal",
              "argopts":["unspecified","kitchen","living room","bathroom","bedroom"]}],

            "vacuum":[{"argname":"location","argtype":"nominal",
              "argopts":["unspecified","kitchen","living room","bathroom","bedroom"]}],

            "receive":[{"argname":"item","argtype":"nominal",
              "argopts":["unspecified","groceries","toy"]}]
          }
        }

commands = input["commands"];
var grid_container = document.getElementById("step-grid-container");

Object.keys(commands).forEach(function(key) {
  console.log('Key : ' + key + ', Value : ' + commands[key])

  grid_element = document.createElement("div");
  grid_element.className = "grid-item";

  button_element = document.createElement("button");
  button_element.id=key;
  button_element.className="avail_command";
  button_element.innerHTML=key;

  button_element.addEventListener("click", function() {
    addStep(key);
  });

  grid_element.appendChild(button_element)
  grid_container.appendChild(grid_element);

})

function addStep(icon) {
  var stepElement = document.createElement("step");
  stepElement.className = "step";
  //var stepGrid = document.createElement("div");
  //stepGrid.className = "commandGrid";
  var timelineElement = document.createElement("span");
  timelineElement.className = "command";
  var nameElement = document.createElement("div");
  nameElement.innerHTML=icon;
  timelineElement.appendChild(nameElement);

  for (var i = 0; i < commands[icon].length; i++) {
    
    if (commands[icon][i]["argtype"] == "nominal") {
      var argElement = document.createElement("select");

      for (var j=0; j<commands[icon][i]["argopts"].length; j++) {
        var optElement = document.createElement("option");
        optElement.value=commands[icon][i]["argopts"][j];
        optElement.innerHTML=optElement.value;
        argElement.appendChild(optElement);
     }
    }
    else {
      var argElement = document.createElement("input");
      argElement.type="text";
    }

    divWrapper = document.createElement("div")
    divWrapper.className = "command_arg";
    divWrapper.appendChild(argElement)
    timelineElement.appendChild(divWrapper);
  }

  //timelineElement.innerHTML = "<div>" + icon + "</div><div>args</div>"//icon;
  
  //stepGrid.appendChild(timelineElement)
  stepElement.appendChild(timelineElement)
  document.getElementById("timeline").appendChild(stepElement);

  // set the scrollbar
  var timeline = document.getElementById("timeline");
  console.log(timeline.scrollWidth);
  timeline.scrollLeft=timeline.scrollWidth;
}