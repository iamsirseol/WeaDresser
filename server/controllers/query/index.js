require("dotenv").config();
// ! hashTag 없는 조회
module.exports = {
  //! share false 교체해야함
  findLatestById: (userId) => {
    const query = `
    SELECT NEWtable.*, B.userName 
    FROM (
      SELECT D.id as diaryId, D.temp, D.tempMax, D.tempMin, 
        D.likeCounts, D.image, D.share, D.userId as diaryUserId, D.createdAt as diaryCreated,
        CASE WHEN L.id IS null THEN false ELSE true 
        END AS likeBool 
      FROM Diaries D 
      LEFT JOIN Likes L 
      ON D.id = L.diarieId 
      AND L.userId = ${userId}
      ) 
    AS NEWtable
    LEFT JOIN Users B 
    ON NEWtable.diaryUserId = B.Id
    WHERE diaryUserId = ${userId} AND Newtable.share = 1
    ORDER BY diaryCreated
    LIMIT 1;`
    ;
  return query
  },
  //! share false 교체해야함
  findTopLikeById :(userId) => {
      const query = `
      SELECT N.*, B.userName 
      FROM (
        SELECT D.id as diaryId, D.temp, D.tempMax, D.tempMin, 
          D.likeCounts, D.image, D.share, D.userId as diaryUserId, D.createdAt as diaryCreated,
          CASE WHEN L.id IS null THEN false ELSE true 
          END AS likeBool 
        FROM Diaries D 
        LEFT JOIN Likes L 
        ON D.id = L.diarieId 
        AND L.userId = ${userId}
        ) 
      AS N 
      LEFT JOIN Users B 
      ON N.diaryUserId = B.Id
      AND N.share = 1
      ORDER BY N.likeCounts DESC
      Limit 1;
      `;
      return query
  },

};
