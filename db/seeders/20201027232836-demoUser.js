'use strict';

const { loginValidator } = require("../../validations");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        fullName: "Demo User",
        email: 'email@email.com',
        hashedPassword: "$2a$09$Y/NkJ2.XNQ0dniAncTcBHeojSzq9kAauYV2SMIctm6yhJWVr4YdUe",
        tokenId: null,
        imageUrl: "https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Rita Smith",
        email: 'rita@email.com',
        hashedPassword: "$2a$09$Y/NkJ2.XNQ0dniAncTcBHeojSzq9kAauYV2SMIctm6yhJWVr4YdUe",
        tokenId: null,
        imageUrl: "https://thumbs.dreamstime.com/z/business-woman-portrait-21792902.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Frank Richards",
        email: 'frank@email.com',
        hashedPassword: "$2a$09$Y/NkJ2.XNQ0dniAncTcBHeojSzq9kAauYV2SMIctm6yhJWVr4YdUe",
        tokenId: null,
        imageUrl: "https://thumbs.dreamstime.com/z/satisfied-business-man-26326961.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Kevin Durand",
        email: 'kevin@email.com',
        hashedPassword: "$2a$09$Y/NkJ2.XNQ0dniAncTcBHeojSzq9kAauYV2SMIctm6yhJWVr4YdUe",
        tokenId: null,
        imageUrl: "https://empiresportsmedia.com/wp-content/uploads/2019/10/USATSI_13421096.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Damien Juliard",
        email: 'damien@email.com',
        hashedPassword: "$2a$09$Y/NkJ2.XNQ0dniAncTcBHeojSzq9kAauYV2SMIctm6yhJWVr4YdUe",
        tokenId: null,
        imageUrl: "https://cdn.elitesportsny.com/wp-content/uploads/2017/09/GettyImages-620946142.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Jeremy Win",
        email: 'jeremy@login.com',
        hashedPassword: "$2a$09$Y/NkJ2.XNQ0dniAncTcBHeojSzq9kAauYV2SMIctm6yhJWVr4YdUe",
        tokenId: null,
        imageUrl: "https://justrichest.com/wp-content/uploads/jeremy-lin-640x384.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Wardell Curry",
        email: 'wardell@login.com',
        hashedPassword: "$2a$09$Y/NkJ2.XNQ0dniAncTcBHeojSzq9kAauYV2SMIctm6yhJWVr4YdUe",
        tokenId: null,
        imageUrl: "https://www.bet.com/news/sports/2016/120/16/how-steph-curry-could-ink-deal-worth-over--200-million/_jcr_content/image.large2x1image.dimg/__1481902931795__1481898196313/121616-sports-steph-curry-smiles.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Bruce Barner",
        email: 'bruce@login.com',
        hashedPassword: "$2a$09$Y/NkJ2.XNQ0dniAncTcBHeojSzq9kAauYV2SMIctm6yhJWVr4YdUe",
        tokenId: null,
        imageUrl: "https://img3.looper.com/img/gallery/will-bruce-banner-be-in-the-disney-she-hulk-series/intro-1569264697.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Jennifer Talisman",
        email: 'jennifer@email.com',
        hashedPassword: "$2a$09$Y/NkJ2.XNQ0dniAncTcBHeojSzq9kAauYV2SMIctm6yhJWVr4YdUe",
        tokenId: null,
        imageUrl: "https://1.bp.blogspot.com/-KM7Qtv9XTvA/VCXVcCm_AsI/AAAAAAAAf94/9aHgkh9XHC4/s3500/Jennifer%2BAniston%2Bphoto.filmcelebritiesactresses.blogspot-137.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Hannah Montini",
        email: 'hannah@login.com',
        hashedPassword: "$2a$09$Y/NkJ2.XNQ0dniAncTcBHeojSzq9kAauYV2SMIctm6yhJWVr4YdUe",
        tokenId: null,
        imageUrl: "https://akns-images.eonline.com/eol_images/Entire_Site/2016927/rs_1024x818-161027110450-1024.hannah-montana.102716.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Jim Halpert",
        email: 'jim@jim.com',
        hashedPassword: "$2a$09$Y/NkJ2.XNQ0dniAncTcBHeojSzq9kAauYV2SMIctm6yhJWVr4YdUe",
        tokenId: null,
        imageUrl: "https://1to10reviews.files.wordpress.com/2008/02/jim_office.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Michelle Orama",
        email: 'michelle@michelle.com',
        hashedPassword: "$2a$09$Y/NkJ2.XNQ0dniAncTcBHeojSzq9kAauYV2SMIctm6yhJWVr4YdUe",
        tokenId: null,
        imageUrl: "https://www.nowplayingnashville.com/wp-content/uploads/sites/www.nowplayingnashville.com/images/2018/12/Michelle-Obama-Nashville.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Robby Dinero",
        email: 'robert@email.com',
        hashedPassword: "$2a$09$Y/NkJ2.XNQ0dniAncTcBHeojSzq9kAauYV2SMIctm6yhJWVr4YdUe",
        tokenId: null,
        imageUrl: "https://alongtheboards.com/wp-content/uploads/2019/10/1571334993_robert-de-niro-having-angry-meltdown-over-divorce-and-former-assistants-lawsuit.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Aqua Fina",
        email: 'awk@email.com',
        hashedPassword: "$2a$09$Y/NkJ2.XNQ0dniAncTcBHeojSzq9kAauYV2SMIctm6yhJWVr4YdUe",
        tokenId: null,
        imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.indiewire.com%2Fwp-content%2Fuploads%2F2018%2F11%2FAwkwafina.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Flamin Hots",
        email: 'hot@cheeto.com',
        hashedPassword: "$2a$09$Y/NkJ2.XNQ0dniAncTcBHeojSzq9kAauYV2SMIctm6yhJWVr4YdUe",
        tokenId: null,
        imageUrl: "https://media.syracuse.com/movies_impact/photo/cheetos.jpg",
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
