//TypeScripts Statically def lanugage
//type Annotations --> num: number -- String:"Sathish"

let fname: string;
fname = "sathish";

let num:number;
num = 40;


let n: number =50; // Type Annotations
let ln: string = "naidu";


// Type Inference
let test ="TypeScript"; //Type=string- complie time it will be deceide

let billamount = 600; //Type=number - complie time it will be deceide

let isActive: boolean = true;

// null and undefined

let city : null = null;
let country:undefined = undefined;

// any Type

let value:any = 80;
value = "Hello";
value = true;


//void : function does not return any value:

function print():void{ // return type: void -- ct
    console.log("Hello");
}
//void and return value shouldn't be in same place

function getnumber():number{ // return type : number --ct
    return 50;
}

// any value can be return 

function getanyValue():any{
    return "3434";
}