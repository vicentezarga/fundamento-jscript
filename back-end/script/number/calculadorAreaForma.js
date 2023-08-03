let retangulo = {
    'forma':'retangulo',
    'altura':'10',
    'largura':'15'
}

let trinagulo ={
    'forma':'triangulo',
    'altura':'10',
    'largura':'20'
}

let formas = [retangulo, trinagulo];
let area;

console.log(typeof formas);

formas.forEach(f =>{
    if(f.forma === 'retangulo'){
        area = f.altura * f.largura;
    }
    if(f.forma ==='triangulo'){
        area = f.altura * f.largura /f.altura
    }

    console.log('Forma Geometríca: ' + `${f.forma} ` + area);
});


