// TRIANGULO
let trinagulo = {
    base: 30,
    altura: 30,
    perimetro: function(){
        return this.base * 3;
    },
    area: function (){
        return this.base * this.altura;
    }
}

let resultadoTrinagulo = console.log(trinagulo.area())


// CUADRADO
let cuadrado = {
    base: 20,
    altura: 20,
    perimetro: function(){
        return this.base * 4;
    },
    area: function (){
        return this.base * this.altura;
    }
}

let resultadoCuadrado = console.log(cuadrado.area())


// RECTAUNGULO
let rectangulo = {
    base: 40,
    altura: 20,
    perimetro: function(){
        return (this.base + this.altura)*2;
    },
    area: function (){
        return this.base * this.altura;
    }
}

let resultadoRectangulo = console.log(rectangulo.perimetro());