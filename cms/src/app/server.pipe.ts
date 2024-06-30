import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'server'
})
export class ServerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
