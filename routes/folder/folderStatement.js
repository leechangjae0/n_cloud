exports.createFolder = () => {
    return `
    INSERT INTO TB_FOLDER (
        USER_IDX, FOLDER_NAME
    ) VALUES (
        ?, ?
    )   
    `
}
exports.readFolder = () => {
    return `
    SELECT *
    FROM TB_FOLDER
    `
}
