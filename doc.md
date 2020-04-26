# 组件开发文档

**guidePage**
引导页


**用法：**
```html
<guidePage :step.sync="guideStep" page="guideHome" :location="{x:blackStepLeft,y:blackStepTop}" />
```

**Attributes ：**

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --------   | -----:  | :----:  |
| step | 步骤 | Number | — | 1 |
| page | 页面名称 | String | — | — |
| location | 定位的位置 | Object | — | { x: 0, y: 0 } |
| isTop | 弹框三角是否在上边 | Boolean | — | true |

### End