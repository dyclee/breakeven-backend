'use strict';

const { loginValidator } = require("../../validations");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        fullName: "Demo User",
        email: 'email@email.com',
        hashedPassword: "$2a$09$g52NCXX0.CfnliQStgrjTO5NDVH7kfB1wgPpQX.n7ha200frr/J3G",
        tokenId: null,
        imageUrl: "https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Rita Smith",
        email: 'rita@email.com',
        hashedPassword: "$2a$16$GNLiEU33rzqdYf04yTsPmOtElYqll7w/7ODmJIPXd8nDCNRw5fhiS",
        tokenId: null,
        imageUrl: "https://thumbs.dreamstime.com/z/business-woman-portrait-21792902.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Frank Richards",
        email: 'frank@email.com',
        hashedPassword: "$2a$16$GNLiEU33rzqdYf04yTsPmOtElYqll7w/7ODmJIPXd8nDCNRw5fhiS",
        tokenId: null,
        imageUrl: "https://thumbs.dreamstime.com/z/satisfied-business-man-26326961.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Kevin Durand",
        email: 'kevin@email.com',
        hashedPassword: "$2a$16$GNLiEU33rzqdYf04yTsPmOtElYqll7w/7ODmJIPXd8nDCNRw5fhiS",
        tokenId: null,
        imageUrl: "https://empiresportsmedia.com/wp-content/uploads/2019/10/USATSI_13421096.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Damien Juliard",
        email: 'damien@email.com',
        hashedPassword: "$2a$16$GNLiEU33rzqdYf04yTsPmOtElYqll7w/7ODmJIPXd8nDCNRw5fhiS",
        tokenId: null,
        imageUrl: "https://cdn.elitesportsny.com/wp-content/uploads/2017/09/GettyImages-620946142.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Jeremy Win",
        email: 'jeremy@login.com',
        hashedPassword: "$2a$16$GNLiEU33rzqdYf04yTsPmOtElYqll7w/7ODmJIPXd8nDCNRw5fhiS",
        tokenId: null,
        imageUrl: "https://justrichest.com/wp-content/uploads/jeremy-lin-640x384.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Wardell Curry",
        email: 'wardell@login.com',
        hashedPassword: "$2a$16$GNLiEU33rzqdYf04yTsPmOtElYqll7w/7ODmJIPXd8nDCNRw5fhiS",
        tokenId: null,
        imageUrl: "https://www.bet.com/news/sports/2016/120/16/how-steph-curry-could-ink-deal-worth-over--200-million/_jcr_content/image.large2x1image.dimg/__1481902931795__1481898196313/121616-sports-steph-curry-smiles.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Bruce Burner",
        email: 'bruce@login.com',
        hashedPassword: "$2a$16$GNLiEU33rzqdYf04yTsPmOtElYqll7w/7ODmJIPXd8nDCNRw5fhiS",
        tokenId: null,
        imageUrl: "https://img3.looper.com/img/gallery/will-bruce-banner-be-in-the-disney-she-hulk-series/intro-1569264697.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Jennifer Hewitt",
        email: 'jennifer@email.com',
        hashedPassword: "$2a$16$GNLiEU33rzqdYf04yTsPmOtElYqll7w/7ODmJIPXd8nDCNRw5fhiS",
        tokenId: null,
        imageUrl: "https://1.bp.blogspot.com/-KM7Qtv9XTvA/VCXVcCm_AsI/AAAAAAAAf94/9aHgkh9XHC4/s3500/Jennifer%2BAniston%2Bphoto.filmcelebritiesactresses.blogspot-137.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Hannah Werner",
        email: 'hannah@login.com',
        hashedPassword: "$2a$16$GNLiEU33rzqdYf04yTsPmOtElYqll7w/7ODmJIPXd8nDCNRw5fhiS",
        tokenId: null,
        imageUrl: "https://akns-images.eonline.com/eol_images/Entire_Site/2016927/rs_1024x818-161027110450-1024.hannah-montana.102716.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
