const { sequelize } = require('../models')
const { findTopLikeById, findLatestById, findRandomOne, findTopLikeOne } = require('./query/query')
module.exports = {
  // * GET  /? tempMin= {}& tempMax={}
  findRandom : async (req, res) => {
    const { tempMin, tempMax } = req.query;

    const randomQuery = findRandomOne(tempMin, tempMax);
    const topQuery = findTopLikeOne(tempMin, tempMax);
   
    return sequelize.query( randomQuery, { raw : true })
      .then( async randomFound => {
        // random one found OK
        if(randomFound[0].length > 0){
          const topOne = await sequelize.query( topQuery, { raw : true })
          return topOne[0].length > 0 // most like found OK
            ? res.status(200).json([ randomFound[0][0], topOne[0][0] ])
            : res.status(201).json([ randomFound[0][0], null ]) 
            //! DB no data (미리 넣을거라 가능성 희박) BUT 협의
        }        
        else{ // !no random => nodata ? x
          // DB no data (미리 넣을거라 가능성 희박) BUT 협의
          const topOne = await sequelize.query( topQuery, { raw : true })
          return topOne[0].length > 0
            ? res.status(202).json([ null, topOne[0][0] ])
            : res.status(404).json([ null, null ]) 
        }
      })
      .catch( err => {
        //!Todo error handlring (DB query => request too much then will break )
        return res.status(500).send("Internal Server err") 
      })    
  }, 

  // * GET  /user  Login user 
  findById : async (req, res) => {
    
    const { userId, tempMax, tempMin }= req.query
    const userQuery = findLatestById(userId, tempMin, tempMax) // leftOne
    const topQuery = findTopLikeById(userId, tempMin, tempMax); // rightOne

    return sequelize.query( userQuery, { raw: true } )
      .then(  async userOne => { 
        //  found user one OK 
        if(userOne[0].length > 0){ 
          const topOne = await sequelize.query( topQuery, { raw : true }) 
          // found most like OK
          return topOne[0].length > 0
          ? res.status(200).json([ userOne[0][0], topOne[0][0] ]) 
          : res.status(201).json([ userOne[0][0], null ]) 
          //! DB no data (미리 넣을거라 가능성 희박) BUT 협의
        }
        else{ 
          // * user data 없을 수 있음 
          const randomQuery = findRandomOne(tempMin, tempMax);
          // Search random one 
          return sequelize.query( randomQuery, { raw : true })
          .then( async randomFound => {
            if(randomFound[0].length > 0){
              // Search most like one
              const topOne = await sequelize.query( topQuery, { raw : true })
              // both OK
              return topOne[0].length > 0  
                ? res.status(200).json([ randomFound[0][0], topOne[0][0] ])
                : res.status(201).json([ randomFound[0][0], null ])  
                // random one OK  no most like
                //! DB no data (미리 넣을거라 가능성 희박) BUT 협의
            }        
            else{ //! no random ? => no data x  
              const topOne = await sequelize.query( topQuery, { raw : true })
              return topOne[0].length > 0
                // only most like one OK 
                ? res.status(202).json([ null, topOne[0][0] ])
                : res.status(404).json([ null, null ]) 
                // no random, no most like
              //! DB no data (미리 넣을거라 가능성 희박) BUT 협의
            }
          })
      }
    })
    .catch(err => {
      return res.status(500).send("Internal server err")
    }) 
  }
}
