function findOdds(x, y)
{
    let odds = [];
    if (typeof x == 'number' && typeof y == 'number')
    {
        if ((x === y) && (x % 2 === 1))
            odds.push(x);
        else
        {
            for (let i = x; i <= y; i++)
            {
                if (i % 2 == 1)
                    odds.push(i);
            }
        }
    }  
    return odds;
}

// Tak
let x = +prompt('Enter x = ');
let y = +prompt('Enter y = ');

let sum = 0;
let sumOdds = [...findOdds(x, y)].filter((i) => sum += i);
document.write(sumOdds)
