import dva from 'dva';
import './index.css';

/*
  控制台     error: Warning: Please use `require("history").createHashHistory`
  找到并打开 node_modulesdva/lib/index.js
  将        var _createHashHistory = _interopRequireDefault(require("history/createHashHistory"));
  改为      var _createHashHistory = _interopRequireDefault(require("history").createHashHistory);
*/

// 1. Initialize
// 创建应用
const app = dva({
  initialState: {
    products: [
      { name: 'dva', id: 1, key: '1' },
      { name: 'dva2', id: 2, key: '2' },
      { name: 'dva3', id: 3, key: '3' },
      { name: 'dva4', id: 4, key: '4' },
      { name: 'dva5', id: 5, key: '5' }
    ]
  }
});

// 2. Plugins
// app.use({});

// 3. Model
// 注册 Model 
app.model(require('./models/products').default);

// 4. Router
// 注册视图
app.router(require('./router').default);

// 5. Start
// 启动应用
app.start('#root');
