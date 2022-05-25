const object = {
    maximum: 50,
    minimum: 10
}

const avg = ({maximum, minimum}) => {
    let total = maximum + minimum;
    let half = total / 2;
    return half;
}

console.log(avg(object));