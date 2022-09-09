export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wx3d9faa0e598dd6b4",

    // 公众号APP_SECRET
    APP_SECRET: "7a0f6a8f668cf3ba198a1084e2f488f2",

    // 模板消息id
    TEMPLATE_ID: "xvaGbzGYiUg9vpLXdln_feTcoNIGm-K77HYV8UBzkuk",


    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如[wx1,wx2]
  USERS: ["oJxMU6Sefbv9bK4Op2WDx5HXh5J8"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "乌鲁木齐",
    // 所在城市
    CITY: "乌鲁木齐",

    /** 重要节日相关 */

    /**
     * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
     * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
     * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
     * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
     */
    FESTIVALS: [
      {"type": "生日", "name": "闹闹宝贝", "year": "1997", "date": "11-30"},
      {"type": "节日", "name": "纪念日", "year": "2021", "date": "05-20"},
    ],

    /**
     * 限制重要节日的展示条目, 需要填写数字; 
     * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
     * 如果为0, 则默认展示全部
     * 默认是4
     */
    FESTIVALS_LIMIT: 0,

    /** 日期相关 */

      // 生日
      BIRTHDAY_DATE: "1997-11-30",
      // 在一起的日子
      LOVE_DATE: "2021-05-20",

    /** 插槽 */

    /** 你可以在这里写超多的你想显示的内容了！
      * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
      * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
      * */
    SLOT_LIST: [
      // 这样配置的话，就会每次随机选一句话发送
      {"keyword": "lover_prattle", contents: [
        "你要永远在我身边噢!",
        "不管见不见面，你都在我心里呀~",
        "只希望每个明天你都在。",
        "你永远都是我的only one~",
        "不见面的日子，要好好积攒爱意呀~",
        "恋爱终极奥义：一定是我们永远在乎彼此！",
        "一朝相识百相思。",
        "乖乖，我会eeeee直在你身边!!",
      ]},
    ],

    /** 每日一言 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}

// 共推送 {{need_post_num.DATA}}  人
// 成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
// 成功用户: {{success_post_ids.DATA}}
// 失败用户: {{fail_post_ids.DATA}}
