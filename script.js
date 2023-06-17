/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(function(element){
        if(element.profession === "developer"){
            console.log(element);
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(element){
        if(element.profession === "developer"){
            console.log(element);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id:4,name:"susan",age:"20",profession:"intern"});
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let output = arr.filter(function(employee){
        if(employee.profession != "admin"){
            return true;
        }
    })
    console.log(output);
  }
  
  let arr1 = [
    { id: 4, name: "harry", age: "22", profession: "intern"},
    { id: 5, name: "shelly", age: "20", profession: "developer"},
    { id: 6, name: "ronaldo", age: "21", profession: "Charted Accountant"},
  ];

  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = arr.concat(arr1);
    console.log(newArr);
  }