const EMPTY_SPACE = 0
const WALL = 1
const GUNMAN = 2

function revertMap1() {
    const exampleInput = [
        [WALL, WALL, WALL, EMPTY_SPACE],
        [EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE],
        [EMPTY_SPACE, WALL, EMPTY_SPACE, EMPTY_SPACE],
        [WALL, WALL, WALL, EMPTY_SPACE]
    ];

    return exampleInput;
}

function revertMap2() {
    const exampleInput = [
        [EMPTY_SPACE, WALL, EMPTY_SPACE, WALL, EMPTY_SPACE, WALL, EMPTY_SPACE, WALL],
        [EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE, WALL, EMPTY_SPACE, EMPTY_SPACE],
        [WALL, EMPTY_SPACE, WALL, EMPTY_SPACE, EMPTY_SPACE, WALL, EMPTY_SPACE, WALL],
        [EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE],
        [EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE, WALL, EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE],
        [EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE, WALL, EMPTY_SPACE, WALL],
        [EMPTY_SPACE, WALL, EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE],
        [EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE, WALL, EMPTY_SPACE, WALL, EMPTY_SPACE]
    ];

    return exampleInput;
}
solution();

function solution(space) {
    var answer = 0;

    answer = getAnswer();
    return answer;
}

function getAnswer() {
    //console.log("getAnswer");
    var nMaxGunMen = 0, nCombination = 0;
    var mapSolutions = [], maxMapSolution = [];
    nMaxGunMen = solveBottomRightToTop(revertMap2(), nMaxGunMen, mapSolutions);
    nMaxGunMen = solveBottomRightToLeft(revertMap2(), nMaxGunMen, mapSolutions);
    nMaxGunMen = solveTopRightToDown(revertMap2(), nMaxGunMen, mapSolutions);
    nMaxGunMen = SolveTopRightToLeft(revertMap2(), nMaxGunMen, mapSolutions);
    nMaxGunMen = SolveBottomLeftToTop(revertMap2(), nMaxGunMen, mapSolutions);
    nMaxGunMen = SolveBottomLeftToRight(revertMap2(), nMaxGunMen, mapSolutions);
    nMaxGunMen = SolveTopLeftToRight(revertMap2(), nMaxGunMen, mapSolutions);
    nMaxGunMen = SolveTopLeftToBottom(revertMap2(), nMaxGunMen, mapSolutions);

    nCombination = printSolutionWithMaxGunmen(nCombination, nMaxGunMen, mapSolutions, maxMapSolution);
    nCombination = findDifferentWaysOnTheBottom(nCombination, maxMapSolution);
    nCombination = findDifferentWaysOnTheTop(nCombination, maxMapSolution);
    nCombination = findDifferentWaysOnTheLeft(nCombination, maxMapSolution);
    nCombination = findDifferentWaysOnTheRight(nCombination, maxMapSolution);

    console.log("Max gunmen: " + nMaxGunMen);
    console.log("Combination found: " + nCombination);

}

function findDifferentWaysOnTheRight(nCombination, mapSolutions) {
    var i, j, k;
    mapSolutions.forEach(map => {

        var n = map.length;
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                if (map[i][j] == 2) {
                    // Check right
                    var isReplaced = false;
                    map[i][j] = 0;
                    for (k = j + 1; k < map.length; k++) {
                        if (isSafe(map, i, k) && map[i][k] == 0) {
                            map[i][k] = 2;
                            isReplaced = true;
                            break;
                        }
                    }

                    if (!isReplaced) {
                        map[i][j] = 2;
                    }
                    else {
                        //printSolution(map);
                        nCombination++;
                    }
                }
            }
        }
    });
    return nCombination;
}

function findDifferentWaysOnTheLeft(nCombination, mapSolutions) {
    var i, j, k;
    mapSolutions.forEach(map => {
        var n = map.length;
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                if (map[i][j] == 2) {

                    // Check left
                    var isReplaced = false;
                    map[i][j] = 0;
                    for (k = j - 1; k >= 0; k--) {
                        if (isSafe(map, i, k) && map[i][k] == 0) {
                            map[i][k] = 2;
                            isReplaced = true;
                            break;
                        }
                    }

                    if (!isReplaced) {
                        map[i][j] = 2;
                    }
                    else {
                        //printSolution(map);
                        nCombination++;
                    }
                }
            }
        }
    });
    return nCombination;
}

function findDifferentWaysOnTheTop(nCombination, mapSolutions) {
    var i, j, k;
    mapSolutions.forEach(map => {
        var n = map.length;
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                if (map[i][j] == 2) {
                    // Check top
                    var isReplaced = false;
                    map[i][j] = 0;
                    for (k = i - 1; k >= 0; k--) {
                        if (isSafe(map, k, j) && map[k][j] == 0) {
                            map[k][j] = 2;
                            isReplaced = true;
                            break;
                        }
                    }

                    if (!isReplaced) {
                        map[i][j] = 2;
                    }
                    else {
                        //printSolution(map);
                        nCombination++;
                    }
                }
            }
        }
    });
    return nCombination;
}

function findDifferentWaysOnTheBottom(nCombination, mapSolutions) {
    var i, j, k;
    mapSolutions.forEach(map => {
        var n = map.length;
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                if (map[i][j] == 2) {
                    // Check bottom
                    var isReplaced = false;
                    map[i][j] = 0;
                    for (k = i + 1; k < n; k++) {
                        if (isSafe(map, k, j) && map[k][j] == 0) {
                            map[k][j] = 2;
                            isReplaced = true;
                            break;
                        }
                    }

                    if (!isReplaced) {
                        map[i][j] = 2;
                    }
                    else {
                        //printSolution(map);
                        nCombination++;
                    }
                }
            }
        }
    });
    return nCombination;
}

function printSolution(map) {
    var n = map.length;
    var arrText = '';
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            arrText += map[i][j] + ' ';
        }
        console.log(arrText);
        arrText = '';
    }
}

function printSolutionWithMaxGunmen(nCombination, nMaxGunMen, mapSolutions, maxMapSolution) {
    mapSolutions.forEach(map => {
        var n = map.length;
        var i, j, nGunmen = 0;
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                if (map[i][j] == 2) {
                    nGunmen++;
                }
            }
        }
        if (nMaxGunMen == nGunmen) {
            maxMapSolution.push(map);
            //printSolution(map);
            nCombination++;
        }
    });
    return nCombination;
}

function myFunction(item) {
    sum += item;
}

function SolveTopLeftToBottom(room, nMaxGunMen, mapSolutions) {
    var row, col;
    var n = room.length;

    for (col = 0; col < n; col++) {
        for (row = 0; row < n; row++) {
            if (room[row][col] == 0 && isSafe(room, row, col)) {
                // Put a gunman
                room[row][col] = 2;
            }
        }
    }
    var solve = isSolutionComplete(room, nMaxGunMen, mapSolutions);
    //if (solve.isSolutionComplete)
    //    console.log("Done...");
    return solve.nMaxGunMen;
}

function SolveTopLeftToRight(room, nMaxGunMen, mapSolutions) {
    var row, col;
    var n = room.length;

    for (row = 0; row < n; row++) {
        for (col = 0; col < n; col++) {
            if (room[row][col] == 0 && isSafe(room, row, col)) {
                // Put a gunman
                room[row][col] = 2;
            }
        }
    }
    var solve = isSolutionComplete(room, nMaxGunMen, mapSolutions);
    //if (solve.isSolutionComplete)
    //    console.log("Done...");
    return solve.nMaxGunMen;
}

function SolveBottomLeftToRight(room, nMaxGunMen, mapSolutions) {
    var row, col;
    var n = room.length;

    for (row = n - 1; row >= 0; row--) {
        for (col = 0; col < n; col++) {
            if (room[row][col] == 0 && isSafe(room, row, col)) {
                // Put a gunman
                room[row][col] = 2;
            }
        }
    }
    var solve = isSolutionComplete(room, nMaxGunMen, mapSolutions);
    //if (solve.isSolutionComplete)
    //    console.log("Done...");
    return solve.nMaxGunMen;
}

function SolveBottomLeftToTop(room, nMaxGunMen, mapSolutions) {
    var row, col;
    var n = room.length;

    for (col = n - 1; col >= 0; col--) {
        for (row = n - 1; row >= 0; row--) {
            if (room[row][col] == 0 && isSafe(room, row, col)) {
                // Put a gunman
                room[row][col] = 2;
            }
        }
    }
    var solve = isSolutionComplete(room, nMaxGunMen, mapSolutions);
    //if (solve.isSolutionComplete)
    //    console.log("Done...");
    return solve.nMaxGunMen;
}

function SolveTopRightToLeft(room, nMaxGunMen, mapSolutions) {
    var row, col;
    var n = room.length;

    for (row = 0; row < n; row++) {
        for (col = n - 1; col >= 0; col--) {
            if (room[row][col] == 0 && isSafe(room, row, col)) {
                // Put a gunman
                room[row][col] = 2;
            }
        }
    }
    var solve = isSolutionComplete(room, nMaxGunMen, mapSolutions);
    //if (solve.isSolutionComplete)
    //    console.log("Done...");
    return solve.nMaxGunMen;
}

function solveTopRightToDown(room, nMaxGunMen, mapSolutions) {
    var row, col;
    var n = room.length;

    for (col = n - 1; col >= 0; col--) {
        for (row = 0; row < n; row++) {
            if (room[row][col] == 0 && isSafe(room, row, col)) {
                // Put a gunman
                room[row][col] = 2;
            }
        }
    }
    var solve = isSolutionComplete(room, nMaxGunMen, mapSolutions);
    //if (solve.isSolutionComplete)
    //    console.log("Done...");
    return solve.nMaxGunMen;
}

function solveBottomRightToLeft(room, nMaxGunMen, mapSolutions) {
    var row, col;
    var n = room.length;

    for (row = n - 1; row >= 0; row--) {
        for (col = n - 1; col >= 0; col--) {
            if (room[row][col] == 0 && isSafe(room, row, col)) {
                // Put a gunman
                room[row][col] = 2;
            }
        }
    }
    var solve = isSolutionComplete(room, nMaxGunMen, mapSolutions);
    //if (solve.isSolutionComplete)
    //    console.log("Done...");
    return solve.nMaxGunMen;
}

function solveBottomRightToTop(room, nMaxGunMen, mapSolutions) {
    var row, col;
    var n = room.length;

    for (col = n - 1; col >= 0; col--) {
        for (row = n - 1; row >= 0; row--) {
            if (room[row][col] == 0 && isSafe(room, row, col)) {
                // Put a gunman
                room[row][col] = 2;
            }
        }
    }
    var solve = isSolutionComplete(room, nMaxGunMen, mapSolutions);
    //if (solve.isSolutionComplete)
    //    console.log("Done...");
    return solve.nMaxGunMen;
}

function isSolutionComplete(room, nMaxGunMen, mapSolutions) {
    var i, j, nGunmen = 0;
    var solution;
    for (i = 0; i < room.length; i++) {
        for (j = 0; j < room.length; j++) {
            if (room[i][j] == 0 && isSafe(room, i, j)) {
                solution = { isSolutionComplete: false, nMaxGunMen: nMaxGunMen }
                return solution;
            }
            else if (room[i][j] == 2) {
                nGunmen++;
            }
        }
    }
    if (nMaxGunMen < nGunmen) {
        nMaxGunMen = nGunmen;
        //console.log(nMaxGunMen);
        mapSolutions.push(room);
    }

    solution = { isSolutionComplete: true, nMaxGunMen: nMaxGunMen }
    return solution;``
}

function isSafe(room, row, col) {
    var i;
    var isSafe = true;

    // Check on the left
    for (i = col - 1; i >= 0; i--) {
        if (room[row][i] == 2) {
            isSafe = false;
            break;
        }
        else if (room[row][i] == 1) {
            isSafe = true;
            break;
        }
    }
    if (!isSafe)
        return isSafe;

    // Check on the right
    for (i = col + 1; i < room.length; i++) {
        if (room[row][i] == 2) {
            isSafe = false;
            break;
        }
        else if (room[row][i] == 1) {
            isSafe = true;
            break;
        }
    }
    if (!isSafe)
        return isSafe;

    // Check on the bottom
    for (i = row + 1; i < room.length; i++) {
        if (room[i][col] == 2) {
            isSafe = false;
            break;
        }
        else if (room[i][col] == 1) {
            isSafe = true;
            break;
        }
    }
    if (!isSafe)
        return isSafe;

    // Check on the top
    for (i = row - 1; i >= 0; i--) {
        if (room[i][col] == 2) {
            isSafe = false;
            break;
        }
        else if (room[i][col] == 1) {
            isSafe = true;
            break;
        }
    }
    if (!isSafe)
        return isSafe;

    return isSafe;
}