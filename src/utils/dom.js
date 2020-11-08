

//element.classList => 엘리먼트의 클래스 속성을 반환하는 프로퍼티
//element.classList.add 지정한 클래스 값을 추가 
export const addClass = (element, className) => element.classList.add(className);
//  선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 엘리먼트 반환
// 탐색순서는 깊이우선 전위 순회
export const getElement = selector => document.querySelector(selector);

//getBody 함수는 document에서 존재하는 element중에 body를 찾음
export const getBody = () => getElement('body');
//body에 해당 클레스네임을 추가해주는 함수 
export const addClassToBody = (className) => addClass(getBody(), className);


export const removeClass = (element, className) => element.classList.remove(className);
// body를 찾아서 해당 클레스네임 제거
export const removeClassToBody = (className) => removeClass(getBody(), className);

export const hasClass = (element, className) => element.classList.contains(className);

export const hasClassOfBody = className => hasClass(getBody(), className);