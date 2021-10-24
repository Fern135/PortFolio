export default class DiceRoller{
    /*
        dice types { 
            d20,
            d12,
            d10,
            d8,
            d6,
            d4,
            percentage
        }
    */
   //#dice_types = ["d20", 'd12','d10', 'd8', 'd6', 'd4', ' Percentage']

    constructor(dice_type){
        /*
            dice types { 
                d20,
                d12,
                d10,
                d8,
                d6,
                d4,
                percentage
            }
        */
        this.dice_type = dice_type;
    }

    rnd(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    roll(){
        switch (this.dice_type){
            case 'd20':
                return this.rnd(1,20);
                break;

            case 'd12':
                return this.rnd(1,12);
                break;

            case 'd10':
                return this.rnd(1,10);
                break;

            case 'd8':
                return this.rnd(1,8);
                break;

            case 'd6':
                return this.rnd(1,6);
                break;

            case 'd4':
                return this.rnd(1,4);
                break;

            case 'Percentage':
            case 'percentage':
                return this.rnd(10,100);
                break;
        }
    }

}