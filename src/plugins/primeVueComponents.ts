import type {App} from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";

const plugins = [DataTable, Column, Button];

export default {
  install(app: App) {
    plugins.forEach( (plugin) => app.component(plugin.name, plugin) );
  }
};