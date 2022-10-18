+++
title = "LeetCode for SQL"
description = "Practing by solving SQL problems on LeetCode"
+++

## Foreword

#### Why

- Review what I've learnt from solving these SQL problems
- A short gist of what this problem is *for*
- Save other people's time

#### What

1. Sorted by problem ID
2. The prefix of the link would start with `https://leetcode.cn`

## Thoughts and Code

#### [175. 组合两个表](https://leetcode.cn/problems/combine-two-tables/)

```sql
SELECT FirstName, LastName, City, State		# required fields
FROM      Person  AS P 						# P has a higher prio
LEFT JOIN Address AS A  					# subordinate to P
On        P.PersonId = A.PersonId 			# left intersection
```

#### [176. 第二高的薪水](https://leetcode.cn/problems/second-highest-salary/)

```sql

``` 

#### [177. 第N高的薪水](https://leetcode.cn/problems/nth-highest-salary/)

```sql
# placeholder

```


#### [178. 分数排名](https://leetcode.cn/problems/rank-scores/)

```sql
# placeholder

```


#### [180. 连续出现的数字](https://leetcode.cn/problems/consecutive-numbers/)

```sql
# placeholder

```


#### [181. 超过经理收入的员工](https://leetcode.cn/problems/employees-earning-more-than-their-managers/)

```sql
# placeholder

```


#### [182. 查找重复的电子邮箱](https://leetcode.cn/problems/duplicate-emails/)

```sql
# placeholder

```


#### [183. 从不订购的客户](https://leetcode.cn/problems/customers-who-never-order/)

```sql
# placeholder

```


#### [184. 部门工资最高的员工](https://leetcode.cn/problems/department-highest-salary/)

```sql
# placeholder

```


#### [185. 部门工资前三高的所有员工](https://leetcode.cn/problems/department-top-three-salaries/)

```sql
# placeholder

```


#### [196. 删除重复的电子邮箱](https://leetcode.cn/problems/delete-duplicate-emails/)

```sql
# placeholder

```


#### [197. 上升的温度](https://leetcode.cn/problems/rising-temperature/)

```sql
# placeholder

```


#### [511. 游戏玩法分析 I](https://leetcode.cn/problems/game-play-analysis-i/)

```sql
# placeholder

```


#### [584. 寻找用户推荐人](https://leetcode.cn/problems/find-customer-referee/)

```sql
# placeholder

```


#### [595. 大的国家](https://leetcode.cn/problems/big-countries/)

```sql
# placeholder

```


#### [596. 超过5名学生的课](https://leetcode.cn/problems/classes-more-than-5-students/)

```sql
# placeholder

```


#### [626. 换座位](https://leetcode.cn/problems/exchange-seats/)

```sql
# placeholder

```


#### [627. 变更性别](https://leetcode.cn/problems/swap-salary/)

```sql
# placeholder

```


#### [1141. 查询近30天活跃用户数](https://leetcode.cn/problems/user-activity-for-the-past-30-days-i/)

```sql
# placeholder

```


#### [1179. 重新格式化部门表](https://leetcode.cn/problems/reformat-department-table/)

```sql
# placeholder

```


#### [1484. 按日期分组销售产品](https://leetcode.cn/problems/group-sold-products-by-the-date/)

```sql
# placeholder

```


#### [1795. 每个产品在不同商店的价格](https://leetcode.cn/problems/rearrange-products-table/)

```sql
# placeholder

```
