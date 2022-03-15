const exampleInput1 = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"];
const exampleInput2 = ["AA", "AB", "AC", "AA", "AC"];
const exampleInput3 = ["XYZ", "XYZ", "XYZ"];
const exampleInput4 = ["ZZZ", "YYY", "NNNN", "YYY", "BBB"];
const testInput = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA", "RUBY"]


function solution(gems) {
    let answer = [], closest = [];

    var set1 = new Set();
    gems.forEach(element => {
        set1.add(element);
    });

    let index = 0, min = 0, max = 0, range = 0;

    for (index; index <= gems.length - set1.size; index++) {
        var set2 = new Set(set1);

        max = index;
        while (set2.size > 0 && max < gems.length) {
            if (set2.has(gems[max])) {
                set2.delete(gems[max]);
            }
            max++;
        }
        if (set2.size == 0) {
            min = index + 1;
            range = max;
            closest.push([min, range])

        }

    }
    answer = closest.reduce(
        (previousValue, currentValue) =>
            previousValue[1] - previousValue[0] <= currentValue[1] - currentValue[0]
                ? [previousValue[0], previousValue[1]]
                : [currentValue[0], currentValue[1]]
    )
    return answer;
}

console.log(solution(testInput));