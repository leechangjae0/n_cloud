exports.createFolder = () => {
    return `
    INSERT INTO FOLDER (
        USER_IDX, FOLDER_NAME
    ) VALUES (
        ?, ?
    )   
    `
}
exports.readFolder = () => {
    return `
    SELECT IDX, FOLDER_NAME, USER_IDX, CREATED_AT, UPDATED_AT
    FROM FOLDER
    WHERE USER_IDX = ?
    ORDER BY CREATED_AT ASC
    `
}



