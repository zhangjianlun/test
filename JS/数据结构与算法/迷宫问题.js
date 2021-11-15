/* 
    ?栈和队列的应用————迷宫问题
    给定一个二维列表，表示迷宫(0表示通道，1表示围墙)。
    给出算法，求一条走出迷宫的路径。
    ?栈————深度优先搜索(一条路走到黑，不行就回退再重新走)
    回溯法
    思路：从一个节点开始，任意找下一个能走的节点，当找不到能走的点时，退回上一个点寻找是否有其他方向的点。
    使用栈存储当前路径 
    ?队列————广度优先搜索
    思路：从一个节点开始，寻找所有接下来能继续走的点，继续不断寻找，直到找到出口。
    使用队列存储当前正在考虑的节点 
*/
// 1代表墙，0代表能走
