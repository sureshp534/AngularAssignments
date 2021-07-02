//Assignment 2
const cars = [
    {
      name: 'Mustang',
      company: 'Ford',
      price: 1000,
      modelNo: 'S1'
    }, {
      name: 'Jaguar',
      company: 'Tata',
      price: 10000,
      modelNo: 'S2'
    }, {
      name: 'Rolls Royce',
      company: 'Rolls Royce',
      price: 20000,
      modelNo: 'S13'
    }, {
      name: 'i10',
      company: 'Hyundai',
      price: 3000,
      modelNo: 'S24'
    }, {
      name: 'Amaze',
      company: 'Tata',
      price: 2000,
      modelNo: 'S4'
    }, {
      name: 'Skoda',
      company: 'Laura',
      price: 1400,
      modelNo: 'S5'
    }, {
      name: 'Duster',
      company: 'Nissan',
      price: 3000,
      modelNo: 'S28'
    }
  ];

  const people = [
    {
      name: 'Jack',
      minBudget: 5000
    }, {
      name: 'Joe',
      minBudget: 3000
    }, {
      name: 'Jill',
      minBudget: 50000
    }, {
      name: 'Jim',
      minBudget: 10000
    }
  ];

  
  var list = function(){
	
	  return function(){
		  for(var i=0;i<people.length;i++){
			  let canBuycar="";
			  let count=1;
			  
		  	  console.log("Hi "+people[i].name+". your Budget is : $"+people[i].minBudget);
		  	document.write("Hi "+people[i].name+". your Budget is : $"+people[i].minBudget+"<br>");
		  	console.log("*****************************");
		  	  for (var j=0; j<cars.length;j++){
		  		  if(cars[j].price<=people[i].minBudget){
		  			canBuycar = canBuycar +"\n<br>"+count+". "+cars[j].name +" cost:: $"+cars[j].price;
		  			//console.log("You can buy "+cars[j].name +" cost:: $"+cars[j].price);
		  		  count++;
		  		  }
		  		
		  		  }
		  	console.log("You can buy any of below car \n -----------------------------"+canBuycar);
		  	console.log("\n");
			document.write("You can buy any of below car <br> -----------------------------"+canBuycar+"<br><br>");
		  }
	  }
	  
  }
  
 list()();
