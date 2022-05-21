exports.createFolder = () => {
    return `
    INSERT INTO TB_MOVIETHEATGITER (
        THEATER_NAME, THEATER_LOCATION
    ) VALUES (
        ?, ?
    )   
    `
}
exports.readFolder = () => {
    return `
    SELECT *
    FROM TB_MOVIETHEATER
    `
}
