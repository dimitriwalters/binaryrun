class binaryrun {
    #flipBit(bit) {
        return bit === '0' ? '1' : '0';
    }

    makeString(runs) {
        var binaryString = '',
            bit = '';

        for (var i in runs) {
            if (i % 2 === 0) {
                bit = '0';
            } else {
                bit = '1';
            }

            for (var j=0; j<runs[i]; j++) {
                binaryString += bit;
            }
        }

        return binaryString;
    }

    makeArray(binaryString) {
        var runs = [],
            bit = '0',
            start = 0,
            end = binaryString.length,
            runLength = 0;

        if (binaryString !== '') {

            while (start < end) {
                if (binaryString[start] !== bit) {
                    runs.push(runLength);
                    bit = this.#flipBit(bit);
                    runLength = 0;
                } else {
                    runLength++;
                    start++;
                }
            }

            runs.push(runLength);
        }

        return runs;
    }
}

export default binaryrun;