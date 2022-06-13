exports.createPhoto = () => {
    return `
    INSERT INTO NCLOUD.PHOTO (PHOTO_NAME, FOLDER_IDX, PHOTO_URL, USER_IDX, HASHTAG_LIST) 
    VALUES (?, ?, ?, ?, ?); 
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
    WHERE FOLDER_IDX = ?
    GROUP BY FOLDER_IDX
    ORDER BY CREATED_AT
    `
} 

exports.readHashTagRank = () => {
    return `
    SELECT group_concat(HASHTAG_LIST)  as HASHTAG
    FROM NCLOUD.PHOTO
    `
} 