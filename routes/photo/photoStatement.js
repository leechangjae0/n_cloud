exports.createPhoto = () => {
    return `
    INSERT INTO NCLOUD.PHOTO (PHOTO_NAME, FOLDER_IDX, PHOTO_URL, USER_IDX) 
    VALUES (?, ?, ?, ?); 
    `
}
