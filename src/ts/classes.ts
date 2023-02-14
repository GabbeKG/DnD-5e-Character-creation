class Character{
    constructor(
    _cName:string,
    _level:number,
    _class:string,
    _race:string,
    _abilityScore: AbilityScore[]=[],
    ){

    }

}
class AbilityScore{
    constructor(
        _str:number,
        _dex:number,
        _con:number,
        _int:number,
        _wis:number,
        _cha:number
        ){

        }
}
interface IAbilityScore{};

