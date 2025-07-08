import { __c, __p, __SYD } from "./sydneyDom_v3.js";

__SYD.footer = () =>{
    return __c(
        "div",
        {
            style:`height:70px;width:100%;max-width:fit-content;padding:0px 20px;background:#000;color:#fff;display:flex;gap:30px;justify-content:center;align-items:center;margin:auto;font-size:${__p(["footer" , "font"],"16px")};`
        },
        [
            __c("a" , {style:"text-decoration:none;color:inherit;font-weight:900;font-family:font1;" , href:""},["Twitter"]),
            __c("a" , {style:"text-decoration:none;color:inherit;font-weight:900;font-family:font1;" , href:"https://t.me/babyjoe_eth"},["Telegram"]),
            __c("a" , {style:"text-decoration:none;color:inherit;font-weight:900;font-family:font1;" , href:""},["Uniswap"]),
            __c("a" , {style:"text-decoration:none;color:inherit;font-weight:900;font-family:font1;" , href:""},["DexTools"])
        ],
        {
            createState:{
                stateName:"footer",
                state:{
                    font:"16px"
                }
            },
            mediaQuery:{
                query:[{size:"<800px" , prop:{font:"13px"}}],
                defState:{font:"16px"}
            }
        }
    )
}