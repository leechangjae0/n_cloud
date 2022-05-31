exports.createPhoto = () => {
    return `
    INSERT INTO NCLOUD.PHOTO (PHOTO_NAME, FOLDER_IDX, PHOTO_URL, USER_IDX) 
    VALUES (?, ?, ?, ?); 
    `
}

exports.readPhoto = () => {
    return `
    SELECT FOLDER_IDX, COUNT(*) AS CNT, CREATED_AT
    FROM PHOTO
    GROUP BY FOLDER_IDX
    ORDER BY CREATED_AT
    `
} 

exports.read2Photo = () => {
    return `
    SELECT IDX, PHOTO_NAME, FOLDER_IDX, PHOTO_URL, CREATED_AT, UPDATED_AT, USER_IDX
    FROM PHOTO
    GROUP BY FOLDER_IDX
    ORDER BY CREATED_AT
    `
} 