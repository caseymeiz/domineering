
export const defaultSize = 5;

const positionState = createGrid(defaultSize);

export function createGrid(n) {
    let isHollow = new Array(n);
    for (let i = 0; i < n; i++) {
        isHollow[i] = new Array(n);
        isHollow[i].fill(true)
    }

    isHollow[1][1] = false;
    isHollow[1][2] = false;   
    isHollow[2][2] = false;
    isHollow[2][3] = false;

    return { isHollow };
}

export default positionState;



