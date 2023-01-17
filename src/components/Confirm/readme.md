## Confirm 弹窗组件

### 组件功能

1. 阻止背景滚动；
2. Confirm组件可传按钮列表，自定义按钮点击事件；
3. 调用简单方便；

   ```JavaScript
    // 举个栗子
    Confirm.show({
        header: '这是标题',
        description: '内容里面有些注释文字展示，展示什么什么什么',
        buttonList: [
            {
                text: '确认',
                handleClick: () => console.log('点击确认'),
            },
            {
                text: '取消',
                handleClick: () => console.log('点击取消'),
            },
            {
                text: '我不知道',
                handleClick: () => console.log('我不知道'),
            },
        ],
    } as ConfirmModalProps)
   ```

### 需要优化

- [ ] 样式优化

### 技术实现Point

- 阻止背景滚动
  
  - 修改body元素样式为 `position: fixed` 
  - 再通过获取当前文档 html `document.documentElement.scroolTop` 或者 body `document.body.scrollTop` 垂直滚动的像素数来滚动到指定位置；
  - 注意：修改body元素为fixed会导致有些页面元素偏移，需要给body样式加宽度限制 `body { width: 100% } `


### 知识点扩展

1. [ ] 滚动穿透问题的常见解决方法（待补充）