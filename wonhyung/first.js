// array clothes[[],[],[],[],[]...[]]
// different cloth combination
// 배열 내부의 2뎁스 배열의 구성은 "name","type"으로 이루어짐
// 모든 data는 string
// string의 길이 제한은 1이상 20이하, 자연수, 소문자+_
// 하루에 한개 이상의 의상은 입음.
// 같은 종류를 2개이상은 착용할 수 없음.
//똑같은 이름을 다음날에도 착용하려면 다른 종류를 함께 입던지 그날 끼고있던 다른 걸 벗던지 해야함.

const clothes = [{"yellowhat": "headgear"}, {"bluesunglasses": "eyewear"}, {"green_turban": "headgear"}];

solution(clothes);

function solution(clothes) {
    let amount = 0;
    let answer = 1;
    const types = [];

    for (let i = 0; i < clothes.length; i++) {
        //cloth[1] = type
        //cloth[2] = name

        let cloth = clothes[i];
        //처음에는 해당 타입이 없으니 0
        let tempAmount = types[cloth[1]] ? types[cloth[1]] : 0;
        amount = tempAmount + 1;

        //"타입":"갯수"
        types[cloth[1]] = amount;
    }

    for (const value in types) {
        amount = types[value];
        const innerResult = answer * amount;
        answer += innerResult;
    }

    console.log(answer);
}