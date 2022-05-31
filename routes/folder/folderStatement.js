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
    INNER JOIN(
        SELECT FOLDER_IDX, COUNT(*) AS CNT
        FROM PHOTO
        GROUP BY FOLDER_IDX
    )AS FILE_CNT
    WHERE USER_IDX = ?
    ORDER BY CREATED_AT ASC
    `
}




