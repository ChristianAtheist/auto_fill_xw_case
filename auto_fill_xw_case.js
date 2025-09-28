(function() {
    'use strict';

    console.log("脚本开始执行...");

    // 系统回顾
    const systemReviewData = {
        "既往史：": "否认高血压病史、否认糖尿病病史、否认冠心病史、否认肝病史、否认肾病史、否认输血史，无食物过敏史，无药物过敏史，预防接种史按计划进行，无手术外伤史，无金属植入物。",
        "头颅五官：": "无视物模糊、耳聋、耳鸣、眩晕、鼻出血、牙龈出血、声音嘶哑史。",
        "呼吸系统：": "无咳嗽、咳痰、咽痛，无呼吸困难，无胸痛及咯血，无发热、盗汗。",
        "循环系统：": "无胸闷、胸痛，无心悸、气促，无头晕、头痛、晕厥，无少尿、下肢浮肿。",
        "消化系统：": "无腹痛、腹胀、腹泻，无恶心呕吐，无呕血，无反酸嗳气，无黑便。",
        "泌尿生殖系统：": "无尿频、尿急、尿痛、排尿困难、尿量异常，无血尿，无腰痛，颜面无浮肿，无外生殖器溃疡或异常分泌物。",
        "造血系统：": "无头昏、乏力、晕厥，无皮肤黏膜瘀点瘀斑，无胸骨压痛。",
        "内分泌系统及代谢：": "无畏寒、怕热，无多饮、多食、多尿，近期体重无变化，无视力障碍，无性格改变及第二性征改变。",
        "肌肉与骨关节系统：": "无关节疼痛、红肿、关节畸形、运动障碍、肌肉萎缩、四肢乏力病史。",
        "传染病史：": "否认肝炎、结核病史及接触史，否认SARS 病史及接触史，否认其他传染病史及接触史。",
        "个人生活史：": "原籍出生及居住，无外地久居史，无疫区疫水接触史，无毒物、粉尘、特殊化学品及放射线接触史，生活规律，无吸烟史，无饮酒史，无冶游史。",
        "婚姻史：": "已婚，配偶及子女体健",
        "月经及生育史：": "无",
        "家族史：": "无家族史",
    };

    // 体格检查
    const generalInfoData = {
        "发育：": "正常",
        "营养：": "良好",
        "神志(mmhg)：": "清晰", 
        "体位(厘米)：": "自主", 
        "面容：": "正常",
        "与医生合作度：": "合作",

        // 皮肤粘膜
        "颜色：": "未见异常",
        "水肿：": "无",
        "弹性：": "好",
        "出血点及瘀班：": "无",
        "皮疹：": "无",
        "皮下结节及肿块：": "无",
        "蜘蛛痣：": "无",

        // 浅表淋巴结
        "耳前、耳后、乳突区、枕骨下区、颈后三角、颈前三角、颌下、锁骨上窝、腋窝、滑车上、腹股沟、腘窝未触及淋巴结：": "未触及肿大淋巴结",
            
        // 头部五官
        // 头颅
        "外形：": "正常无畸形",
        "包块：": "无",
        "毛发：": "分布均匀",
        "瘢痕：": "无",

        // 眼
        "眼睑水肿：": "无",
        "结膜充血：": "无",
        "巩膜黄染：": "无",
        "角膜：": "透明",
        "角膜反射：": "存在",
        "双侧瞳孔：": "等大等圆",
        "对光反射：": "存在",
        "直径：左 mm：": "3",
        "右 mm：": "3",
        "辐辏反射：": "存在",
        "眼球活动：": "正常",

        // 耳
        "耳廓外形：": "无畸形",
        "牵拉痛：": "无",
        "外耳道分泌物：": "无",
        "乳突压痛：": "无",

        // 鼻
        "鼻外形：": "正常",
        "鼻中隔：": "无偏曲",
        "鼻腔：": "通畅",
        "分泌物：": "无",
        "上颌窦、筛窦、额窦压痛：": "无",
        "出血：": "无",

        // 口腔
        "口唇苍白、发绀：": "无",
        "口腔粘膜：": "无异常",
        "牙龈肿胀、出血：": "无",
        "伸舌：": "居中",
        "口腔异味：": "无",
        "缺齿：": "无",

        // 咽
        "充血：": "无",
        "悬雍垂：": "居中",
        "双侧扁桃体：": "无肿大",
        "脓性分泌物：": "无",

        // 颈部
        "颈项运动：": "自如",
        "颈抵抗：": "无",
        "质地：": "软",
        "压痛：": "无", 
        "震颤：": "无",
        "颈动脉异常搏动：": "未见",
        "颈静脉怒张：": "无",
        "血管杂音：": "未闻及",
        "气管位置：": "居中",
        "甲状腺肿大：": "无",

        // 胸部
        // 胸廓
        "畸形：": "无",
        "运动：": "对称",
        "胸骨压痛：": "无",
        "乳房：": "对称",

        // 肺
        "呼吸运动：": "双侧对称",
        "双侧指腹：": "对称", 
        "双肺叩诊：": "清音",
        "肺下界移动度：": "6cm",
        "语音传导：": "正常",
        "双排呼吸音：": "清 ", 
        "干湿性啰音：": "无",
        "胸膜摩擦音：": "无",
        
        // 心
        "心前区隆起：": "无",
        "心尖搏动点：": "第五肋间左锁骨中线内侧0.5cm",
        "异常搏动：": "无",
        "震颤：": "无",
        "心包摩擦感：": "无",
        "心律：": "齐",
        "P2-A2：": "P2<A2",
        "杂音：": "无",
        "心包摩擦音：": "无",
        "心界(mcl_厘米)：": "8",

        // 周围血管征
        "奇脉及水冲脉：": "无",
        "股动脉枪击音及杜氏二重杂音：": "无",
        "毛细血管搏动征：": "阴性",

        // 腹部
        "外形：": "平坦", 
        "腹式呼吸：": "存在",
        "肠胃蠕动波：": "未见",
        "腹壁静脉曲张：": "无",
        "腹壁紧张度：": "软",
        "压痛及反跳痛：": "无",
        "腹部包块：": "未触及",
        "腹部叩诊音：": "鼓音",
        "移动性浊音：": "阴性",
        "肠鸣音 次/分：": "4",
        // 血管杂音 与颈部重复

        // 肝（胆）
        "肝肋下：": "未触及",
        "Murphy 征：": "阴性",
        "肝上界位于右锁骨中线第几肋间：": "第五肋间",
        "肝颈静脉回流征：": "阴性",
        "肝浊音界：": "正常",

        // 脾
        // 肝肋下 重复,
        "脾肋下：": "未触及",
        "脾区叩痛：": "无",

        // 肾
        "双肾大小：": "未触及",
        "季肋点压痛：": "无",
        "上输尿管点压痛：": "无",
        "中输尿管点压痛：": "无",
        "肋脊点压痛：": "无",
        "肋腰点压痛：": "无",
        "肾区叩痛：": "无",

        // 外阴及肛门
        "肛门及外生殖器：": "未见异常",

        // 脊柱
        "脊柱生理弯曲：": "存在",
        "活动：":"无受限",
        // 压痛 重复
        "叩击痛：": "无",

        // 四肢（关节）
        "四肢畸形：": "无",
        "关节红肿及压痛：": "无",
        "主动活动：": "正常",
        "杵状指趾：": "无",
        "肌张力及肌力：": "正常，5级",
        "静脉曲张：": "无",
        "水肿：": "无",

        // 神经系统
        "腹壁反射：": "存在",
        "Babinski 征：": "阴性",
        "kernig 征：": "阴性",
        "双侧肱二头肌、双侧肱三头机、双侧膝腱、双侧跟腱反射：": "对称",
        "Brudzinski 征：": "阴性",
    };

    const heartBoundaryData = [
        ["2", "3"], 
        ["2", "4"], 
        ["3", "5"],   
        ["-", "7"]    
    ];


    /**
     * 触发输入事件，确保Vue等框架能够检测到值的变化
     * @param {HTMLElement} element - 输入框元素
     * @param {string} value - 要设置的值
     */
    function setValueAndTriggerEvent(element, value) {
        if (element) {
            element.value = value;
            const event = new Event('input', { bubbles: true });
            element.dispatchEvent(event);
        }
    }

    /**
     * 填充系统回顾和体格检查
     * @param {string} formSelector - 表单项的CSS选择器
     * @param {string} labelSelector - 标签的CSS选择器
     * @param {string} inputSelector - 输入框的CSS选择器
     * @param {object} data 
     * @param {string} sectionName - 用于在日志中显示的模块名称
     */
    function fillFormSection(formSelector, labelSelector, inputSelector, data, sectionName) {
        console.log(`\n--- 正在填充 '${sectionName}' 部分 ---`);
        let filledCount = 0;
        const items = document.querySelectorAll(formSelector);

        if (items.length === 0) {
            console.warn(`未找到 '${sectionName}' 部分的任何表单项。选择器可能已失效：${formSelector}`);
            return;
        }

        items.forEach(item => {
            const labelElement = item.querySelector(labelSelector);
            if (labelElement) {
                const labelText = labelElement.innerText.trim();
                if (data.hasOwnProperty(labelText)) {
                    const inputElement = item.querySelector(inputSelector);
                    if (inputElement) {
                        const valueToFill = data[labelText];
                        setValueAndTriggerEvent(inputElement, valueToFill);
                        console.log(`已填充 '${labelText}': '${valueToFill}'`);
                        filledCount++;
                    }
                }
            }
        });
        console.log(`'${sectionName}' 部分填充完成，共处理 ${filledCount} 个字段。`);
    }


/**
 * 填充心界
 * @param {string} tableSelector - 表格的CSS选择器
 * @param {Array<Array<string>>} data 
 */
function fillHeartBoundaryTable(tableSelector, data) {
    console.log(`\n--- 正在填充 '心界叩诊' 表格 ---`);
    const tableBody = document.querySelector(tableSelector + ' tbody');

    if (!tableBody) {
        console.warn(`未找到心界表格。选择器可能已失效：${tableSelector}`);
        return;
    }

    const rows = tableBody.querySelectorAll('tr.el-table__row');
    if (rows.length === 0) {
        console.warn('心界表格中未找到任何数据行。');
        return;
    }

    let filledCount = 0;
    rows.forEach((row, index) => {
        if (data[index]) {
            const inputs = row.querySelectorAll('input.el-input__inner');
            const [rightValue, leftValue] = data[index];

            // 表格行的第一个输入框是右侧，第二个是左侧
            if (inputs.length >= 2) {
                // 填充右侧值
                setValueAndTriggerEvent(inputs[0], rightValue);
                // 填充左侧值
                setValueAndTriggerEvent(inputs[1], leftValue);
                
                console.log(`已填充第 ${index + 2} 肋间: 右='${rightValue}', 左='${leftValue}'`);
                filledCount += 2; // 每次填充两个字段
            }
        }
    });
    console.log(`'心界叩诊' 表格填充完成，共处理 ${filledCount} 个字段。`);
}

    // 执行填充
    fillFormSection(
        '.el-form-item',
        '.el-form-item__label',
        'textarea.el-textarea__inner',  // textarea表示标签名,.el-textarea__inner表示类名
        systemReviewData,
        '系统回顾'
    );

    fillFormSection(
        'div[data-v-2ff49afb] .el-form-item.leaf-node', //带有data-v-2ff49afb属性的div；在这个div内部找到同时拥有 el-form-item 和 leaf-node 这两个类名的元素
        '.el-form-item__label',
        'input.el-input__inner',
        generalInfoData,
        '一般情况'
    );

    // 执行心界填充
    fillHeartBoundaryTable(
        'div.exam-table', // 使用表格的唯一类名 'exam-table' 作为选择器
        heartBoundaryData
    );

    console.log("\n 脚本执行完毕！现在请手动修订数据");

})();

