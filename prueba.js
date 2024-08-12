const n = {
    nombre: "Ola k ase",
    ciudad: "Bogota",
    edad: 10,
};

const hola = () => {
    return new Promise ((resolve,reject) =>{
        setTimeout(() => {
            resolve(n);
        }, 2000);
    });
    
}

const envio = async () =>{
    l = await hola();
    console.log(l);
}
console.log(envio());

/*
const gola = (a,b,lawea) =>{
    f = a+b+lawea;
    return f;
}
const lawea=()=>{
    a="\nolaa";
    b="k asee";
    return a+b;
}

console.log(gola(2,3,lawea()));

*/