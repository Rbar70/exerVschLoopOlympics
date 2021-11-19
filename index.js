//1 Preliminaries
for(var i = 0; i < 9; i++)
{
    console.log(i)
}
//2 Preliminaries
for(var i = 9; i > -1; i--)
{
    console.log(i)
}


//3 Preliminaries
var fruits = ["banana", "orange", "apple", "kiwi"];
for (var i = 0; i < fruits.length; i++)
 {
  console.log(fruits[i]);
 }


 //1 Bronze Medal
var numberArray = [];
for(var i = 1; i <= 9; i++){
        numberArray.push(i);
    }
   
    console.log(numberArray); 
 
//2 Bronze Medal
for(var i = 1; i < 101; i++){
    if(i % 2 === 0){
    console.log(i)
        }
    }

//3 Bronze Medal
    var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
    function every_other(array){
    var temporaryArray = []
    for (var i = 0; i < array.length; i += 2){ 
        temporaryArray.push(array[i])
    }
    return temporaryArray.join(", ")
}
console.log(every_other(fruit))

//1 Silver
var peopleArray = [
    {
      name: "Joe Dirt",
      age: 2,
      occupations: "welder"
    },
    {
      name: "Todd Knows",
      age: 34,
      occupations: "builder"
    },
    {
      name: "Johnny Disc",
      age: 13,
      occupations: "DJ"
    },
    {
      name: "Nalgene Bottle",
      age: 42,
      occupations: "MC"
    }
  ]

var nameArray = [];
for(var i = 0; i < peopleArray.length; i++){
      nameArray.push(peopleArray[i].name);
  }     console.log(nameArray); 
//2 Silver
var occupationsArray = [];
for (var i = 0; i < peopleArray.length; i++){
    occupationsArray.push(peopleArray[i].occupations);}
    console.log(occupationsArray)
//2 Silver added age too
var ageArray = [];
for (var i = 0; i < peopleArray.length; i++){
    ageArray.push(peopleArray[i].age);}
        console.log(ageArray)

//3 Silver
    function every_other(array){
        var temporaryArray = []
        for (var i = 0; i < array.length; i += 2){ 
            temporaryArray.push(array[i])
        }
        return temporaryArray.join(", ")
    }
    console.log(every_other(nameArray))

    function every_other(array){
        var temporaryArray = []
        for (var i = 1; i < array.length; i += 2){ 
            temporaryArray.push(array[i])
        }
        return temporaryArray.join(", ")
    }
    console.log(every_other(occupationsArray))
    console.log("^thought I screwed up and thought this was a city lol.... I was like what have I Done!")

    var grid = [];

//1 Gold 
for( var i = 0; i < 3; i++ )
{
    grid.push( [] ); 
    for( var j = 0; j < 3; j++ ) {
        grid[i].push( 0 );
    }
}

console.log( grid );

//2 Gold
var grid = [];

for( var i = 0; i < 3; i++ )
{
    grid.push( [] ); 
    for( var j = 0; j < 3; j++ ) {
        grid[i].push( i );
    }
}

console.log( grid );

//3 Gold
var grid = [];

for( var i = 0; i < 3; i++ )
{
    grid.push( [] ); 
    for( var j = 0; j < 3; j++ ) {
        grid[i].push( j );
    }
}

console.log( grid );

//4 Gold 6x6 grid 
var grid = [[0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5],[0, 1, 2, 3, 4, 5],[0, 1, 2, 3, 4, 5],[0, 1, 2, 3, 4, 5],];

for( var i = 0; i < grid.length; i++ )
{
    
     for( var j = 0; j < 6; j++ ) {
         grid[i][j] = "x";
     }
 }
 console.log( grid );