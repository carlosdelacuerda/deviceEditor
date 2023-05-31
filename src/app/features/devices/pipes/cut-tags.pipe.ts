import { Pipe, PipeTransform } from "@angular/core";
   
@Pipe({
  name: "cutTags"
})
export class CutTags implements PipeTransform {
  transform(input:string[]) {
    let result = ''
    let word = ''
    // Go through the Array to divide the words
    for (let item of input){
      word = item
    // In case a word exceeds the maximum number of characters, we cut it and add three dots
      if(item.length > 7){
        word = item.slice(0,8) + '...';
      }
      // Separate words with commas
      result = result + ', ' + word
    }
    // Remove the first comma
    result = result.slice(1)
    return result;
  }
}