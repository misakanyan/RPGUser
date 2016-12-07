var Player = (function () {
    function Player() {
        this.cash = 0;
        this.gold = 0;
        this.exp = 0;
        this.level = 10;
        this.heroes = [];
    }
    var d = __define,c=Player,p=c.prototype;
    p.setHero = function (hero) {
        this.heroes.push(hero);
    };
    d(p, "heroesInTeam"
        ,function () {
            return this.heroes.filter(function (hero) { return hero.isInTeam; });
        }
    );
    p.getFightPower = function () {
        var result = 0;
        this.heroesInTeam.map(function (hero) { return result += hero.fightPower; });
        return result;
    };
    return Player;
}());
egret.registerClass(Player,'Player');
var Hero = (function () {
    function Hero(level, quality, strength) {
        this.isInTeam = true;
        this.weapons = [];
        this.level = 1;
        this.quality = 1;
        this.strength = 5;
        this.level = level;
        this.quality = quality;
        this.strength = strength;
    }
    var d = __define,c=Hero,p=c.prototype;
    d(p, "maxHp"
        //@Cache
        ,function () {
            return this.level * 100 * this.quality;
        }
    );
    d(p, "attack"
        ,function () {
            var result = 0;
            //this.weapons.forEach(e => result += e.attack);
            result += this.level * 1.5 * this.strength * this.quality;
            return result;
        }
    );
    p.setWeapon = function (w) {
        this.weapons.push(w);
    };
    d(p, "fightPower"
        ,function () {
            var result = 0;
            this.weapons.forEach(function (e) { return result += e.attack; });
            result += this.attack * 5;
            result += this.maxHp * 10;
            return result;
        }
    );
    return Hero;
}());
egret.registerClass(Hero,'Hero');
var Weapon = (function () {
    function Weapon() {
        this.jewels = [];
        this.quality = 5;
        this.forge = 10;
    }
    var d = __define,c=Weapon,p=c.prototype;
    d(p, "attack"
        ,function () {
            var result = 0;
            //this.jewels.forEach(e => result += e.attack);
            result += this.forge * 10 + this.quality;
            return result;
        }
    );
    p.setJewel = function (j) {
        this.jewels.push(j);
    };
    d(p, "fightPower"
        ,function () {
            var result = 0;
            this.jewels.forEach(function (e) { return result += e.fightPower; });
            result += this.attack * 5;
            return result;
        }
    );
    return Weapon;
}());
egret.registerClass(Weapon,'Weapon');
var Jewel = (function () {
    function Jewel() {
        this.quality = 5;
        this.edge = 8;
        this.purity = 0.85;
    }
    var d = __define,c=Jewel,p=c.prototype;
    d(p, "attack"
        ,function () {
            var result = 0;
            result += this.edge * this.edge * (this.purity + 1) * this.quality / 10;
            return result;
        }
    );
    d(p, "fightPower"
        ,function () {
            var result = 0;
            result += this.attack * 5;
            return result;
        }
    );
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
var Cache = function (target, propertyName, desc) {
    var getter = desc.get;
    desc.get = function () {
        return getter.apply(this);
    };
    return desc;
};
//# sourceMappingURL=Player.js.map