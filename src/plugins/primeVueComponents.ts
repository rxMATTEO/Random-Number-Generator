import type {App} from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Slider from "primevue/slider";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import ToastService from 'primevue/toastservice';
import DialogService from 'primevue/dialogservice';
import Toast from "primevue/toast";
import Divider from "primevue/divider";
import Dialog from "primevue/dialog";

const plugins = [DataTable, Column, Button, Slider, InputText, InputNumber, Toast, Dialog, Divider];

export default {
  install(app: App) {
    plugins.forEach( (plugin) => app.component(plugin.name, plugin) );
    app.use(ToastService);
    app.use(DialogService);
  }
};