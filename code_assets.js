import { __c, __g, __SYD, __u } from "./sydneyDom_v3.js"

__SYD.top_front_tabs = ({img = "" , header = "baby joe"} = {}) =>{
    return __c(
        "div",
        {
            class:"baby-tab"
        },
        [
            __c(
                "div",
                {
                    style:`height:100%;width:100%;border-radius:inherit;background-image:url(./assets/${img}.png)`,
                },[],{
                    genericStyle:["bg_fit"]
                }
            ),
            __c(
                "p",
                {
                    class:"baby-tab-header"
                },
                [
                    header
                ]
            )
        ]
    )
}

__SYD.contract_adx = () =>{
    return __c(
        "div",
        {
            class:"contract-tab"
        },
        [
            __c(
                "span",
                {
                    class:"contract-label"
                },
                [
                    "Contract Address"
                ]
            ),
            __c(
                "div",
                {
                    class:"contract-box"
                },
                [
                    __c(
                        "code",
                        {
                            id:"contract-address"
                        },
                        ["0x4e9F...BABYJOE"]
                    ),
                    __c(
                        "button",
                        {
                            class:"copy-btn"
                        },
                        [
                            "Copy"
                        ],
                        {
                            events:{
                                onclick:e =>{
                                    const address = document.getElementById('contract-address').textContent;
                                    navigator.clipboard.writeText(address);
                                    // alert('Contract address copied!');
                                }
                            }
                        }
                    )
                ]
            )
        ]
    )
}


__SYD.meme_stickers = ({size = 100 , img = "" , rotate = 0 , bg_set = "fit"} = {}) =>{
    return __c(
        "div",
        {
            style:`height:${size}px;width:${size}px;background-image:url(./assets/${img}.png);transform:rotate(${rotate}deg);border:2px dashed yellow;cursor:pointer;`
        },[],{
            genericStyle:[`bg_${bg_set}`],
            events:{
                onclick:e =>{
                    const state = __g("page3");
                    state.close = false;
                    state.currentImage = img;
                    state.rotate = rotate
                    __u("page3" , {value:state , type:"a"})


                    setTimeout(() => {
                        const state = __g("page3");
                        state.rotate = 0
                        __u("page3" , {value:state , type:"a"})
                    }, 50);
                }
            }
        }
    )
}

__SYD.close_meme = () =>{
    return __c(
        "div",
        {
            style:"height:50px;width:50px;position:absolute;top:20px;left:20px;cursor:pointer;background-image:url(./assets/close.png);"
        },[],
        {
            events:{
                onclick:e =>{
                    const state = __g("page3");
                    state.close = true;
                    state.currentImage = "";
                    __u("page3" , {value:state , type:"a"})
                }
            },
            genericStyle:["bg_cover"]
        }
    )
}