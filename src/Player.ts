class Player {

    cash: number = 0;
    gold: number = 0;
    exp: number = 0;
    level: number = 10;
    heroes: Hero[] = []

    setHero(hero: Hero) {
        this.heroes.push(hero);
    }

    get heroesInTeam() {
        return this.heroes.filter(hero => hero.isInTeam);
    }

    getFightPower() {
        var result = 0;
        this.heroesInTeam.map(hero => result += hero.fightPower);
        return result;
    }

}

class Hero {  //和User是聚合关系

    isInTeam: boolean = true;
    weapons: Weapon[] = [];
    level = 1;
    quality = 1;
    strength = 5;

    constructor(level: number, quality: number, strength: number) {
        this.level = level;
        this.quality = quality;
        this.strength = strength;
    }

    //@Cache
    get maxHp() {
        return this.level * 100 * this.quality;
    }

    get attack() {
        var result = 0;
        //this.weapons.forEach(e => result += e.attack);
        result += this.level * 1.5 * this.strength * this.quality;
        return result;

    }

    setWeapon(w: Weapon) {
        this.weapons.push(w);
    }

    get fightPower() {
        var result = 0;
        this.weapons.forEach(e => result += e.attack);
        result += this.attack * 5;
        result += this.maxHp * 10;
        return result;
    }

}

class Weapon {

    jewels: Jewel[] = [];
    quality = 5;
    forge = 10;

    get attack() {
        var result = 0;
        //this.jewels.forEach(e => result += e.attack);
        result += this.forge * 10 + this.quality;
        return result;
    }

    setJewel(j: Jewel) {
        this.jewels.push(j);
    }

    get fightPower() {
        var result = 0;
        this.jewels.forEach(e => result += e.fightPower);
        result += this.attack * 5;
        return result;
    }

}

class Jewel {

    quality = 5;
    edge = 8;
    purity = 0.85;

    get attack() {
        var result = 0;
        result += this.edge * this.edge * (this.purity + 1) * this.quality / 10;
        return result;
    }

    get fightPower() {
        var result = 0;
        result += this.attack * 5;
        return result;
    }

}

var Cache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {
    const getter = desc.get;
    desc.get = function () {
        return getter.apply(this);
    }
    return desc;
}
