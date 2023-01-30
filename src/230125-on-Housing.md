+++
title = "On Housing"
description = "Thoughts, notes and observations"
+++

## Context

- The accuracy of this post solely relies on the good will of the reference
- Just a small node in my knowledge map
- I don't know shit about this field
- Based in *PRC* China

## Notes

### Buy

> References: [真诚的买房建议](https://zhuanlan.zhihu.com/p/34853334), 以及更多信息 [第一次买房的人可参考的经验](https://www.zhihu.com/question/433902931/answer/1635216494)

#### Summary

> 就像你若想要实现梦想，你需要先将其无限分解为可执行的 *块* 儿。**买**房以及**买什么样**的房，同样需要如此对待

- 简单来说，这是一个将不同因素汇总排序，纳入考虑不断累积打分的过程
- 普通人也能接触到的杠杆 <small>(ELI5: 小换大)</small>
- 较之其收益、多样的效用及其必要性，房贷算是良性的<small>(大)</small>压力

#### Methodology

> 大概的框架 (breaking down like how you did it before the coding interview)

- 确保你 能得到高质信息
- 确保你 能高质筛选
- 因素如 通勤、有人住、位置好、地产靠谱、八时睡-八时工-另八时在房周边

#### Finally

> If you have time and the skill, please go study abroad. That's a much better leverage than a mere housing morgage.

### Sell

> Before paying off the mortgage

#### Thoughts

- Honestly I still think I'm **not** in a position to offer such summaries or advice
- Make you sure you
  - talk to the bank that you apply the morgage from
  - get the housing ownering certificate

#### Learning Material

- [房贷没还完是否可以卖房](https://zhuanlan.zhihu.com/p/102865203)
- [房贷未偿清但想卖房如何操作](https://www.zhihu.com/question/452968467/answer/1906735298)
- [二手房置换需要注意的法律风险](https://zhuanlan.zhihu.com/p/347284260)

### Whose Name is on <u>*It*</u> *after Marriage*

> References: [房产证上的名字](https://zhuanlan.zhihu.com/p/26459076)

```python
""" 如何将您伴侣的名字加到房产证上 """

d = {
    "spending_roughly": 0,
    "loan_changes": False
    "contracts_notes": "",
    "contracts_needed": [],
}

# According to what the article says, it's much more complicated to do
# before the marriage than after it, therefore I'd omit it.
if for_spouse:
    d['spending_roughly'] = 100
    d['contracts_notes'] = "a lot less than before marriage"

    if paid_off:
        d['spending_roughly'] += 0

    elif not paid_off:
        d['spending_roughly'] += 200
        d['loan_changes'] = True

        d["contracts_needed"].append(
            "身份证", "结婚证"
            "房产证", "房屋登记申请书",
            "以及其他相关材料"
        )

# The output depends on what your situation looks like
print(items)
```
