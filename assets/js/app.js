const cl = console.log;

const companies = [
    { name: "Company One",    id:1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two",    id:2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three",  id:3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four",   id:4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five",   id:5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six",    id:6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven",  id:7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight",  id:8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine",   id:9, category: "Retail", start: 1981, end: 1989 }
 ];

 
//  ===========================================================================================================
// ------------------ FIND INDEX ---------------------

let givenId = 5;
let result1 = companies.findIndex((para) => {
   return para.id === givenId;
})
cl(result1)


// by using for loop >>>>>>>>>>>>

for(let i = 0; i < companies.length; i++){
   if(companies[i].id === givenId){
      cl(i)
      break;
   }
};


// by using for each >>>>>>>>>>>>>>>>>>

companies.forEach((param, i) =>{
    if(param.id === givenId){
        cl(i)
    }
})
















let blogComment = [
   { id:124 , comment: "okay"},
   { id:125 , comment: "good"},
   { id:126 , comment:"Excellent"},
   { id:127 , comment:"Bad"}   
]

let givenid = 127;
let result2 = blogComment.findIndex((par)=> {
   return par.id === givenid;
})

cl(result2);
 
blogComment.splice(result2, 1);
cl(blogComment)




//===================================================
// SORT >>>>>>>>>>>>>>>>>>>>>>>>

let num1 = [1,21,200,100,15,44,55]

let result3 = num1.sort();
cl(result3)











// Ascending order 

let num2 = [45, 12, 89, 3, 27, 64, 8, 51, 19];
let result4 = num2.sort((n1,n2)=> {
   if(n1 > n2){
      return 1
   }else{
      return -1
   }
});
cl(result4)





// Descending order

let result5 = num2.sort((n1,n2)=> {
   if(n1 < n2){
      return 1
   }else{
      return -1
   }
});

cl(result5)