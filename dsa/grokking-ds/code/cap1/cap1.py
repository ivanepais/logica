# Unsorted Array

from arrays.core import Array

a = Array(n)
b = Array(5, 'f')
print(b)
print(b[2])
b[3] = 3.1415

class UnsortedArray:

    def __init__(self, max_size, typecode = 'l'):
        self._array = Array(max_size, typecode)
        self._max_size = max_size
        self._size = 0

    def insert(self, new_entry):
        if self._size >= len(self._array):
            raise ValueError('The array is already full')
        else:
            self._array[self._size] = new_entry
            self._size += 1

    def delete(self, index):
        if self._size == 0:
            raise ValueError('Delete from an empty array')
        elif index < 0 or index >= self._size:
            raise ValueError(f'Index {index} out of range.')
        else:
            self._array[index] = self._array[self._size-1]
            self._size -= 1

    def find(self, target):
        for index in range(0, self._size):
            if self._array[index] == target:
                return index
        return None

    def traverse(self, callback):
        for index in range(self._size):
            callback(self._array[index])

    #array.traverse(print)

    def max_in_array(array):
        if len(array) == 0:
            raise Exception('Max of an empty array')
        max_index = 0
        for index in range(1, len(array)):
            if array[index] > array[max_index]:
                max_index = index
        return max_index, array[max_index]

    #max_in_array(counters)
    #min_in_array(counters)
    
arr1 = UnsortedArray(5)
arr1.insert(1)
print(arr1)



# Dice 

