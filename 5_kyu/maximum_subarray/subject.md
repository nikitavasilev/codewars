# 5 kyu - Maximum subarray sum

The maximum sum subarray problem consists in finding
the maximum sum of a contiguous subsequence in an array or list of integers:

```
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
```

Easy case is when the list is made up of only positive numbers
and the maximum sum is the sum of the whole array.  
If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum.  
Note that the empty list or array is also a valid sublist/subarray.

### Solution using the Kadane's algorithm:

```
Simple idea of the Kadane’s algorithm is to look for all positive contiguous segments of the array (max_ending_here is used for this).
And keep track of maximum sum contiguous segment among all positive segments (max_so_far is used for this).
Each time we get a positive sum compare it with max_so_far and update max_so_far if it is greater than max_so_far
```
