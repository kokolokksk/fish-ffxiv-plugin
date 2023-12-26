import React, { useEffect, useState } from "react";
const TimeTab = () => {
    const [time, setTime] = useState(new Date());
    const [eorzeaTime, setEorzeaTime] = useState(getEorzeaTime());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
            setEorzeaTime(getEorzeaTime());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (  
        <>
            <div> 本地时间:{time.toLocaleTimeString()}
                   艾欧泽亚时间：{eorzeaTime}
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

       
export default TimeTab;