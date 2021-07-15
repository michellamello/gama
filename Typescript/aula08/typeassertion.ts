//Type Assertion

const minhaIdade: any = 35;
(minhaIdade as number).toString();
//<number>minhaIdade.toString();

const input = document.getElementById("numero1") as HTMLInputElement;
//const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);