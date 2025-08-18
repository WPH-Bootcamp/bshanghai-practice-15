// keyword Function
function sumWithCallback(a: number, b: number, callbackFn: Function) {
  callbackFn(a, b);
}
sumWithCallback(1, 2, (sum) => console.log(sum)); //tidak error tapi sum type nya any, tidak dibenarkan

// solusi 1
function sumWithCallback2(
  a: number,
  b: number,
  callbackFn: (sum: number) => void
) {
  callbackFn(a + b);
}
sumWithCallback2(1, 2, (sum) => console.log(sum)); //tidak error

// solusi 2
type SumCallback = (sum: number) => void;
function sumWithCallback3(a: number, b: number, callbackFn: SumCallback) {
  callbackFn(a + b);
}
const callbackFn: SumCallback = (sum) => console.log(sum);

sumWithCallback3(1, 2, callbackFn); //tidak error
