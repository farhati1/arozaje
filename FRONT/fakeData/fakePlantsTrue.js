
function createFakePlant (id, plant, owner, img, date, description,  type, imgOwner) {
  return {
    id,
    plant,
    owner,
    img,
    date,
    type,
    description,
    imgOwner

  }
}

export const FakePlantsTrue = [
  // {
  //   id: 1,
  //   type: "Rose",
  //   name: "Rose jaune",
  //   plant: "Phlox",
  //   owner: " par farha15",
  //   img: "img2.jpg",
  // },

  // {
  //   id: 2,
  //   plant: "Phlox",
  //   owner: " par antu_mbatsé",
  //   img: "img2.jpg",
  // },

  // {
  //   id: 3,
  //   plant: "Hortensia",
  //   owner: " par fafou15",
  //   img: "img2.jpg",
  // },

  // {
  //   id: 4,
  //   plant: "Cactus",
  //   owner: " par safydu69",
  //   img: "img2.jpg",
  // },

  // {
  //   id: 5,
  //   plant: "Pommier",
  //   owner: " par youmna_savage",
  //   img: "img2.jpg",
  // },

  createFakePlant(1, "Phlox", " @farha15", "img2.jpg", "2021-05-05", "Une belle plante planté depuis lurette. J'aimerai avoir de vos conseils. Cela fait quelque jours qu'elle ne pousse plus. Je ne sais pas si c'est à cause de température", "Rose", "photo_f.jpg"),
  createFakePlant(2, "Phlox", " @antu_mbatsé", "img2.jpg", "2021-05-05", "Une belle plante planté depuis lurette", "Rose", "photo_f.jpg"),
  createFakePlant(3, "Hortensia", " @fafou15", "plant.jpg", "2021-05-05", "Une belle plante planté depuis lurette", "Rose", "photo_f.jpg"),
  createFakePlant(4, "Cactus", " @safydu69", "plant.jpg", "2021-05-05", "Une belle plante planté depuis lurette", "Rose", "photo_f.jpg"),
];
