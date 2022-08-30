export default class GodboundItemSheet extends ItemSheet {
  static get defaultOptions(): DocumentSheetOptions {
    return mergeObject(super.defaultOptions, {
      classes: ['godbound', 'sheet', 'item'],
    });
  }

  get template(): string {
    return `systems/godbound/templates/sheets/items/${this.item.data.type}-sheet.hbs`;
  }

  async getData(): Promise<GodboundItemSheetData> {
    let data = super.getData() as GodboundItemSheetData;
    if (data instanceof Promise) data = await data;

    data.config = CONFIG.godbound;
    console.log('Document:');
    console.log(this.document.toObject());
    console.log('All Data:');
    console.log(data);
    return data;
  }
}
