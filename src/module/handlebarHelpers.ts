export default function registerHelpers(): void {
  Handlebars.registerHelper('subtract', function (a, b) {
    return a - b;
  });
}
