const exampleInput = [
    ["100", "spiderman", "music", "2"],
    ["200", "ironman", "math", "2"],
    ["300", "superman", "computer", "3"],
    ["400", "batman", "computer", "4"],
    ["500", "hulk", "music", "3"],
    ["600", "ironman", "music", "2"]
];

const testInput = [
    ["100", "ironman", "music", "2"],
    ["100", "ironman", "math", "2"],
    ["300", "superman", "computer", "3"],
    ["300", "superman", "computer", "4"],
    ["500", "hulk", "music", "3"],
    ["600", "ironman", "music", "2"]
];

function solution(relation) {
    let answer = 0;
    var result = new Set();

    for (i = 0; i < relation.length; i++) {
        result.add(relation[i][0]);
        result.add(relation[i][1] + relation[i][2]);
    }
    answer = result.size;
    return answer;
}

console.log(solution(testInput));