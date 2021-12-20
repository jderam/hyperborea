export default class HyperboreaItemSheet extends ItemSheet {
    get template() {
        return `systems/hyperborea/templates/sheets/${this.item.data.type}-sheet.html`
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.HYPERBOREA;
        return data;
    }
}
