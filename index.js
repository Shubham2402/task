function notesCount(totalAmount) {
    let notesArray = [2000, 500, 200, 100];
    let resultArray = []
    for (let i = 0; i < notesArray.length; i++) {
        resultArray.push(Math.floor(totalAmount / notesArray[i]));
        totalAmount = totalAmount % notesArray[i];
    }
    let twoThousandNotes = resultArray[0];
    let fiveHundredNotes = resultArray[1];
    let twoHundredNotes = resultArray[2];
    let oneHundredNotes = resultArray[3];

    console.log('calculated amt : ' + '100 :' +
        oneHundredNotes + ' 200 :' + twoHundredNotes + ' 500 :' +
        fiveHundredNotes + ' 2000 :' +
        twoThousandNotes);
}
notesCount(2600)


function maxColourCount(colourArr) {
    // let colourArr = ['red',
    //     'green', 'yellow', 'green', 'red', 'red', 'green', 'red', 'green', 'blue', 'yellow',
    //     'green', 'green', 'red', 'green', 'blue']
    if(colourArr.length == 0)
        return null;
    var modeMap = {};
    var maxOccEl = colourArr[0], maxCount = 1;
    for(var i = 0; i < colourArr.length; i++)
    {
        var currentEl = colourArr[i];
        if(modeMap[currentEl] == null)
            modeMap[currentEl] = 1;
        else
            modeMap[currentEl]++;  
        if(modeMap[currentEl] > maxCount)
        {
            maxOccEl = currentEl;
            maxCount = modeMap[currentEl];
        }
    }
    console.log("Max Occuring element is  "+maxOccEl + "  and count is  " +maxCount)
}
maxColourCount(['red',
'green', 'yellow', 'green', 'red', 'red', 'green', 'red', 'green', 'blue', 'yellow',
'green', 'green', 'red', 'green', 'blue'])