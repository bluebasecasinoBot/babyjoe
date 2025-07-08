import { __c, __p, __SYD } from "./sydneyDom_v3.js";

__SYD.page3 = () =>{
    return __c(
        "div",
        {
            style:`height:100vh;width:100vw;position:fixed;top:0;left:0;background:rgba(0 , 0 , 0 , .7);;display:${__p(["page3" , "close"],true) ? "none" : "flex"};align-items:center;justify-content:center;`
        },
        [
            __SYD.close_meme(),
            __c(
                "div",
                {
                    style:`height:${300}px;width:${300}px;background-image:url(./assets/${__p(["page3" , "currentImage"],"")}.png);transform:rotate(${__p(["page3" , "rotate"],0)}deg) scale(${__p(["page3" , "rotate"],0) === 0 ? "1" : "0.4"});cursor:pointer;transition:all linear .3s;`
                },[],{genericStyle:[`bg_fit`],}
            )
        ],
        {
            createState:{
                stateName:"page3",
                state:{
                    currentImage:"",
                    rotate:0,
                    close:true
                }
            }
        }
    )
}