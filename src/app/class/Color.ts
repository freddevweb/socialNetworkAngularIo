
export class Color {

	public red: number;
	public green: number;
	public blue: number;


    constructor(){

        this.red    = 0;
        this.green  = 0;
        this.blue   = 0;

        
    }

    toString(): string{
        return "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")";
    }

}