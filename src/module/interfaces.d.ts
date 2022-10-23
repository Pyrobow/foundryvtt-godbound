// ------------------------------------------------------
// |       SHEET DATA TYPES                             |
// ------------------------------------------------------

interface GodboundItemSheetData extends ItemSheet.Data<ItemSheet.Options> {
  // eslint-disable-next-line @typescript-eslint/ban-types
  config: Object;
}

interface GodboundCharacterSheetData extends ActorSheet.Data {
  // eslint-disable-next-line @typescript-eslint/ban-types
  config: Object;
  weapons?: Item[];
  armours?: Item[];
  facts?: Item[];
  words?: Item[];
  gifts?: Item[];
  strifes?: Item[];
  strifeTechniques?: Item[];
  lowMagic?: Item[];
  thaumaturgy?: Item[];
  projects?: Item[];
  artifacts?: Item[];
}
