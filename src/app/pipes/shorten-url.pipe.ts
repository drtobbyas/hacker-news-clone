import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({name: 'shortenUrl'})
export class shortenUrl implements PipeTransform {
  transform(url: String) {
    const truncatedUrl = url.split('/');
    return truncatedUrl[2];
  }
}
