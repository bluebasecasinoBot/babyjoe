import { __c, __SYD } from "./sydneyDom_v3.js"

__SYD.page2 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;margin-bottom:60px;display:flex;flex-direction:column;gap:30px;align-items:center;"
        },
        [
            __SYD.baby_joe_meme_panel()
        ]
    )
}

__SYD.baby_joe_meme_panel = () =>{
    return __c(
        "div",
        {
            class:"baby-monitor-panel"
        },
        [
            __c(
                "div",
                {
                    class:"screen-title"
                },["Meme Feed"]
            ),
            __c(
                "div",
                {
                    class:"meme-screen"
                },
                [
                    __SYD.meme_stickers({size:173, rotate:42, img:"meme1"}),
                    // __SYD.meme_stickers({size:88,  rotate:13, img:""}),
                    __SYD.meme_stickers({size:257, rotate:67, img:"meme2"}),
                    // __SYD.meme_stickers({size:90,  rotate:28, img:""}),
                    __SYD.meme_stickers({size:201, rotate:3,  img:"meme3" , bg_set:"cover"}),
                    __SYD.meme_stickers({size:112, rotate:56, img:"meme14"}),
                    __SYD.meme_stickers({size:299, rotate:-39, img:"meme4"}),
                    // __SYD.meme_stickers({size:70,  rotate:70, img:""}),
                    // __SYD.meme_stickers({size:134, rotate:18, img:""}),
                    __SYD.meme_stickers({size:60,  rotate:65, img:"meme13"}),
                    __SYD.meme_stickers({size:213, rotate:57, img:"meme11" , bg_set:"cover"}),
                    __SYD.meme_stickers({size:94,  rotate:12, img:"meme12"}),
                    __SYD.meme_stickers({size:187, rotate:33, img:"meme9"}),
                    __SYD.meme_stickers({size:239, rotate:0, img:"meme5"}),
                    __SYD.meme_stickers({size:141, rotate:8,  img:""}),
                    __SYD.meme_stickers({size:122, rotate:44, img:"meme10"}),
                    __SYD.meme_stickers({size:250, rotate:21, img:"meme6"}),
                    // __SYD.meme_stickers({size:98,  rotate:0,  img:""}),
                    __SYD.meme_stickers({size:176, rotate:61, img:"meme8" , bg_set:"cover"}),
                    __SYD.meme_stickers({size:109, rotate:38, img:"meme7"}),
                ]
            )
        ]
    )
}
