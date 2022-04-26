const robot = require('robotjs')

// 获取鼠标坐标
let mouse = robot.getMousePos();
console.log(mouse)

// 加快鼠标速度
robot.setMouseDelay(2);

// 移动鼠标到
robot.moveMouse(mouse.x, mouse.y+100);


// 点击键盘一个按键
robot.keyTap('g')

// 拖动
robot.moveMouse(500, 500);
robot.mouseToggle("down");
robot.dragMouse(1000, 500);
robot.mouseToggle("up");
