let t1=["Ahmed", "Ali", "Nabil", "Said"];
console.log("t1=", t1)
let t2=t1.splice(1, 2);//t1= [ 'Ahmed', 'Ali', 'Nabil', 'Said' ]
console.log("t1=", t1);//t1= [ 'Ahmed', 'Said' ]
console.log("t2=", t2);//t2= [ 'Ali', 'Nabil' ]

let t3=t1.splice(1, 0, "Ali", "Nabil");
console.log("t1=", t1);//t1= [ 'Ahmed', 'Ali', 'Nabil', 'Said' ]
console.log("t3=", t3);//t3= []

let t4=t1.splice(1);
console.log("t1=", t1);//t1= [ 'Ahmed' ]
console.log("t4=", t4);//t4= [ 'Ali', 'Nabil', 'Said' ]
