```Python
"""
torch.max(input, dim, keepdim=False, out=None) -> (Tensor, LongTensor)
参数:
- input 需要求最大的 tensor
- dim 用哪个维度求最大

输出:

Tensor 返回这一维度的最大元素
LongTensor 返回这一维度的最大元素的索引
"""
a = torch.randn(4, 4)
print(a)
"""
tensor([[-0.3295,  2.2837,  0.3605,  1.0964],
        [ 0.4562, -1.6375,  0.1216,  0.3419],
        [-0.2341,  0.3819,  0.5054, -1.3799],
        [-0.1736,  1.1546, -0.9524,  0.7125]])
"""
print(torch.max(a, 0)) 按第一维求最大值

print(torch.max(a, 1)) 按第二维求最大值
```
