exports.createFolder = () => {
    return `
    INSERT INTO FOLDER (
        USER_IDX, FOLDER_NAME
    ) VALUES (
        ?, ?
    )   
    `
}

exports.updatePoint = () => {
    return `
    UPDATE USER
    SET POINT = POINT + 1000
    WHERE IDX = ?
    `
}

exports.insertPoint_history = () => {
    return `
    INSERT INTO POINT_HISTORY (
        USER_IDX, FOLDER_IDX, POINT, POINT_HISTORY
     ) VALUES (
         ?, ?, ?, ?
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

exports.deleteFolder = () => {
    return `
    DELETE FROM FOLDER
    WHERE IDX = ?
    `
}

exports.updatePoint2 = () => {
    return `
    UPDATE USER
    SET POINT = POINT - 1000
    WHERE IDX = ?
    `
}

exports.insertPoint_history2 = () => {
    return `
    INSERT INTO POINT_HISTORY (
        USER_IDX, FOLDER_IDX, POINT, POINT_HISTORY
     ) VALUES (
         ?, ?, ?, ?
     )   
    `
}
