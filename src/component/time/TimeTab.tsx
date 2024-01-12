import React, { useEffect, useState } from "react";
const TimeTab = () => {
    const [time, setTime] = useState(new Date());
    const [timeFFxivFont, setTimeFFxivFont] = useState('');
    const [eorzeaTime, setEorzeaTime] = useState(getEorzeaTime());
    const [eorzeaTimeFFxivFont, setEorzeaTimeFFxivFont] = useState('');
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
            const localTime = new Date().toLocaleTimeString();
            const localTimeFFxivFont = localTime.replace(/[\d]/g, function (match) {
                return '<i class="xiv number-' + match + '"></i>';
            });
            setTimeFFxivFont(localTimeFFxivFont);
            setEorzeaTime(getEorzeaTime());
            const eorzeaTimeFFxivFont = getEorzeaTime().replace(/[\d]/g, function (match) {
                return '<i class="xiv number-' + match + '"></i>';
            });
            setEorzeaTimeFFxivFont(eorzeaTimeFFxivFont);
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (  
        <>
            <div style={{fontSize:'17px',display:'flex',justifyContent:'center'}}> 
            <i className="xiv local-time-chs"></i>
            <div dangerouslySetInnerHTML={{__html:timeFFxivFont}}>
                {/* {time.toLocaleTimeString()} */}
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="xiv eorzea-time-chs"></i>
            <div dangerouslySetInnerHTML={{__html:eorzeaTimeFFxivFont}}></div>&nbsp;&nbsp;&nbsp;&nbsp;
            <div><span style={{cursor:'pointer'}} onClick={() => reloadEleMiao()}><i className="xiv elv"></i></span></div>
            </div>
        </>
    );
}
 // https://g.nga.cn/read.php?&tid=37329623
function getEorzeaTime() {
    const E_TIME = 20.5714285714; // ET相对于LT的倍数
    const NOW_TIME = new Date().getTime(); // 取当前时间戳
    const FLOOR_TIME = new Date().setTime(Math.floor(NOW_TIME * E_TIME));//创建新的时间对象
    const eorzeaTime = new Date(new Date().setTime(FLOOR_TIME)); // 艾欧泽亚的时间对象
    const hh = eorzeaTime.getUTCHours(); // 时
    const mm = eorzeaTime.getUTCMinutes(); // 分
    // 时间格式化
    const h = hh < 10 ? '0' + hh : hh;
    const m = mm < 10 ? '0' + mm : mm;
    
    return h + ':' + m;
    }

function reloadEleMiao(){
    window.location.reload();
}
export default TimeTab;