import type {App} from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const plugins = [DataTable, Column];

export default {
  install(app: App) {
    plugins.forEach( (plugin) => app.component(plugin.name, plugin) );
  }
};