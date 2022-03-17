// 탐색 우선 순위
// 전위 순회(깊이 우선 탐색 ; DFS) : 부모 > 왼쪽 자식 > 오른쪽 자식
// 중위 순회 : 왼쪽 자식 > 부모 > 오른쪽 자식
// 후위 순회 : 왼쪽 자식 > 오른쪽 자식 > 부모

function solution(root) {
	function preorderTraversal(node) {
		if (node > 7) return;
		else {
			console.log(node);
			preorderTraversal(node * 2);
			preorderTraversal(node * 2 + 1);
		}
	}

	function inorderTraversal(node) {
		if (node > 7) return;
		else {
			inorderTraversal(node * 2);
			console.log(node);
			inorderTraversal(node * 2 + 1);
		}
	}

	function postorderTraversal(node) {
		if (node > 7) return;
		else {
			postorderTraversal(node * 2);
			postorderTraversal(node * 2 + 1);
			console.log(node);
		}
	}

	// preorderTraversal(root);
	// inorderTraversal(root);
	postorderTraversal(root);
}

console.log(solution(1));
