import { __c, __m, __SYD, SYD_VAR } from "./sydneyDom_v3.js"
import "./variable.js"
import "./code_assets.js"
import "./page1.js"
import "./page2.js"
import "./page3.js"
import "./footer.js"

__SYD.container = () =>{
    return __c(
        "div",
        {
            style:`min-height:100vh;width:100vw;background:${SYD_VAR.mainClr.get()};font-family:font2;overflow:hidden;`
        },
        [
            __SYD.page1(),
            __SYD.page2(),
            __SYD.page3(),
            __SYD.footer()
        ]
    )
}

__m(__SYD.container());