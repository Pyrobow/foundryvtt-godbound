import { godbound } from './config';

export default function registerHelpers(): void {
  Handlebars.registerHelper('subtract', function (a, b) {
    return a - b;
  });

  Handlebars.registerHelper('concat', function (a: string, b: string) {
    return `${a}${b}`;
  });

  Handlebars.registerHelper('object', function ({ hash }) {
    return hash;
  });

  Handlebars.registerHelper('checkEquals', function (a: string | number, b: string | number) {
    return a === b;
  });

  // Handlebars.registerHelper('array', function (...args) {
  //   return Array.from(args).slice(0, args.length - 1);
  // });

  // Handlebars.registerHelper('arrayFromArray', function (a: Item[]) {
  //   return Array.from(a);
  // });
}
