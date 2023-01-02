module.exports = function toReadable (num) {
p=num.toString().length;
check=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
s=[];
if(num==0){s.push('zero')}    
    for(let i=0;i<num.toString().length;++i){
        //teens
        if ((num.toString()[i]==1)&&(p%3==2)){
                if(num.toString()[i+1]==0){s.push('ten')}
                if(num.toString()[i+1]==1){s.push('eleven')}
                if(num.toString()[i+1]==2){s.push('twelve')}
                if(num.toString()[i+1]==3){s.push('thirteen')}
                if(num.toString()[i+1]==4){s.push('fourteen')}
                if(num.toString()[i+1]==5){s.push('fifteen')}
                if(num.toString()[i+1]==6){s.push('sixteen')}
                if(num.toString()[i+1]==7){s.push('seventeen')}
                if(num.toString()[i+1]==8){s.push('eighteen')}
                if(num.toString()[i+1]==9){s.push('nineteen')}
            }
        //twenty and etc.
        if (p%3==2){
            if(num.toString()[i]==2){s.push('twenty')}
            if(num.toString()[i]==3){s.push('thirty')}
            if(num.toString()[i]==4){s.push('forty')}
            if(num.toString()[i]==5){s.push('fifty')}
            if(num.toString()[i]==6){s.push('sixty')}
            if(num.toString()[i]==7){s.push('seventy')}
            if(num.toString()[i]==8){s.push('eighty')}
            if(num.toString()[i]==9){s.push('ninety')}
        }else{
        //higher then 99
        if((num.toString()[i-1]!==1)&&(!check.includes(s[s.length-1]))){
            if(num.toString()[i]==1){s.push('one')}
            if(num.toString()[i]==2){s.push('two')}
            if(num.toString()[i]==3){s.push('three')}
            if(num.toString()[i]==4){s.push('four')}
            if(num.toString()[i]==5){s.push('five')}
            if(num.toString()[i]==6){s.push('six')}
            if(num.toString()[i]==7){s.push('seven')}
            if(num.toString()[i]==8){s.push('eight')}
            if(num.toString()[i]==9){s.push('nine')}
            //suffix
            if(p%3==0){s.push('hundred')}
            if(p==4){s.push('thousand')}
            if(p==7){s.push('million')}
            if(p==10){s.push('billion')}
        }
        }
        --p;
    }
        result=s.toString();
        return(result.replace(/,/g, ' '));
    }
