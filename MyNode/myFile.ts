import {readFile} from 'fs';

readFile("../Doc/sallySample.txt", 'utf8', (error, data)=>{

if (error){
    console.error("error reading file", error.message);
}
console.log(data)



})