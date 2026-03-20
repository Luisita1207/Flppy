class Inicio extends Phaser.Scene{

constructor(){
super("Inicio");
}

preload(){
    this.load.image("fondo","../assets/fondo.png");
    this.load.image("bird","../assets/bird1.png");
    this.load.image("pipe","../assets/pipe.png");
    this.load.image("portada","../assets/portada.png");
}

create(){

// ACTIVIDAD:

// Cambiar estas posiciones fijas para que se adapten al tamaño del celular

// usando this.scale.width y this.scale.height

this.add.image(this.scale.width / 2,this.scale.height / 2 ,"portada")
.setDisplaySize(this.scale.width,this.scale.height);

this.add.text(40,30,"Super \nPerrito \nCabezón",{ //el título de mi juego
    fontSize:"35px",
    fill:"#b2c8f8",
        fontStyle: "bold",
        stroke: "#000000",
        strokeThickness: 6, 
   
});
    let boton = this.add.text(
        this.scale.width / 2,
        this.scale.height / 2 + 190,
        "Play",
            {
                fontSize: "32px",
                color: "#000000",
                backgroundColor: "#2c82d3a6",
                stroke: "#ffffff",
                fontStyle: "bold",
                strokeThickness: 3,
                padding: { x: 20, y: 10 }
            }
        ).setOrigin(0.5);

        boton.setInteractive();
        boton.on("pointerdown", () => {
            this.scene.start("Juego");
        });
    }
}
