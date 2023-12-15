import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidator {
    static validateName(control: AbstractControl){
        const value = control.value as string; // cast from any as we know name validation will be on a string
        if(value.includes("test"))
            return { invalidName: true };
        return null;
    }

    static validateSpecialChar(char: string) { 
        return (control: AbstractControl) => {
            const value = control.value as string; // cast from any as we know name validation will be on a string
            if(value.includes(char))
                return { invalidSpecialChar: true };
            return null;        
        }
    }

    static validateDates(formGroup: FormGroup) { 
        const checkInDate : any = new Date(formGroup.get("checkInDate")?.value); 
        const checkOutDate : any = new Date(formGroup.get("checkOutDate")?.value); 
        const diff = Math.abs(checkInDate - checkOutDate);
        const diffDays = Math.ceil(diff / (1000 * 60 * 60 *24));
        console.log(diffDays);
        if(diffDays == 1) {
            formGroup.get('checkOutDate')?.setErrors({invalidDate: true });
            return { invalidDate: true };
        }
        if(checkInDate > checkOutDate)
            return { invalidDate: true };

        return null;        
    }

}
