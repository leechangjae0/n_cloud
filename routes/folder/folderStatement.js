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
    SELECT *
    FROM FOLDER
    `
}
