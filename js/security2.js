class Security2 {

    constructor(){

        this.access4 = createInput("Code1")
        this.access4.position(400,90);
        this.access4.style('background', 'white');  

        this.button4 = createButton('Check');
        this.button4.position(400,120);
        this.button4.style('background', 'lightgrey'); 
    }

   display(){
    system1 = new System()
        this.button4.mousePressed(() => {
            if(system1.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                score++;
            }
        });

    }
}