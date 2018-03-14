<style>
  .demo{
    padding:0 15px;
  }
  .vm-button{
    margin-bottom:10px;
  }
</style>

<script>
import { ActivityIndicator } from 'packages';
export default {
  methods:{
    show(type, info, color){
      ActivityIndicator.show(type, info, color);
    },
    hide() {
      ActivityIndicator.hide();
    }
  }
}
</script>
## ActivityIndicator

### 使用指南

```javascript
import { ActivityIndicator } from 'milk-vue';
Vue.component(ActivityIndicator);
```

### 代码演示


```javascript
export default {
  methods:{
    show(type, message, color){
      ActivityIndicator.show(type, message, color);
    },
    hide(){
      ActivityIndicator.hide();
    }
  }
}
```
:::demo 基本
```html
<div class="demo">
    <v-button type="default" @click="show('loading', 'working...', 'rgba(40, 40, 40, .7)')">show</v-button>
    <v-button type="default" @click="show('juhua')">juhua</v-button>
    <v-button type="default" @click="hide()">hide</v-button>
</div>
```
:::

### Function

| 方法名 | 参数 | 返回值 | 介绍 |
|-----------|-----------|-----------|-------------|
| ActivityIndicator.show |`type| message| color`| ActivityIndicator 实例 | 展示提示信息 |
| ActivityIndicator.hide| `-`| `void` | 关闭 |


### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| type | 显示类型 | `String` | `loading` | `-` |
| message | 提示内容 | `String` | `加载中...` | `-` |
| color | 背景颜色(菊花不可定制) | `String` | `rgba(40, 40, 40, .7)` | `-` |

