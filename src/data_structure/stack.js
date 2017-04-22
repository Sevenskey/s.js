class Stack {
    constructor () {
        this._elem = new Array();
    }

    push ( e ) {
        return this._elem.push( e );
    }

    pop () {
        if ( this._elem.length === 0 )
            return null;
        else
            return this._elem.pop();
    }

    top () {
        if ( this._elem.length === 0 )
            return null;
        else
            return this._elem[ this._elem.length - 1 ];
    }

    empty () {
        if ( this._elem.length === 0 )
            return true;
        else
            return false;
    }

    size () {
        return this._elem.length;
    }
}
