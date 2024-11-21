function solution(num_list) {
    var answer = new Array(num_list.length);
    let n = 1;
    for(i of num_list){
        answer[answer.length-n]=i;
        n++;
    }
    return answer;
}