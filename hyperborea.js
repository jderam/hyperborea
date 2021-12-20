import {HYPERBOREA} from "./module/config.js"
import HyperboreaItemSheet from "./module/sheets/HyperboreaItemSheet.js";

Hooks.once("init", function() {
    console.log("hyperborea | Initializing Hyperborea 3E System");

    CONFIG.HYPERBOREA = HYPERBOREA;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("hyperborea", HyperboreaItemSheet, {makeDefault: true});
});
