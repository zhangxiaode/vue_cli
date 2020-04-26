# 组件开发文档

**guidePage**
引导页


**用法：**
```html
<guidePage :step.sync="step" :page="page" :location="location" @update:step="updateStep()" @update:isShow="updatePage()" />
```
```javascript
{
	data() {
		return {
		  step: 0,
		  page: "guideHome",
		  location: {
		  	x: 0,
			y: 0
		  }
		}
	},
	methods: {
		updateStep() {
			//步骤更新时执行
		}，
		updatePage() {
			//步骤更新时执行
		}
	}
}
```

**guidePage Attributes ：**

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| -------- | -----: | :----: | :----: | :----: |
| step | 步骤 | Number | — | 1 |
| page | 页面名称 | String | — | — |
| location | 定位的位置 | Object | — | { x: 0, y: 0 } |
| isTop | 弹框三角是否在上边 | Boolean | — | true |

**guidePage Events ：**

| 事件名称 | 说明 | 回调参数 |
| -------- | -----: | :----: |
| update:step | 步骤更新 | 步骤step |
| update:isShow | 步骤更新 | 是否跳过引导 |

### End