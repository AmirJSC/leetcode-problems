function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  // [[1,1,1], [1,1,1], [1,1,1]] -> 3 x 3
  // [[1,1,1,1,1,1,1,1,1]] -> 1 x 9  matrix

  if (c * r !== mat.length * mat[0].length) {
    return mat;
  } else if (c === mat[0].length && r === mat.length) {
    return mat;
  } else {
    let arr = [];
    for (let e of mat) {
      arr = arr.concat(e);
    }

    let result = [];
    for (let j = 0; j < r; j++) {
      result.push(arr.slice(j * c, (j + 1) * c));
    }
    return result;
  }
}
