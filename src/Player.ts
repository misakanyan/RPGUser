class Player{

    cash: number = 0;

    gold: number = 0;

    exp: number = 0;

    level: number = 0;

    heroes: Hero[] = []


    //_heroesInTeam:Hero[] = [];

    get heroesInTeam(){
        return this.heroes.filter(hero => hero.isInTeam);
    }

    getFightPower(){

        var result = 0;
        this.heroesInTeam.map(hero => result += hero.getFightPower())
        return result;

    }

}

class Hero {  //和User是聚合关系

    isInTeam: boolean = true;

    weapons: Weapon[] = [];

    level = 1;
    quality = 1;
    strength = 5;

    @Cache
    get maxHp() {
        return this.level * 100 * this.quality;
    }

    get attack() {
        var result = 0;
        this.weapons.forEach(e => result += e.attack);
        result += this.level * 1.5 * this.strength * this.quality;
        return result;

    }

    setWeapon(w:Weapon){
        this.weapons.push(w);
    }

    getFightPower() {
        return 100;
    }

}

class Weapon {

    jewels: Jewel[] = [];
    quality = 1;
    forge = 10;

    get attack() {
        var result = 0;
        this.jewels.forEach(e => result += e.attack);
        result += this.forge + 10 + this.quality;
        return result;
    }

    setJewel(j:Jewel){
        this.jewels.push(j);
    }

}

class Jewel {

    quality = 5;
    edge = 8;
    purity = 0.85;

    get attack() {
        var result = 0;
        result += this.edge * this.edge * (this.purity + 1) * this.quality;
        return result;
    }

}

var Cache:MethodDecorator = (target:any,propertyName,desc:PropertyDescriptor)=>{
    const getter = desc.get;
    desc.get = function(){
        return getter.apply(this);
    }
    return desc;
}
