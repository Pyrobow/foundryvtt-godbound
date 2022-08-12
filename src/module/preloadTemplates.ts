export async function preloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = [
    // Add paths to "systems/godbound/templates"
  ];

  return loadTemplates(templatePaths);
}
