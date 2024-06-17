function common(str1,str2){
    const set1 = new Set(str1);
    const set2 = new Set(str2);

    const commonletter=[...set1].filter(char=>set2.has(char)
    );

    console.log(commonletter.join(""));
}

common("niraj","singh")