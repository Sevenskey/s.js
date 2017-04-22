class Queue {
    constructor () {
        this._elem = new Array();
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

    enqueue ( e ) {
        return this._elem.push( e );
    }

    dequeue () {
        if ( this._elem.length === 0 )
            return null;
        else
            return this._elem.shift();
    }

    front () {
        if ( this._elem.length === 0 )
            return null;
        else
            return this._elem[0];
    }

}
