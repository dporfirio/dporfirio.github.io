// initialize the available comments
var input = {
    "activate": {
      "args": [
        {
          "argopts": {
            "All": [
              "unspecified"
            ], 
            "Furniture": [
              "Living Room Lamp", 
              "Bedroom Lamp", 
              "Master Bedroom Lamp"
            ]
          }, 
          "argname": "device", 
          "argtype": "nominal"
        }
      ], 
      "description": "turn a device on", 
      "categories": [
        "all", 
        "touch"
      ]
    }, 
    "receive": {
      "args": [
        {
          "argopts": {
            "Item": [
              "apple", 
              "carrots", 
              "pie", 
              "cake", 
              "candy", 
              "Mail", 
              "Keys", 
              "leftovers", 
              "Clean Dishes", 
              "banana", 
              "soda", 
              "Basketball", 
              "water", 
              "chips", 
              "Rag", 
              "Rubber Duck", 
              "Toy Elephant", 
              "Groceries", 
              "popcorn", 
              "crackers"
            ], 
            "All": [
              "unspecified"
            ]
          }, 
          "argname": "object", 
          "argtype": "nominal"
        }
      ], 
      "description": "receive an object from someone", 
      "categories": [
        "all", 
        "touch"
      ]
    }, 
    "approach": {
      "args": [
        {
          "argopts": {
            "Person": [
              "Roommate 2", 
              "Friend", 
              "Roommate", 
              "Guest 6", 
              "Guest 5", 
              "Guest 4", 
              "Guest 3", 
              "Guest 2", 
              "Guest 1", 
              "Roommate 1", 
              "Nephew"
            ], 
            "All": [
              "unspecified"
            ]
          }, 
          "argname": "person", 
          "argtype": "nominal"
        }
      ], 
      "description": "approach a person", 
      "categories": [
        "all", 
        "movement"
      ]
    }, 
    "deliver": {
      "args": [
        {
          "argopts": {
            "Item": [
              "apple", 
              "carrots", 
              "pie", 
              "cake", 
              "candy", 
              "Mail", 
              "Keys", 
              "leftovers", 
              "Clean Dishes", 
              "banana", 
              "soda", 
              "Basketball", 
              "water", 
              "chips", 
              "Rag", 
              "Rubber Duck", 
              "Toy Elephant", 
              "Groceries", 
              "popcorn", 
              "crackers"
            ], 
            "All": [
              "unspecified"
            ]
          }, 
          "argname": "object", 
          "argtype": "nominal"
        }, 
        {
          "argopts": {
            "All": [
              "unspecified"
            ], 
            "Room": [
              "Bathroom", 
              "Living Room", 
              "Hallway", 
              "Entrance", 
              "Master Bedroom", 
              "Garage", 
              "Bedroom", 
              "Kitchen"
            ], 
            "Person": [
              "Roommate 2", 
              "Friend", 
              "Roommate", 
              "Guest 6", 
              "Guest 5", 
              "Guest 4", 
              "Guest 3", 
              "Guest 2", 
              "Guest 1", 
              "Roommate 1", 
              "Nephew"
            ], 
            "Appliance": [
              "Refridgerator"
            ], 
            "Item": [
              "apple", 
              "carrots", 
              "pie", 
              "cake", 
              "candy", 
              "Mail", 
              "Keys", 
              "leftovers", 
              "Clean Dishes", 
              "banana", 
              "soda", 
              "Basketball", 
              "water", 
              "chips", 
              "Rag", 
              "Rubber Duck", 
              "Toy Elephant", 
              "Groceries", 
              "popcorn", 
              "crackers"
            ], 
            "Misc.": [
              "Car"
            ], 
            "Furniture": [
              "Front Door", 
              "Back Door", 
              "Countertop", 
              "Coffee table", 
              "Desk", 
              "Living Room Lamp", 
              "Vanity", 
              "Bedside Table", 
              "Living Room Cabinets", 
              "Kitchen Cabinets", 
              "Bedroom Lamp", 
              "Master Bedroom Lamp", 
              "End Table", 
              "Table"
            ]
          }, 
          "argname": "location", 
          "argtype": "nominal"
        }
      ], 
      "description": "deliver an object a location or to a person", 
      "categories": [
        "all", 
        "touch"
      ]
    }, 
    "find": {
      "args": [
        {
          "argopts": {
            "All": [
              "unspecified"
            ], 
            "Room": [
              "Bathroom", 
              "Living Room", 
              "Hallway", 
              "Entrance", 
              "Master Bedroom", 
              "Garage", 
              "Bedroom", 
              "Kitchen"
            ], 
            "Person": [
              "Roommate 2", 
              "Friend", 
              "Roommate", 
              "Guest 6", 
              "Guest 5", 
              "Guest 4", 
              "Guest 3", 
              "Guest 2", 
              "Guest 1", 
              "Roommate 1", 
              "Nephew"
            ], 
            "Appliance": [
              "Refridgerator"
            ], 
            "Item": [
              "apple", 
              "carrots", 
              "pie", 
              "cake", 
              "candy", 
              "Mail", 
              "Keys", 
              "leftovers", 
              "Clean Dishes", 
              "banana", 
              "soda", 
              "Basketball", 
              "water", 
              "chips", 
              "Rag", 
              "Rubber Duck", 
              "Toy Elephant", 
              "Groceries", 
              "popcorn", 
              "crackers"
            ], 
            "Misc.": [
              "Car"
            ], 
            "Furniture": [
              "Front Door", 
              "Back Door", 
              "Countertop", 
              "Coffee table", 
              "Desk", 
              "Living Room Lamp", 
              "Vanity", 
              "Bedside Table", 
              "Living Room Cabinets", 
              "Kitchen Cabinets", 
              "Bedroom Lamp", 
              "Master Bedroom Lamp", 
              "End Table", 
              "Table"
            ]
          }, 
          "argname": "object", 
          "argtype": "nominal"
        }
      ], 
      "description": "search for an object", 
      "categories": [
        "all", 
        "search"
      ]
    }, 
    "move to": {
      "args": [
        {
          "argopts": {
            "All": [
              "unspecified"
            ], 
            "Room": [
              "Bathroom", 
              "Living Room", 
              "Hallway", 
              "Entrance", 
              "Master Bedroom", 
              "Garage", 
              "Bedroom", 
              "Kitchen"
            ], 
            "Person": [
              "Roommate 2", 
              "Friend", 
              "Roommate", 
              "Guest 6", 
              "Guest 5", 
              "Guest 4", 
              "Guest 3", 
              "Guest 2", 
              "Guest 1", 
              "Roommate 1", 
              "Nephew"
            ], 
            "Appliance": [
              "Refridgerator"
            ], 
            "Item": [
              "apple", 
              "carrots", 
              "pie", 
              "cake", 
              "candy", 
              "Mail", 
              "Keys", 
              "leftovers", 
              "Clean Dishes", 
              "banana", 
              "soda", 
              "Basketball", 
              "water", 
              "chips", 
              "Rag", 
              "Rubber Duck", 
              "Toy Elephant", 
              "Groceries", 
              "popcorn", 
              "crackers"
            ], 
            "Misc.": [
              "Car"
            ], 
            "Furniture": [
              "Front Door", 
              "Back Door", 
              "Countertop", 
              "Coffee table", 
              "Desk", 
              "Living Room Lamp", 
              "Vanity", 
              "Bedside Table", 
              "Living Room Cabinets", 
              "Kitchen Cabinets", 
              "Bedroom Lamp", 
              "Master Bedroom Lamp", 
              "End Table", 
              "Table"
            ]
          }, 
          "argname": "destination", 
          "argtype": "nominal"
        }
      ], 
      "description": "move to a location", 
      "categories": [
        "all", 
        "movement"
      ]
    }, 
    "say": {
      "args": [
        {
          "argopts": {
            "Speech": [
              "$speech$"
            ]
          }, 
          "argname": "speech", 
          "argtype": "open"
        }
      ], 
      "description": "say something", 
      "categories": [
        "all", 
        "speech"
      ]
    }, 
    "place": {
      "args": [
        {
          "argopts": {
            "Item": [
              "apple", 
              "carrots", 
              "pie", 
              "cake", 
              "candy", 
              "Mail", 
              "Keys", 
              "leftovers", 
              "Clean Dishes", 
              "banana", 
              "soda", 
              "Basketball", 
              "water", 
              "chips", 
              "Rag", 
              "Rubber Duck", 
              "Toy Elephant", 
              "Groceries", 
              "popcorn", 
              "crackers"
            ], 
            "All": [
              "unspecified"
            ]
          }, 
          "argname": "object", 
          "argtype": "nominal"
        }, 
        {
          "argopts": {
            "All": [
              "unspecified"
            ], 
            "Misc.": [
              "Car"
            ], 
            "Appliance": [
              "Refridgerator"
            ], 
            "Room": [
              "Bathroom", 
              "Living Room", 
              "Hallway", 
              "Entrance", 
              "Garage", 
              "Kitchen"
            ], 
            "Furniture": [
              "Countertop", 
              "Coffee table", 
              "Vanity", 
              "Bedside Table", 
              "Living Room Cabinets", 
              "Kitchen Cabinets", 
              "End Table", 
              "Table"
            ]
          }, 
          "argname": "destination", 
          "argtype": "nominal"
        }
      ], 
      "description": "place an object somewhere", 
      "categories": [
        "all", 
        "touch"
      ]
    }, 
    "tell": {
      "args": [
        {
          "argopts": {
            "Story": [
              "Hamlet", 
              "Snow White", 
              "Paddington", 
              "Cinderella", 
              "Three Little Pigs", 
              "Great Expectations", 
              "Lord of the Rings"
            ], 
            "All": [
              "unspecified"
            ]
          }, 
          "argname": "story", 
          "argtype": "nominal"
        }
      ], 
      "description": "tell a story", 
      "categories": [
        "all", 
        "speech"
      ]
    }, 
    "vacuum": {
      "args": [
        {
          "argopts": {
            "All": [
              "unspecified"
            ], 
            "Room": [
              "Bathroom", 
              "Living Room", 
              "Hallway", 
              "Entrance", 
              "Master Bedroom", 
              "Garage", 
              "Bedroom", 
              "Kitchen"
            ]
          }, 
          "argname": "area", 
          "argtype": "nominal"
        }
      ], 
      "description": "clean a floor by vacuuming it", 
      "categories": [
        "all", 
        "clean"
      ]
    }, 
    "ask": {
      "args": [
        {
          "argopts": {
            "Speech": [
              "$speech$"
            ]
          }, 
          "argname": "question", 
          "argtype": "open"
        }
      ], 
      "description": "ask a question", 
      "categories": [
        "all", 
        "speech"
      ]
    }, 
    "close": {
      "args": [
        {
          "argopts": {
            "All": [
              "unspecified"
            ], 
            "Room": [
              "Garage"
            ], 
            "Appliance": [
              "Refridgerator"
            ], 
            "Item": [
              "Mail"
            ], 
            "Misc.": [
              "Car"
            ], 
            "Furniture": [
              "Front Door", 
              "Back Door"
            ]
          }, 
          "argname": "container", 
          "argtype": "nominal"
        }
      ], 
      "description": "close a container", 
      "categories": [
        "all", 
        "touch"
      ]
    }, 
    "grab": {
      "args": [
        {
          "argopts": {
            "Item": [
              "apple", 
              "carrots", 
              "pie", 
              "cake", 
              "candy", 
              "Mail", 
              "Keys", 
              "leftovers", 
              "Clean Dishes", 
              "banana", 
              "soda", 
              "Basketball", 
              "water", 
              "chips", 
              "Rag", 
              "Rubber Duck", 
              "Toy Elephant", 
              "Groceries", 
              "popcorn", 
              "crackers"
            ], 
            "All": [
              "unspecified"
            ]
          }, 
          "argname": "object", 
          "argtype": "nominal"
        }
      ], 
      "description": "grab an object", 
      "categories": [
        "all", 
        "touch"
      ]
    }, 
    "deactivate": {
      "args": [
        {
          "argopts": {
            "All": [
              "unspecified"
            ], 
            "Furniture": [
              "Living Room Lamp", 
              "Bedroom Lamp", 
              "Master Bedroom Lamp"
            ]
          }, 
          "argname": "device", 
          "argtype": "nominal"
        }
      ], 
      "description": "turn a device off", 
      "categories": [
        "all", 
        "touch"
      ]
    }, 
    "open": {
      "args": [
        {
          "argopts": {
            "All": [
              "unspecified"
            ], 
            "Room": [
              "Garage"
            ], 
            "Appliance": [
              "Refridgerator"
            ], 
            "Item": [
              "Mail"
            ], 
            "Misc.": [
              "Car"
            ], 
            "Furniture": [
              "Front Door", 
              "Back Door"
            ]
          }, 
          "argname": "container", 
          "argtype": "nominal"
        }
      ], 
      "description": "open a container", 
      "categories": [
        "all", 
        "touch"
      ]
    }, 
    "wipe": {
      "args": [
        {
          "argopts": {
            "All": [
              "unspecified"
            ], 
            "Furniture": [
              "Countertop", 
              "Coffee table", 
              "Desk", 
              "Vanity", 
              "Bedside Table", 
              "Living Room Cabinets", 
              "Kitchen Cabinets", 
              "End Table", 
              "Table"
            ]
          }, 
          "argname": "surface", 
          "argtype": "nominal"
        }
      ], 
      "description": "clean a surface by wiping it", 
      "categories": [
        "all", 
        "clean"
      ]
    }, 
    "wait": {
      "args": [], 
      "description": "wait for something to happen", 
      "categories": [
        "all", 
        "events"
      ]
    }
  }