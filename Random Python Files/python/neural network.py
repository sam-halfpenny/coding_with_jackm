import random
print(random.randint(1,3))
import numpy as np
pint(random.randint(1,3))

iputs = [1,2,3,2.5]
weights = [ [0.2,0.8,-0.5,1.0]
            [0.5,-0.91,0.26,-0.5]
            [-0.26,-0.27,0.17,0.87]]
biases=[2,3,0.5]
output=np.dot(weights,input)+biases
print (output)
