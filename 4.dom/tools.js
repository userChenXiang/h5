/*
 * @Author: chenXiang 
 * @Date: 2018-02-08 12:58:19 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-02-08 13:24:29
 */
/**
 * 功能:给定元素查找他的第一个元素子节点,并返回
 * @param {*} ele 
 */
function getFirstNode(ele){
    return ele.firstElementChild || ele.firstChild;
    
}
/**
 * 功能: 给定元素查找他的最后一个元素子节点, 并返回
 * @param {} ele 
 */
function getLastNode(ele){
    return ele.lastElementChild||ele.lastChild;
}
/**
 * 功能:给定一个元素查找他的下一个兄弟元素 并返回
 * @param {*} ele 
 */
function getNextNode(ele){
    return ele.nextElementSibling||ele.nextSibling;
}
/**
 * 功能:给定一个元素查找他的上一个兄弟元素 并返回
 * @param {*} ele 
 */
function getPreviousNode(ele){
    return ele.previousElementSibling||ele.previousSibling;
}
/**
 * 功能:给定元素和索引值查找指定索引值的兄弟元素节点 并返回
 * @param {*} ele 元素节点 
 * @param {*} index  元素索引值
 */
function getEleOfIndex(ele,index){
    return ele.parentNode.children[index];
}