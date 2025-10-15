 
let num = document.querySelectorAll('.num')
let disp = document.querySelector('.display')
let op = document.querySelectorAll('.op')
let reset = document.querySelector(".reset")


let firstbtn ='';
let scndbtn ='';
let oper='';
let res=''
for(let n of num){
    n.addEventListener('click', ()=>{
   if( oper==''){
        firstbtn += n.innerText;
            console.log('1st', firstbtn);
            disp.innerText = firstbtn;
         
        }
 else{
     scndbtn += n.innerText;
    disp.innerText=scndbtn
    
    

 }

    })
 

 
   
}

for(let o of op){
    o.addEventListener('click', ()=>{
  disp.innerText=o.innerText;
        if(o.innerText!=='='){
            oper = o.innerText;
            console.log(oper);
            
        }else{
            if( firstbtn !=='' && scndbtn!==''){
            if(oper==='+' ){
            res=Number(firstbtn)+Number(scndbtn)}
            if(oper==='-' ){
            res=Number(firstbtn)-Number(scndbtn)}
            if(oper==='*'){
            res=Number(firstbtn)*Number(scndbtn)}
            if(oper==='/'){
            res=Number(firstbtn)/Number(scndbtn)}
                disp.innerText=res.toString();
        firstbtn=res.toString();
        
        }}
    

    })
}
reset.addEventListener('click',()=>{
    firstbtn = '';
scndbtn = '';
oper = '';
res = '';
disp.innerText = '0';
})

