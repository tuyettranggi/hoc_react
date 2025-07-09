import './App.css';
/*import ReactDOM from "react-dom/client";*/
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import NamingRulesForComponents01 from "./components/32.NamingRulesForComponents01";
import NamingRulesForComponents02 from "./components/32.NamingRulesForComponents02";
import NamingRulesForComponents03 from "./components/32.NamingRulesForComponents03";
import ChildrenProps01 from "./components/34.ChildrenProps_01";
import ChildrenProps02 from "./components/34.ChildrenProps_02";
import ChildrenProps03 from "./components/34.ChildrenProps_03";
import ChildrenProps04 from "./components/34.ChildrenProps_04";
import HooksUseState from "./components/47.Hooks.useState";
import HooksUseStateCallback from "./components/47.Hooks.useState.callback";
import HooksUseStateInitValue01, {HooksUseStateInitValue02} from "./components/47.Hooks.useState.initValue.callback";
import HooksUseState04 from "./components/47.Hooks.useState04";
import HooksUseState05 from "./components/47.Hooks.useState05";
import TwowayBinding01 from "./components/49.TwowayBinding01";
import TwowayBinding02 from "./components/49.TwowayBinding02";
import TwowayBinding03 from "./components/49.TwowayBinding03";
import TodolistWithUseStage from "./components/50.TodolistWithUseStage";
import MountedAndUnmounted from "./components/51.MountedAndUnmounted";
import HomeMountedUnmounted from "./components/51h.MountedAndUnmounted";
import HookUseEffect from "./components/52.Hooks.useEffect";
import HookUseEffectTab from "./components/52.Hooks.useEffect.tab";
import HookUseEffectDom from "./components/56.Hooks.useEffect.DOM";
import HookUseEffectCleanFunc from "./components/56.Hooks.useEffect.CleanFunc";
import UseEffectWithPreviewAvatar from "./components/59.Hook.useEffect.with.preview.avatar";
import UseEffectWithChatApp from "./components/60.Hook.useEffect.with.fake.Chat.App";
import UseReducerTodoApp from "./components/73.Hook.useReducer.TodoApp";
import UseReducerRecap from "./components/74.useReducer.recap";
import TodoList from "./components/TodoList";

import HeadingContext from "./components/HeadingContext";
import { useState } from "react";

function App() {
  const [heading1, setHeading1] = useState("Trang chủ");

  //32.quy_uoc_dat_ten_components02
  const handleClick = textAlert => alert(textAlert);
  //34.ChildrenProps_01.js

  return (
    <HeadingContext.Provider value={{ heading1, setHeading1 }}>
      <Router>
        <Header />

        {/* <ComponentsInFiles /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/32.quy_uoc_dat_ten_components01/" element={<NamingRulesForComponents01
            style = {{ "background": "blue" }}
          />} />
          <Route path="/32.quy_uoc_dat_ten_components02/" element={<NamingRulesForComponents02
            title="Click me!"
            textAlert = "Đã click"
            //href="http://localhost:3000/"
            onClick={handleClick}
          />} />
          <Route path="/32.quy_uoc_dat_ten_components03/" element={<NamingRulesForComponents03
            title="Đây là title (xuất hiện ưu tiên)"
            content = "Đây là content (Xuất hiện khi không có title)"
          />} />
          <Route path="/34.children_props01/" element={<ChildrenProps01
            primary
            title="Button children_props01"
            style = {{padding: 10}}
          />} />
          <Route path="/34.children_props02/" element={<ChildrenProps02 />} />
          <Route path="/34.children_props03/" element={<ChildrenProps03 />} />
          <Route path="/34.children_props04/" element={<ChildrenProps04 />} />
          <Route path="/47.hooks_usestate/" element={<HooksUseState />} />
          <Route path="/47.hooks_usestate_callback/" element={<HooksUseStateCallback />} />
          <Route path="/47.hooks_usestate_initvalue_callback/" element={<HooksUseStateInitValue01 />} />
          <Route path="/47.hooks_usestate_initvalue_callback_optimize/" element={<HooksUseStateInitValue02 />} />
          <Route path="/47.hooks_usestate04/" element={<HooksUseState04 />} />
          <Route path="/47.hooks_usestate05/" element={<HooksUseState05 />} />
          <Route path="/49.two_way_binding01/" element={<TwowayBinding01 />} />
          <Route path="/49.two_way_binding02/" element={<TwowayBinding02 />} />
          <Route path="/49.two_way_binding03/" element={<TwowayBinding03 />} />
          <Route path="/50.todolist_with_usestage/" element={<TodolistWithUseStage />} />
          <Route path="/51.mounted&amp;unmounted/" element={<MountedAndUnmounted />} />
          <Route path="/51.home.mounted&amp;unmounted/" element={<HomeMountedUnmounted />} />
          <Route path="/52.hooks_useeffect/" element={<HookUseEffect />} />
          <Route path="/52.Hooks.useEffect.tab/" element={<HookUseEffectTab />} />
          <Route path="/56.Hooks.useEffect.DOM/" element={<HookUseEffectDom />} />
          <Route path="/56.Hooks.useEffect.cleanFunc/" element={<HookUseEffectCleanFunc />} />
          <Route path="/59.Hook.useEffect.with.preview.avatar/" element={<UseEffectWithPreviewAvatar />} />
          <Route path="/60.Hook.useEffect.with.fake.Chat.App/" element={<UseEffectWithChatApp />} />
          <Route path="/73.Hook.useReducer.TodoApp/" element={<UseReducerTodoApp />} />
          <Route path="/74.useReducer.recap/" element={<UseReducerRecap />} />
          <Route path="/todo-list/" element={<TodoList />} />
        </Routes>
        
        <nav className='gnavi'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/32.quy_uoc_dat_ten_components01/">32.Quy ước đặt tên components | Object component</Link></li>
            <li><Link to="/32.quy_uoc_dat_ten_components02/">32.Quy ước đặt tên components | Object props</Link></li>
            <li><Link to="/32.quy_uoc_dat_ten_components03/">32.Quy ước đặt tên components | Toán tử <code>||</code></Link></li>
            <li><Link to="/34.children_props01/">34.Children props? Render props?</Link></li>
            <li><Link to="/34.children_props02/">34.Children props? Render props? | <code>Spread/Rest props</code></Link></li>
            <li><Link to="/34.children_props03/">34.Children props? Render props? | <code>Children prop &gt; String literals, {"{expression}"}</code></Link></li>
            <li><Link to="/34.children_props04/">34.Children props? Render props? | <code>Truyền function vào children</code></Link></li>
            <li><Link to="/47.hooks_usestate/">47.HooksUseState | <code>Hooks useState</code></Link></li>
            <li><Link to="/47.hooks_usestate_callback/">47.HooksUseStateCallback | <code>callback</code></Link></li>
            <li><Link to="/47.hooks_usestate_initvalue_callback/">47.Hooks useState | <code>initValue callback</code></Link></li>
            <li><Link to="/47.hooks_usestate_initvalue_callback_optimize/">47.Hooks useState | <code>initValue callback optimize</code></Link></li>
            <li><Link to="/47.hooks_usestate04/">47.Hooks useState | <code>initValue callback object</code></Link></li>
            <li><Link to="/47.hooks_usestate05/">47.Hooks useState | <code>Bài tập chọn quà ngẫu nhiên</code></Link></li>
            <li><Link to="/49.two_way_binding01/">49.Two-way binding trong React? | <code>Ràng buộc 2 chiều</code></Link></li>
            <li><Link to="/49.two_way_binding02/">49.Two-way binding trong React? | <code>Xử lý radio</code></Link></li>
            <li><Link to="/49.two_way_binding03/">49.Two-way binding trong React? | <code>Xử lý Checkbox</code></Link></li>
            <li><Link to="/50.todolist_with_usestage/">50.Todolist with useState</Link></li>
            <li><Link to="/51.mounted&amp;unmounted/">51.Mounted & Unmounted?</Link></li>
            <li><Link to="/51.home.mounted&amp;unmounted/">51.Mounted & Unmounted? <code>(home)</code></Link></li>
            <li><Link to="/52.hooks_useeffect/">52.Hooks useEffect</Link></li>
            <li><Link to="/52.Hooks.useEffect.tab/">52.Hooks useEffect | <code>Tab</code></Link></li>
            <li><Link to="/56.Hooks.useEffect.DOM/">56.Hooks useEffect | <code>DOM | pagetop</code></Link></li>
            <li><Link to="/56.Hooks.useEffect.cleanFunc/">56.Hooks useEffect | <code>Clean function</code></Link></li>
            <li><Link to="/59.Hook.useEffect.with.preview.avatar/">56.Hooks useEffect | <code>preview avatar</code></Link></li>
            <li><Link to="/60.Hook.useEffect.with.fake.Chat.App/">56.Hooks useEffect | <code>fake Chat App</code></Link></li>
            <li><Link to="/73.Hook.useReducer.TodoApp/">56.Hooks useReducer | <code>Todo App</code></Link></li>
            <li><Link to="/74.useReducer.recap/">56.Hooks useReducer | <code>Todo App | recap</code></Link></li>
            <li><Link to="/todo-list/">To-do List</Link></li>
          </ul>
        </nav>
      </Router>
    </HeadingContext.Provider>
  );
}

export default App;
