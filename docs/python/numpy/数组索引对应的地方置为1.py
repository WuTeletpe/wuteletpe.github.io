import numpy as np
def foo(input, row, col):
    index = [input[i] + i * col  for i in range(len(input))] #3+4*0 0+4*1 1+4*2 2+4*3
    value = [1 for i in input]
    matrix = np.zeros((row, col))
    np.put(matrix, index, value)
    print(matrix)
    return matrix
input = [3, 0, 1, 2]
row = 4
col = 4
foo(input, row, col)
# output = 
# [[0 0 0 1]
#  [1 0 0 0]
#  [0 1 0 0]
#  [0 0 1 0]]

row = 7
col = 5
foo(input, row, col)
# output = 
# [[0. 0. 0. 1. 0.]
#  [1. 0. 0. 0. 0.]
#  [0. 1. 0. 0. 0.]
#  [0. 0. 1. 0. 0.]
#  [0. 0. 0. 0. 0.]
#  [0. 0. 0. 0. 0.]
#  [0. 0. 0. 0. 0.]]
