export const textModifier =  (text, character = null) =>{
        let reg ='_'
        if(character === '_'){
            reg = /_/g
        } else if(character === '-'){
            reg = /=/g
        }
        let temp =  text.replace(reg, " "); 
        var text = temp
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
        return text;
    }