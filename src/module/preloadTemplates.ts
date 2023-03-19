export async function preloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = [
    // Add paths to "systems/godbound/templates"
    'systems/godbound/templates/sheets/partials/character-fact-card.hbs',
    'systems/godbound/templates/sheets/partials/character-weapon-card.hbs',
    'systems/godbound/templates/sheets/partials/character-armour-card.hbs',
    'systems/godbound/templates/sheets/partials/character-word-card.hbs',
    'systems/godbound/templates/sheets/partials/character-artifact-card.hbs',
    'systems/godbound/templates/sheets/partials/character-gift-card.hbs',
    'systems/godbound/templates/sheets/partials/character-thaumaturgy-card.hbs',
    'systems/godbound/templates/sheets/partials/character-strife-card.hbs',
    'systems/godbound/templates/sheets/partials/character-strifeTechnique-card.hbs',
    'systems/godbound/templates/sheets/partials/character-lowMagic-card.hbs',
    'systems/godbound/templates/sheets/partials/character-project-card.hbs',
  ];

  return loadTemplates(templatePaths);
}
