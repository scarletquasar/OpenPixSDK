class StringEnum extends String {
    constructor(values) {
        values.forEach((value, index) => {
            if(typeof value === 'string') {
                this[value] = index;
            }
        }); 
    }
}

export { StringEnum }