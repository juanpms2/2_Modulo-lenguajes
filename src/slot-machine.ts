
let coinst: number = 0;

class SlotMachin {
    ruleta1: boolean;
    ruleta2: boolean;
    ruleta3: boolean;
    
    constructor(){};
    
    generator(){
        this.ruleta1 = Math.random() < 0.5 ? true : false;
        this.ruleta2 = Math.random() > 0.5 ? true : false;
        this.ruleta3 = Math.random() < 0.5 ? true : false;
        return [this.ruleta1, this.ruleta2, this.ruleta3];
    };

    play(){
        const ruletas = this.generator();
        const result = this.comprueba (ruletas);        
        coinst++;
        return [coinst, ruletas, result];
    };

    comprueba ( [...values] ) {
        const comprueba = (isTrue: boolean) => isTrue === true;
        const rule = values.every(comprueba);
        const result = rule === true ? `Congratulations!!!. You won ${ coinst } coins!!` : "Good luck next time!!";
        this.muestra ( values, result );
        rule === true ? coinst = 0 : null;
        return [rule, rule === true ? `Congratulations!!!. You won ${ coinst } coins!!` : "Good luck next time!!"];
    };

    muestra (value: Array<boolean>, result: string) {
        value.forEach(element => {
            let img = element === true ? "<img style='width:100px; float:left; padding:2px;' src='https://i.pinimg.com/236x/69/5c/d9/695cd938322fcc0758f72be77e6cc605.jpg' alt='wind'/>" : "<img style='width:100px; padding:2px;' src='https://cdn.shopify.com/s/files/1/1061/1924/files/Eye_Roll_Emoji_large.png?v=1541768914' alt='louse'/>";
            const div: any = document.createElement("div");
            div.innerHTML = img;
            document.body.appendChild(div);
        });
        console.log( result);
        const h3 = document.createElement("h3");
        h3.innerHTML = result;
        const a = document.body.appendChild(h3);
    };

}

document.getElementById("boton").addEventListener("click", jugar);

function jugar () {
    const machine1 = new SlotMachin();
    console.log ( machine1.play() ); //descomentar para ver en consola
}