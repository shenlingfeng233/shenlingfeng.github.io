function autoSwitchTheme() {
    const now = new Date();
    const hour = now.getHours();
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // 优先级: 手动设置 > 系统设置 > 时间判断‌:ml-citation{ref="2,3" data="citationList"}
    if (!document.documentElement.hasAttribute('data-theme')) {
        if (isSystemDark || hour < 6 || hour >= 18) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }
}

// 初始化及定时检测
window.addEventListener('DOMContentLoaded', () => {
    autoSwitchTheme();
    setInterval(autoSwitchTheme, 60000); // 每分钟检测一次‌:ml-citation{ref="2" data="citationList"}
});

// 监听系统主题变化
window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', autoSwitchTheme);

function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
    // 格式化时间（两位数显示）
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // 格式化日期
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = `${year}-${month}-${day} ${weekdays[now.getDay()]}`;
}

// 初始化音乐（处理浏览器自动播放限制）
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bg-music');
    
    // 添加点击事件处理程序以启用音频播放
    document.body.addEventListener('click', function() {
        music.play().catch(error => {
            console.log('需要用户交互后才能播放音频');
        });
    });

    // 立即更新时间并每秒更新
    updateTime();
    setInterval(updateTime, 1000);
});