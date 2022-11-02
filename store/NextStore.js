import {makeAutoObservable} from "mobx";

class NextStore {

    locoScroll = null;

    constructor() {
        makeAutoObservable(this);
    }
    setLocoScroll = (val) => this.locoScroll = val;
}

export default NextStore;