var kthSmallest = function(matrix, k) {
    let lo = matrix[0][0], hi = matrix[matrix.length-1][matrix[0].length-1] + 1
    while (lo < hi) {
        let mid = lo + Math.floor((hi-lo)/2);
        let count = 0;
        for (let i = 0; i< matrix.length; i++) {
            for (let j =0; j<matrix.length; j++) {
                if(matrix[i][j] <= mid) count++
                else break
            }
        }
        if (count < k) lo = mid + 1
        else hi = mid
    }
    return lo
};

//binary search 활용
//정렬된 상태에서만 사용 가능한 것을 생각하자