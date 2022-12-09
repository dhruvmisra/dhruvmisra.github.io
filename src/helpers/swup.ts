// @ts-nocheck
import Swup from "swup";
import SwupSlideTheme from "@swup/slide-theme";
import SwupA11yPlugin from "@swup/a11y-plugin";

const swup = new Swup({
    plugins: [new SwupA11yPlugin(), new SwupSlideTheme()],
});
