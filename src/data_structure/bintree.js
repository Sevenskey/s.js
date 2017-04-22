const RBColor = {
    RB_RED : 0,
    RB_BLACK : 1
};

class BinNode {
    constructor ( {
        data = null,
        parent = null, lc = null, rc = null, // 父节点、左右孩子
        
        // 这里约定仅含单个节点的树高度为0
        // 空树高度为-1
        height = 0, // 树高
        
        npl = 1, // Null Path Length
        color = RBColor.RB_RED, // 颜色
    } ) {
        this.data = data;
        
        this.parent = parent;
        this.lc = lc;
        this.rc = rc;

        this.height = height;
        this.npl = npl;
        this.color = color;
    }

    // 统计当前节点后代总数，亦即以其为根的子树的规模
    size () {
    }

    stature () {
        return this.
    }

    // 作为当前节点的左孩子插入新节点
    insertAsLC ( e ) {
        return this.lc = new BinNode( {
            data = e,
            parent = this,
        } );
    }

    // 作为当前节点的右孩子插入新节点
    insertAsRC ( e ) {
        return this.rc = new BinNode( {
            data = e,
            parent = this,
        } );
    }

    // 取当前节点的直接后继
    succ () {
    }

    // 子树层次遍历
    travLevel ( visit ) {
    }

    // 子树先序遍历
    travPre ( visit ) {
    }

    // 子树中序遍历
    travIn ( visit ) {
    }

    // 子树后序遍历
    travPost ( visit ) {
    }

    // 小于
    c ( bn ) {
        return this.data < bn.data;
    }

    // 等于
    e ( bn ) {
        return this.data === bn.data;
    }

    /*****
     * BinNode 状态与性质判断
     *****/
    isRoot() {
        return ! this.parent;
    }
    isLChild() {
        return ! this.isRoot() && ( this == this.parent.lc );
    }
    isRChild() {
        return ! this.isRoot() && ( this == this.parent.rc );
    }
    hasParent() {
        return ! this.isRoot();
    }
    hasLChild() {
        return this.lc;
    }
    hasRChild() {
        return this.rc;
    }
    hasChild() {
        return this.hasLChild() || this.hasRChild();
    }
    hasBothChild () {
        return this.hasLChild() && this.hasRChild();
    }
    isLeaf () {
        return ! this.hasChild();
    }
    sibling () {
        return this.isLChild() ? this.parent.rc : this.parent.lc;
    }
    uncle () {
        return this.parent.isLChild() ? this.parent.parent.rc : this.parent.parent.lc;
    }
    // 来自父亲的引用
    fromParentTo () {
        return this.isRoot() ? this : ( this.isLChild() ? this.parent.lc : this.parent.rc );
    }
}



class BinTree {
    constructor () {
        this._size = 0;
        this._root = null;
    }

    // 更新节点 x 的高度
    updateHeight ( x ) {
    }

    // 更新节点 x 及其祖先的高度
    updateHeightAbove ( x ) {
    }
    
    // 规模
    size () {
    }

    // 判空
    empty () {
    }

    // 树根
    root () {
        return this._root;
    }

    // 插入根节点
    insertAsRoot ( e ) {
    }

    // e 作为 x 的左孩子（原无）插入
    insertAsLC ( x, e ) {
    }

    // e 作为 x 的右孩子（原无）插入
    insertAsRC ( x, e ) {
    }

    // T 作为 x 左子树接入
    attachAsLC ( x, T ) {
    }

    // T 作为 x 右子树接入
    attachAsRC ( x, T ) {
    }

    // 删除以位置 x 处节点为根的子树，返回该子树原先的规模
    remove ( x ) {
    }

    // 将子树 x 从当前树中摘除，并将其转换为一棵独立子树
    secede ( x ) {
    }

    // 层次遍历
    travLevel ( visit ) {
    }

    // 先序遍历
    travPre ( visit ) {
    }

    // 中序遍历
    travIn ( visit ) {
    }

    // 后序遍历
    travPost ( visit ) {
    }

    // 判等
    e ( t ) {
        return this._root && t._root && ( this._root === t._root );
    }

}
