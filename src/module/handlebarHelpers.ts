export default function registerHelpers(): void {
  Handlebars.registerHelper('subtract', function (a, b) {
    return a - b;
  });

  Handlebars.registerHelper('concat', function (a: string, b: string) {
    return `${a}${b}`;
  });
}
