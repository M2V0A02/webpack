export class Unit{
    constructor(name, size, health, leadership, meleeAttack, meleeDefence,
        chargeBonus, weaponDamageArmourPiercing, weaponDamage, armor){
        this.name = name;
        this.size = size;
        this.health = health;
        this.leadership = leadership;
        this.meleeAttack = meleeAttack;
        this.meleeDefence = meleeDefence;
        this.chargeBonus = chargeBonus;
        this.weaponDamage = weaponDamage;
        this.weaponDamageArmourPiercing = weaponDamageArmourPiercing;
        this.armor = armor;
    }; 

    toString() {
        return JSON.stringify( {
            name: this.title,
            size: this.date,
            health: this.health,
            leadership: this.leadership,
            meleeAttack: this.meleeAttack,
            meleeDefence: this.meleeDefence,
            chargeBonus: this.chargeBonus,
            weaponDamage: this.weaponDamage,
            weaponDamageArmourPiercing: this.weaponDamageArmourPiercing,
            armor: this.armor,
        });
    }
}
