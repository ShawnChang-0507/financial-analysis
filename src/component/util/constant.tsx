export const yearList = (date: Date) => {
    const year = date.getFullYear();
    return [year - 6, year - 5, year - 4, year - 3, year - 2, year - 1, year];
}

export const url = 'http://localhost:3556/';

export const colors = ['red', 'yellow', 'blue', 'green', 'orange'];

export const options = {
    scales: {
        xAxes: [{
            stacked: false,
        }],
        yAxes: [{
            stacked: false,
        }],
    },
}

export interface dataList {
    流动负债: number,
    流动资产: number,
    速动资产: number, 
    现金: number,
    负债总额: number,
    资产总额: number,
}

export interface myData {
    name: string,
    one: dataList,
    two: dataList,
    three: dataList,
    four: dataList,
    five: dataList,
    six: dataList,
    seven: dataList,
}

export interface myLine {
    label: string,
    borderColor: string,
    borderWidth: number,
    data: Array<number>,
}
