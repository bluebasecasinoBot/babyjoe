import { __c, __p, __SYD } from "./sydneyDom_v3.js"

__SYD.page1 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;margin-bottom:60px;display:flex;flex-direction:column;gap:30px;align-items:center;"
        },
        [   
            __SYD.page1_main_text(),
            __SYD.contract_adx(),
            __SYD.contact_tab_sec()
        ],
        {
            createState:{
                stateName:"page1",
                state:{
                    mainFont:"60px"
                }
            },
            mediaQuery:{
                query:[{size:">800px" , prop:{mainFont:"80px"}}],
                defState:{mainFont:"60px"}
            }
        }
    )
}

__SYD.page1_main_text = () =>{
    return __c(
        "div",
        {
            style:`height:100px;width:100%;font-weight:900;font-size:${__p(["page1" , "mainFont"],"60px")};text-transform:capitalize;position:relative;color:transparent;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;column-gap:15px;`,
            // class:"fluid-fill-text"
        },
        [
            __c(
                "div",
                {
                    style:`position:relative;height:${__p(["page1" , "mainFont"],"60px")};width:fit-content;`
                },
                [
                    __c(
                        "p",
                        {
                            style:"min-width:max-content;color:rgb(46, 46, 46);font-family:font1;"
                        },
                        [
                            "baby joe"
                        ]
                    ),
                    __c(
                        "p",
                        {
                            style:"position:absolute;top:0%;left:50%;min-width:max-content;transform:translateX(-50%) translateY(0%);color:#facc15;animation:animate 4s ease-in-out infinite;font-family:font1;"
                        },
                        [
                            "baby joe"
                        ]
                    )
                ]
            ),
            __c(
                "p",
                {
                    style:`height:${__p(["page1" , "mainFont"],"60px")};min-width:${__p(["page1" , "mainFont"],"60px")};background-image:url(./assets/baby-joe-head.png);background-position:bottom;`
                },
                [
                    
                ],
                {
                    genericStyle:["bg_cover"]
                }
            )
        ]
    )
}

__SYD.contact_tab_sec = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;padding:10px 0px;width:100%;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around;gap:15px;"
        },
        [
            __SYD.top_front_tabs({header:"Uniswap" , img:"uniswap"}),
            __SYD.top_front_tabs({header:"Dextools" , img:"dexTool"}),
            __SYD.top_front_tabs({header:"Telegram" , img:"telegram"}),
            __SYD.top_front_tabs({header:"Twitter" , img:"twitter"})
        ]
    )
}