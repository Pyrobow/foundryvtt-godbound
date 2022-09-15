export default class GodboundCharacterSheet extends ActorSheet {
  static get defaultOptions(): DocumentSheetOptions {
    return mergeObject(super.defaultOptions, {
      classes: ['godbound', 'sheet', 'actor', 'character'],
      template: `systems/godbound/templates/sheets/actors/character-sheet.hbs`,
      width: 750,
      height: 600,
    });
  }
}
