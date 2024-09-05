//Anonymous Functions: These are functions declared without a name. They are often assigned to variables or used as callback functions.
var myFunction = function() {
    // Function body
};

//Arrow Functions (ES6): These are a concise way to write anonymous functions. They are especially useful for functions that don't rely on this and have a simple one-liner return.
var myFunction = () => {
    // Function body
};

//Immediately Invoked Function Expressions (IIFE): These are functions that are executed immediately after they are defined.
(function() {
    // Function body
})();

//Generator Functions (ES6): These are functions that can be paused and resumed, allowing them to produce a sequence of values lazily.
function* myGenerator() {
    // Generator function body
}

//Constructor Functions: These are functions used to create objects with a shared prototype.
function MyClass() {
    // Constructor function body
}

//Methods: These are functions defined inside objects.
var myObject = {
    myMethod: function() {
        // Method body
    }
};


//Fat arrow functions, 
(parameters) => {
    // Function body
}
//example:-

// Paramparaagat function expression
var double = function(x) {
    return x * 2;
};

// Arrow function ka samaan
var double = (x) => {
    return x * 2;
};

// Nishpaksh return
var double = (x) => x * 2;

// Upayog
console.log(double(5)); // Output: 10
