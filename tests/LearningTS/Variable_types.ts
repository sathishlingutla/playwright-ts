let isBeginner: boolean = true;

let total:number = 100;

let name1: string = 'Naidu_Sathish';

// Use backticks for template literals!
let sentence: string = `my Name is ${name1} i am a beginner in typescript`;

console.log(sentence);


let ne : null = null;
let ue : undefined = undefined;

// let isNew: boolean = null;
// let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];
let person1: [string, number] = ['link',12345];// pupils

//enum

enum color{red,green,black};

let c:color = color.black;
console.log(c);
console.log("checking the terminal")



enum color{Red=9,Green,Black};

let ff:color = color.Black;
console.log(ff);

//Any type

let randomValue:any = 10;
randomValue = 'hello';
randomValue = true;
randomValue = null;

let myvariable: any = 20;
console.log(myvariable.name);
myvariable();

myvariable.toUpperCase();


function hasName(obj:any): obj is { name : string}{
 return !! obj && typeof obj === 'object' && 'name' in obj;
}

let myvariable_unknow: unknown = 20;
console.log(myvariable_unknow);
//myvariable_unknow();

myvariable.toUpperCase();

