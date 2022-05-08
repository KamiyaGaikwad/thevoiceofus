import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    title:"I am out of closet",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: 1017,
        commentername:"modern_era",
        comment:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?",
    username: "adarshbalika",
    createdAt: "6 May 2022",
    userImg:"https://imgs.search.brave.com/ajAWvMWamuE_3k9JKAUdXbVsPSV2VOT_j8OW--Bzgpo/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5n/UWFTbUhVa3lmQzc0/akpWb25OWnZnSGFF/NyZwaWQ9QXBp",
    postImg:"https://imgs.search.brave.com/ajAWvMWamuE_3k9JKAUdXbVsPSV2VOT_j8OW--Bzgpo/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5n/UWFTbUhVa3lmQzc0/akpWb25OWnZnSGFF/NyZwaWQ9QXBp",
  },
  {
    _id: uuid(),
    title:"I am Straight Trans Woman",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur",
    likes: 1017,
        commentername:"modern_love",
        comment:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    username: "Free_Woman",
    createdAt: "7 May 2022",
    userImg:"https://imgs.search.brave.com/y_d1P4ApENHBpsxER5_4si8Rw2fSVRPJVY6EUfPU-to/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/STJMdFFPd0xaVEhR/eGZ0WmFsaXNRSGFI/YSZwaWQ9QXBp",
    postImg:"https://imgs.search.brave.com/3ccy3rDrYz8Yrh0tgEP5CGJ5riK8Y1ssda4_uq7dYTQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5a/V3JHZVctUklYSDVx/ZnVjWFBXcEhBSGFG/aiZwaWQ9QXBp",
  },
  {
    _id: uuid(),
    title:"I am BiRomantic",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur",
    likes: 1017,
        commentername:"Free_up",
        comment:"Lorem consectetur, adipisicing elit.",
      
    username: "ByMySelf",
    createdAt: "5 May 2022",
    userImg:"https://imgs.search.brave.com/mjT11StAMKyvvMj3TkQnBsLd5sSMTGD-amKhfvY6h2Q/rs:fit:355:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5n/R0hIV3N0QV9QenhL/SDIwSUI1M0l3SGFK/NCZwaWQ9QXBp",
    postImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKlZrO7Pebm55jrwk_8NutlZ9ed72DdpS-hw&usqp=CAU",
  },
];
