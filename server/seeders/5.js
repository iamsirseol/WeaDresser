'use strict';
const { Diarie, sequelize, User, Like, Hashtag  } = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {

    const hash = ['청바지', '바지', '찢어진 바지', '거지', '롱패딩', 
    '캐나다 구스', '몽클레르', '발렌시아가', '나이키', '아디다스', '구찌', '루이비통', '아마존',
    '샤넬', '자라', '유니클로', 'h&m', '빈폴', '반팔', '여름', '덥다', '개덥다', '개춥다', '눈', '폭풍',
    '개폭풍', '개죽이', '샹크', '레어', '골드', '밈', '짝퉁', '어그', '츄리닝', '랄라', '짬뽕', '에라이' 
   ]

   const hashtag = hash.map( ele => { return { name : ele }} ) 
   return queryInterface.bulkInsert('Hashtags', hashtag)
  },
  down: async (queryInterface, Sequelize) => {
    /**
    // await diary.addHashtags(hashtags, { through : DiariesHashtag , ignoreDuplicates : true})
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.bulkDelete('Users', null, {})
    return queryInterface.bulkDelete('Hashtags', null, {})

  }
};
