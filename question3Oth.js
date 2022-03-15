const exampleInput1 = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"];
const exampleInput2 = ["AA", "AB", "AC", "AA", "AC"];
const exampleInput3 = ["XYZ", "XYZ", "XYZ"];
const exampleInput4 = ["ZZZ", "YYY", "NNNN", "YYY", "BBB"];
const testInput = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA", "RUBY"]


function solution(gems) {
    let answer = [];

    // let min = 0;
    // for (let i = 0; i < gems.length; i++) {
    //     let result = true;
    //     min++;
    //     for (let j = i + 1; j < gems.length; j++) {
    //         if (gems[i] == gems[j]) {
    //             result = true;
    //             break;
    //         }
    //         else
    //             result = false;
    //     }

    //     if (result == false) {
    //         break;
    //     }
    // }

    var set1 = new Set();
    gems.forEach(element => {
        set1.add(element);
    });

    var set2 = new Set(set1)

    var max = 0;
    while (set1.size > 0) {
        if (set1.has(gems[max])) {
            set1.delete(gems[max]);
        }
        max++;
    }


    let min = max;
    while (set2.size > 0) {
        min--;
        if (set2.has(gems[min])) {
            set2.delete(gems[min]);
        }
    }

    answer = [min + 1, max];
    return answer;
}

console.log(solution(testInput));