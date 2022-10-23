export default class GodboundCharacterSheet extends ActorSheet {
  static get defaultOptions(): DocumentSheetOptions {
    return mergeObject(super.defaultOptions, {
      classes: ['godbound', 'sheet', 'actor', 'character'],
      template: `systems/godbound/templates/sheets/actors/character-sheet.hbs`,
      width: 750,
      height: 600,
      tabs: [
        {
          navSelector: '.pc-sheet-tabs',
          contentSelector: '.pc-sheet-body',
          initial: 'biography',
        },
      ],
    });
  }

  async getData(): Promise<GodboundCharacterSheetData> {
    let data = super.getData() as GodboundCharacterSheetData;
    if (data instanceof Promise) data = await data;

    data.config = CONFIG.godbound;
    data.facts = this.actor.items.filter((i) => i.type === 'fact');
    data.weapons = this.actor.items.filter((i) => i.type === 'weapon');
    data.armours = this.actor.items.filter((i) => i.type === 'armour');
    data.words = this.actor.items.filter((i) => i.type === 'words');
    data.artifacts = this.actor.items.filter((i) => i.type === 'artifacts');
    data.wordGifts = this.actor.items.filter((i) => i.type === 'gift');
    return data;
  }
}
