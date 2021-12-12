'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let checkArr = new Array(11).fill(false);
    // [0,1,2,3,4,5,6,7,8,9,10] ;;
    // 1~10;
    // [0, true, ]
    let uData = new Array(10).fill(0).map( (ele, idx) =>{
      let ranNum = parseInt(Math.random()*10 + 1);
      let shareBool;
      while( checkArr[ranNum] ){
        ranNum = parseInt(Math.random()*10 + 1);
      }
      checkArr[ranNum] = true; 

      if(ranNum%2) shareBool = true;
      else shareBool = false; 
      
      const obj = {
        id : idx+1,
        userName : "minchan " + ranNum,
        email : "minchan@email"+ ranNum +".com",
        password: "1234",
        gender: "male",
        social:shareBool,
      }
      return obj 
    })
    
    let result = await queryInterface.bulkInsert('Users', uData);
    if(result){
    
      let Ldata = new Array(20).fill(0);
      let Ddata = [] ; 
      for(let i = 0 ; i < 20 ; i ++){
        // Diaries random obj dada 
        let ranUser = parseInt(Math.random()*10+1);
        let ranLikeCnt = parseInt((Math.random()*100)%20);
        let obj = 
        {
          id : i+1,
          image:"image " +  uData[ranUser-1].userName + ranUser,
          content:"content " +  uData[ranUser-1] + ranUser,
          weather:"맑음",
          temp: 10.0,
          tempMax: 12.0,
          tempMin: 0.1, 
          userId: uData[ranUser-1].id,
          likeCounts:ranLikeCnt,
          share:false,
        }

        // Likes random obj dadt 
        let ranDiary = parseInt(Math.random()*5+1)
        let obj2 =
        {
          id : i +1, 
          userId : uData[ranUser-1].id, 
          diariesId : ranDiary 
        }
        Ldata[i]=obj2;
        Ddata.push(obj)        
      }
      queryInterface.bulkInsert('Diaries', Ddata);
      return queryInterface.bulkInsert('Likes', Ldata);
    }
      
      
      // const Ddata = uData.map( (user,idx) => {
      //   let ranUser = parseInt(Math.random()*10+1)
      //   let obj = 
      //   {
      //     id : idx+1,
      //     image:"image " + user.userName + ranUser,
      //     content:"content " +  + user.userName + ranUser,
      //     weather:"맑음",
      //     temp: 10.0,
      //     tempMax: 12.0,
      //     tempMin: 0.1, 
      //     userId: ranUser,
      //     share:false,
      //   }
      //   let ranDiary = parseInt(Math.random()*5+1)
      //   let obj2 =
      //   {
      //     id : idx +1, 
      //     userId : ranUser, 
      //     diariesId : ranDiary 
      //   }
      //   Ldata[idx]=obj2;
      //   return obj
      // });
  

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete('Users', null, {});
    return queryInterface.bulkDelete('Diaries', null, {});
  }
};
