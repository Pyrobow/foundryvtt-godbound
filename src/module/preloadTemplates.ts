export async function preloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = [
    // Add paths to "systems/godbound/templates"
    'systems/godbound/templates/sheets/partials/character-fact-card.hbs',
    'systems/godbound/templates/sheets/partials/character-weapon-card.hbs',
    'systems/godbound/templates/sheets/partials/character-armour-card.hbs',
  ];

  return loadTemplates(templatePaths);
}
