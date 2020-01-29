export const defaultSize = 5;
export const defaultActive = createGrid(defaultSize);
export const defaultHovered = createGrid(defaultSize);


defaultActive[1][1] = true;
defaultActive[1][2] = true;  
defaultActive[1][3] = true;

defaultActive[2][1] = true;
defaultActive[2][2] = true;
defaultActive[2][3] = true;

defaultActive[3][1] = true;
defaultActive[3][2] = true;
defaultActive[3][3] = true;



export function createGrid(n) {
    let squares = new Array(n);
    for (let i = 0; i < n; i++) {
        squares[i] = new Array(n);
        squares[i].fill(false)
    }
    return squares;
}







