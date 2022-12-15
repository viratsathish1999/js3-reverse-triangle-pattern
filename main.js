let n=5;
let b="";
for(let i=1;i<=n;i++){
    for(let j=1;j<=n-i+1;j++){
        document.write(j+b)
    }
    document.write("<br>")
}