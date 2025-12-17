//destructure ka matlab hota hai bane huye structure ko tor dena aur alag alg kar dena

let obj = {
    user :"Ram",
    age:50,
    city:"Kanpur"
}
let{user: age,city} = obj
console.log(age);
console.log(city);

//ye hota hai destructure okk jaise ki obj tha lekin maine usko parts mai tor diya 

let arr = ['krishna','radha','ram','sita','urmila','arjun']
var [a,b,c,...d] = arr
console.log(arr);



let array = ['India','USA','Chicago','Brazil','Japan','Russia','Bangkok']
let array2 = [...array]
 array2.push('Paris')

let araa = ['Dosa','Puri','Dal','PannerButter','Chicken Roast']
let araa2 = [...araa]
araa.push('Dal Makhni')


let object  = {
    user : "Bunny",
    age:20,
    work:"creative web dev"
}
let object2 = {...object}

object2.work = "digital marketing"



let obc = {
    user :'Anubhav',
    age :34,
    city:'Ranchi',
    skills:['js','react-js','next-js','python']

}

let {skills} = obc;
let [first,...restSkills] = skills
console.log(restSkills);
