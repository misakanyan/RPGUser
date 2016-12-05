# 角色扮演游戏用户体验架构
结构：玩家->英雄->武器->宝石\
玩家属性：等级
英雄基本属性：等级、稀有度、力量
英雄高级属性：最大生命 = 等级 * 10 * 稀有度，攻击力 = 等级 * 1.5 * 力量 * 稀有度
武器基本属性：稀有度、精炼度、锐利度
武器高级属性：攻击力 = 精炼度 * 5 + 锐利度 * 10 * 稀有度 / 2
宝石基本属性：稀有度、棱角数、纯粹度
宝石高级属性：生命 = pow（棱角数，2） * （纯粹度 + 1) * 稀有度

战斗力计算公式：玩家战斗力 = （英雄生命总和 + 宝石生命总和） * 10 + （英雄攻击力总和 + 武器攻击力总和） * 5
