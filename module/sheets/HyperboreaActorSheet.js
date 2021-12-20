export default class HyperboreaActorSheet extends ActorSheet {
    get template() {
        return `systems/hyperborea/templates/sheets/${this.item.data.type}-sheet.html`
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.HYPERBOREA;
        return data;
    }
}
