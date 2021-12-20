import {hb3e} from "./module/config.js"
import Hyperborea3EItemSheet from "./module/sheets/Hyperborea3EItemSheet.js";

Hooks.once("init", function() {
    console.log("hyperborea-3e | Initializing Hyperborea 3E System");

    CONFIG.hb3e = hb3e;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("hyperborea-3e", Hyperborea3EItemSheet, {makeDefault: true});
});
