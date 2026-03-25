let n=5;
console.log("Hello");

for(let i=1; i<=n; i++){
    let pattern = "";

    for(let j=n-i; j>=1; j--){
        pattern += " ";
    }

    for(let k=1; k<=i; k++){
        pattern += "*";
    }
    console.log(pattern);
}

console.log("Hello");

for(let i=n; i>=1; i--){
    let pattern="";
    
    for(let j=n-i; j>=1; j--){
        pattern += " ";
    }

    for(let k=1; k<=i; k++){
        pattern += "*";
    }
    console.log(pattern);
}