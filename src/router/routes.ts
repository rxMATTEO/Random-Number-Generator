import Home from "../pages/HomePage.vue";
import HistoryPage from "../pages/HistoryPage.vue";
import SettingsPage from "../pages/SettingsPage.vue";
import FavNumbersPage from "../pages/FavNumbersPage.vue";

export const routes = [
  { path: '/', component: Home },
  { path: '/history', component: HistoryPage },
  { path: '/settings', component: SettingsPage },
  { path: '/favorite', component: FavNumbersPage },
];