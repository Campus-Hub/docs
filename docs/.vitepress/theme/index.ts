import Theme from "vitepress/theme";
// import "./styles/vars.scss";
// import "./styles/styles.scss";

import "vitepress-markdown-timeline/dist/theme/index.css";
import { EnhanceAppContext } from "vitepress";

export default {
    ...Theme,
    enhanceApp(ctx: EnhanceAppContext) {
        Theme.enhanceApp(ctx);
    },
}