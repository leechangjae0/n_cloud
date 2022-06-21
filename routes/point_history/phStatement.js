exports.createFolder = () => {
    return `
    INSERT INTO POINT_HISTORY (
        IDX, USER_IDX, FOLDER_IDX, POINT, DATE, POINT_HISTORY
    ) VALUES (
        ?, ?, ?
    )   
    `
}
exports.readFolder = () => {
    return `
    SELECT *
    FROM FOLDER
    WHERE IDX = ?
    `
}
