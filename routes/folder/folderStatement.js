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
exports.read2Folder = () => {
    return `
    SELECT IDX, PHOTO_NAME, FOLDER_IDX, PHOTO_URL, CREATED_AT, UPDATED_AT, USER_IDX
    FROM PHOTO
    WHERE USER_IDX = ? and FOLDER_IDX = ?
    ORDER BY CREATED_AT ASC
    `
}



