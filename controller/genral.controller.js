class GenralServie {


    constructor(req, res) {
        this.req = req;
        this.res = res;
    }


    static get(req, res) {
        res.send("This is genral controller");
    }
}

module.exports = GenralServie;
