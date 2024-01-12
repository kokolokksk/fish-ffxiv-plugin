# 饿了喵

ff14 国服act钓鱼插件

[悬浮窗预设预览](https://ffxiv.loli.monster/)

[插件地址](https://github.com/kokolokksk/ACT-P-CAT/releases/tag/0.0.1)

![elemiaoui](https://github.com/kokolokksk/fish-ffxiv-plugin/assets/12725100/cb3bd409-65b4-48ed-b4c9-ee0a6f8d8e34)

### 使用说明

- 需要act解析插件；overlayPlugin插件；

- 首先添加[饿了喵](https://github.com/kokolokksk/ACT-P-CAT/releases/tag/0.0.1)到act插件中，再到OverlayPlugin设置中添加预设窗口【喵】即可。（可能需要重载OverlayPlugin）

![addpreset](https://github.com/kokolokksk/fish-ffxiv-plugin/assets/12725100/09150c7f-4714-429f-a8d2-701ec19ecca4)

- 如果没有【喵】 reload elemiao或者overlayplugin

![reloadplugin](https://github.com/kokolokksk/fish-ffxiv-plugin/assets/12725100/8f3dd58d-7142-444a-a796-add82ae3c758)

- 缩放大小 Plugins-OverlayPlugin.dll-> 对应【喵】的悬浮窗设置->高级中有缩放。为什么右下角直接拖放不行，我也不知道。

![resize](https://github.com/kokolokksk/fish-ffxiv-plugin/assets/12725100/7fcf7b82-0b0f-411e-9c41-238ff2379b52)


- 输入首字母查询鱼类，点击添加到时间表；

- 单击左侧鱼名查看详情，双击移除。

- 单击首尾时间格查看上下天气周期；

- 绿色格表示 天气时间符合。红色刻度线是当前时间。

- 若出现其他问题可以点击 时间右边的![reload](https://github.com/kokolokksk/fish-ffxiv-plugin/assets/12725100/fcedacd7-9199-40bf-998e-2fcb8f063168)
进行刷新重载悬浮窗。
### 所在频道(拉拉肥)

QQ频道: 拉拉肥;

点击加入QQ频道【[拉拉肥](https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=3XQuR&businessType=9&from=181074&biz=ka&shareSource=5)】

QQ群：319833969

您好，饿了喵为您服务！
- 🐟  鱼类计划时间表
- 👴  ···

# TODO
- 自动获取没钓的鱼王

## 使用技术
使用typescript编写的vite项目。

## 感谢
使用了[ffxiv-datamining-cn](https://github.com/thewakingsands/ffxiv-datamining-cn)数据。

使用了[ffxiv-ember-overlay](https://github.com/GoldenChrysus/ffxiv-ember-overlay)样式。

使用了[ffxiv-pastry-fish-list](https://github.com/CodeZWT/ffxiv-pastry-fish-list)数据。

使用了[天气计算](https://gist.github.com/zyzsdy/ecf41a4cc04e2f95839a72291a207347#file-ffxiv-weather-js-L456)。

感谢 [FFXIV ACT插件开发入门-Jim](https://www.lotlab.org/2022/02/06/ffxiv-act-plugin-development-introduce/)。

感谢 菈米米

感谢 所有FF14好友。
