import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(phoneNumber: string) {
    
    if (phoneNumber.length === 10) {

      return '(' + phoneNumber.substring(0, 3) + ') ' + phoneNumber.substring(3, 6) + '-' + phoneNumber.substring(6)

    }
    else {
      console.log(phoneNumber)
      console.log('phone number is not formatted correctly')
      return phoneNumber
    }

  }

}
