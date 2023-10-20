import type {App} from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Slider from "primevue/slider";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";

const plugins = [DataTable, Column, Button, Slider, InputText, InputNumber];

export default {
  install(app: App) {
    plugins.forEach( (plugin) => app.component(plugin.name, plugin) );
  }
};