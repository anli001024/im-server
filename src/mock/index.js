export const userInfo = {
    id: '10086',
    name: '点赞狂魔',
    avatar: 'https://makapicture.oss-cn-beijing.aliyuncs.com/cdn/smc/release/aaa/an-l_avatar.png'
}


export const userList = [
    {
        id: '1',
        name: '咩咩咩',
        avatar: 'https://makapicture.oss-cn-beijing.aliyuncs.com/cdn/smc/release/aaa/屏幕快照 2019-08-30 下午5.18.49.png',
        active: true
    },
    {
        id: '2',
        name: 'derick',
        avatar: 'https://makapicture.oss-cn-beijing.aliyuncs.com/cdn/smc/release/aaa/屏幕快照 2019-08-30 下午5.21.05.png',
        active: false
    },
    {
        id: '3',
        name: '吖淇',
        avatar: 'https://makapicture.oss-cn-beijing.aliyuncs.com/cdn/smc/release/aaa/屏幕快照 2019-08-30 下午5.19.55.png',
        active: false
    }
]

export const userMessageMap = {
    '1': {
        target: {
            id: '1',
            name: '咩咩咩',
            avatar: 'https://makapicture.oss-cn-beijing.aliyuncs.com/cdn/smc/release/aaa/屏幕快照 2019-08-30 下午5.18.49.png',
        },
        list: [
            {
                target: '1',
                time: '2019-08-30 5:19:55',
                text: 'hi, 你好啊！'
            },
            {
                target: 'self',
                time: '2019-08-30 5:20:00',
                text: '干嘛，又扫码？'
            },
            {
                target: '1',
                time: '2019-08-30 5:22:33',
                text: '这可不是嘛！'
            },
        ]
    },
    '2': {
        target: {
            id: '2',
            name: 'derick',
            avatar: 'https://makapicture.oss-cn-beijing.aliyuncs.com/cdn/smc/release/aaa/屏幕快照 2019-08-30 下午5.21.05.png'
        },
        list: [
            {
                target: 'self',
                time: '2019-09-01 12:00:32',
                text: '中午吃什么？'
            },
            {
                target: '2',
                time: '2019-09-01 12:02:10',
                text: '没什么胃口'
            },
        ]
    }
}