import { Pipe , PipeTransform } from '@angular/core';



@Pipe({name: 'nieme' })
export class NiemePipe implements PipeTransform {
	
	transform( value: any , name: string ): string {

		let endStr: string = '';

		switch( value ){
			case 0:
				endStr = "Premier élément " + name;
				break;
			case 1 : 
				endStr = "Second élément " + name;
				break;
			case 1 : 
				endStr = "Troisième élément " + name;
				break;
			default:
				endStr = value + " ème élément " + name;
		}
			
		return endStr;

		// throw new Error("Method not implemented.");
	}
	



	

}