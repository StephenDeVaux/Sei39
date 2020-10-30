function createBoard(rows, columns) {
    row1 = ("# ").repeat(columns) + "\n"
    row2 = (" #").repeat(columns) + "\n"
    board = (row1 + row2).repeat(Math.floor(rows / 2))
    return (rows % 2 === 0 ? board : board + row1)
}