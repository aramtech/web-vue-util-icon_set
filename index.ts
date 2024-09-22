//customSvgs.ts
import { h } from "vue";
import type { IconProps, IconSet } from "vuetify";

import access from "./icons/access.vue";
import Action from "./icons/action.vue";
import addIcon from "./icons/add.vue";
import Auto from "./icons/auto.vue";
import back from "./icons/back.vue";
import back_rtl from "./icons/back_rtl.vue";
import BoxClosedOutline from "./icons/box.vue";
import chat from "./icons/chat.vue";
import chat_dot from "./icons/chat_dot.vue";
import clientsIcon from "./icons/clients.vue";
import dashboardIcon from "./icons/dashboard.vue";
import Desk from "./icons/desk.vue";
import Dollar from "./icons/dollar.vue";
import DollarCoin from "./icons/dollar_coin.vue";
import dot_light from "./icons/dot_light.vue";
import drawer_leftIcon from "./icons/drawer_left.vue";
import drawer_rightIcon from "./icons/drawer_right.vue";
import exchange from "./icons/exchange.vue";
import exportIcon from "./icons/export.vue";
import filterIcon from "./icons/filter.vue";
import foreignPurchases from "./icons/foreignImport.vue";
import Marketing from "./icons/marketing.vue";
import PayrollIcon from "./icons/Payroll.vue";
import PointOfSale from "./icons/point_of_sale.vue";
import purchasesIcon from "./icons/purchasesIcon.vue";
import reportsIcon from "./icons/reports.vue";
import RippedPaper from "./icons/ripped_paper.vue";
import RoundCheck from "./icons/round_check.vue";
import RoundedCalendar from "./icons/rounded_calendar.vue";
import RoundedPaper from "./icons/rounded_paper.vue";
import salesIcon from "./icons/sales.vue";
import salesRep from "./icons/salesRep.vue";
import settingsIcon from "./icons/settings.vue";
import side from "./icons/side.vue";
import sortIcon from "./icons/sort.vue";
import storageIcon from "./icons/storage.vue";
import themeIcon from "./icons/theme.vue";
import UserIcon from "./icons/user.vue";


const Icons: any = {
    access: access,
    back_rtl: back_rtl,
    back: back,
    dot_light: dot_light,
    chat_dot: chat_dot,
    chat: chat,
    side: side,
    auto: Auto,
    point_of_sale: PointOfSale,
    payroll: PayrollIcon,
    action: Action,
    desk: Desk,
    marketing: Marketing,
    ripped_paper: RippedPaper,
    user: UserIcon,
    rounded_calendar: RoundedCalendar,
    rounded_paper: RoundedPaper,
    purchases: purchasesIcon,
    dollar_filled_coin: DollarCoin,
    round_check: RoundCheck,
    drawer_left: drawer_leftIcon,
    drawer_right: drawer_rightIcon,
    foreignPurchases: foreignPurchases,
    dashboard: dashboardIcon,
    dollar: Dollar,
    sales: salesIcon,
    salesRep: salesRep,
    clients: clientsIcon,
    reports: reportsIcon,
    storage: storageIcon,
    settings: settingsIcon,
    add: addIcon,
    export: exportIcon,
    sort: sortIcon,
    filter: filterIcon,
    exchange: exchange,
    theme: themeIcon, 
    BoxClosedOutline: BoxClosedOutline,
    box_closed_outline: BoxClosedOutline,
};

const IconsSet: IconSet = {
    component: (props: IconProps) => h(Icons[props.icon as any]),
};

export { Icons /* aliases */, IconsSet };

