export default class GodboundNpcSheet extends ActorSheet {
  static get defaultOptions(): DocumentSheetOptions {
    return mergeObject(super.defaultOptions, {
      classes: ['godbound', 'sheet', 'actor', 'npc'],
      template: `systems/godbound/templates/sheets/actors/npc-sheet.hbs`,
      width: 750,
      height: 600,
      tabs: [
        {
          navSelector: '.npc-sheet-tabs',
          contentSelector: '.npc-sheet-body',
          initial: 'core',
        },
      ],
    });
  }

  async getData(): Promise<GodboundCharacterSheetData> {
    let data = super.getData() as GodboundCharacterSheetData;
    if (data instanceof Promise) data = await data;

    data.config = CONFIG.godbound;
    return data;
  }
}
