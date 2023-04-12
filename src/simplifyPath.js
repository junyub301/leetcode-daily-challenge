/**
 * @param {string} path
 * @return {string}
 */

/* 
    Simplify Path
    1. path문자열을 path.split("/")을 통해 배열로 변경
    2. path 배열을 루프
    3. dir 값이 "" 이거나 "."일 경우는 continue
    4. dir 값이 ".."이고 stack에 값이 있을 경우 stack에서 마지막값 추출
    5. 3,4의 경우가 아닌 경우 stack에 푸시
    6. "/" + stack.join("/") 리턴

    ex ) path = "/a/./b/../../c/"일 경우
    path = ['', 'a', '.','b', '..', '..','c', ''];
    i = 0 -> dir = ""   =>  stack = []
    i = 1 -> dir = "a"  =>  stack = [a]
    i = 2 -> dir = "."  =>  stack = [a]
    i = 3 -> dir = "b"  =>  stack = [a,b]
    i = 4 -> dir = ".." =>  stack = [a]  => Unix에서 ..은 한수준 위의 폴더를 가르키므로 마지막 값을 뺀다.
    i = 5 -> dir = ".." =>  stack = [] => Unix에서 ..은 한수준 위의 폴더를 가르키므로 마지막 값을 뺀다.
    i = 6 -> dir = "c"  =>  stack = [c]
    i = 7 -> dir = ""   =>  stack = [c]
    return "/" + stack.join("/") ===> "/c"
*/
var simplifyPath = function (path) {
    path = path.split("/");
    let stack = [];
    for (var dir of path) {
        if (!dir || dir === ".") continue;
        else if (dir === "..") {
            if (stack.length) stack.pop();
        } else {
            stack.push(dir);
        }
    }
    return "/" + stack.join("/");
};

const path = "/a/./b/../../c/";
console.log(simplifyPath(path));
