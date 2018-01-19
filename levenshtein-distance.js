module.exports = calculateDistance;

function calculateDistance(s1, s2='') {
    s1 = s1.split('');
    const m = s1.length;
    s2 = s2.split('');
    const n = s2.length;
    const matrix = initLDMatrix(m, n);
    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++) {
            const a = matrix[i-1][j] + 1;
            const b = matrix[i][j-1] + 1;
            let c = matrix[i-1][j-1];
            c += (s1[i-1] == s2[j-1]) ? 0 : 1;
            matrix[i][j] = Math.min(Math.min(a,b), c);
        }
    }
    return {
        matrix: matrix,
        distance: matrix[m][n]
    }
}

function initLDMatrix(m, n) {
    let result = [];
    for(let i = 0; i <= m; i++) {
        result.push([i]);
    }
    for(let j = 1; j <= n; j++) {
        result[0].push(j);
    }
    return result;
}
