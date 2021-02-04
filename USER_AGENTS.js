const USER_AGENTS = [
  "jdapp;android;9.3.4;9;8363733393230333135383836363-13D2138366035643666343336693;network/4g;model/Mi Note 3;addressid/0;aid/9a005ac3cd4dcd22;oaid/1508995eda5a743a;osVer/28;appBuild/86388;partner/jlhdqj07;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 9; Mi Note 3 Build/PKQ1.181007.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
  "jdapp;android;9.3.4;10;5343464323935303-3633432353468316;network/wifi;model/YAL-AL00;addressid/1996320260;aid/54d42950c3425d8a;oaid/fde5ff7f-f7bf-3f0c-63da-dfe7f77ebffe;osVer/29;appBuild/86388;partner/huawei;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; YAL-AL00 Build/HUAWEIYAL-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36"
  
]
/**
 * 生成随机数字
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（不包含）
 */
function randomNumber(min = 0, max = 100) {
  return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}
const USER_AGENT = USER_AGENTS[randomNumber(0, USER_AGENTS.length)];

module.exports = { 
  USER_AGENT
}