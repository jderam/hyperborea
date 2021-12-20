export default class Hyperborea3EItemSheet extends ItemSheet {
    get template() {
        return `systems/hyperborea-3e/templates/sheets/${this.item.data.type}-sheet.html`
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.hb3e;
        return data;
    }
}
