import { useEffect, useState } from 'react'
import './App.css'
import FishNeverEat from './component/FishNeverEat'


function App() {
  const [data, setData] = useState(Object)
  const callOverlayHandlers = async ()  =>{
    const language = await callOverlayHandler({ call: 'getLanguage' });
    const otherPlugin = await callOverlayHandler({ call: 'templateSampleFunction' });
    OverlayPluginApi.setAcceptFocus(true);
    console.log(language.language, language.languageId);
    console.log(otherPlugin);
    // 添加数据处理
    addOverlayListener('CombatData', (data) => {
        console.log(`经历战斗: ${data.title} | ${data.duration} | 团伤: ${data.ENCDPS}`);
    });
    // 注册完毕，启动悬浮窗事件
    startOverlayEvents();
  }
  
  useEffect(() => {
    
    setData(data.fishes = ["1", "2", "3"])
    callOverlayHandlers()
    
  },[]
  )
  return (
    <>
      <FishNeverEat data={data} className="drag"  />
    </>
  )
}

export default App
