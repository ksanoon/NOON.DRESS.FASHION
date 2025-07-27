const products = [
  {
    name: "Glossy Nightclub Dress for Women Halter Neck Hollow Suspender Pajamas Backless Slim Fit Hip Covering Nightdress",
    price: "84.99 SAR",
    img: "image/1.png",
    form: "https://forms.gle/formLink1",
    rating: "⭐⭐⭐⭐☆ (4.2)"
  },
  {
    name: "Lace Floral V-Neck Sleeveless Hollow Out Lingerie Nightdress Set",
    price: "33.99 SAR",
    img: "image/2.png",
    form: "https://forms.gle/formLink2",
    rating: "⭐⭐⭐⭐⭐ (5.0)"
  },
  {
    name: "Women Retro Bowknot Suspender Bellyband Lingerie Set Black",
    price: "84.99 SAR",
    img: "image/3.png",
    form: "https://forms.gle/formLink3",
    rating: "⭐⭐⭐⭐ (4.0)"
  },
  {
    name: "Floral Detail Lace Nightdress Purple",
    price: "33.99 SAR",
    img: "image/4.png",
    form: "https://forms.gle/formLink4",
    rating: "⭐⭐⭐☆ (3.7)"
  },
  {
    name: "Image 210 Women's Ecru Satin Strappy Nightgown",
    price: "84.99 SAR",
    img: "image/5.png",
    form: "https://forms.gle/formLink5",
    rating: "⭐⭐⭐⭐☆ (4.4)"
  },
  {
    name: "Night Club Backless Dress Silver",
    price: "33.99 SAR",
    img: "image/6.png",
    form: "https://forms.gle/formLink6",
    rating: "⭐⭐⭐⭐⭐ (5.0)"
  },
  {
    name: "Sexy Sheer Floral Lace Pajamas Lingerie Set High Waist Sleepwear Bra and Panty 2 Piece Nightwear",
    price: "84.99 SAR",
    img: "image/7.png",
    form: "https://forms.gle/formLink7",
    rating: "⭐⭐⭐☆ (3.5)"
  },
  {
    name: "Ice Silk Satin Suspender Nightgown For Women'S",
    price: "33.99 SAR",
    img: "image/8.png",
    form: "https://forms.gle/formLink8",
    rating: "⭐⭐⭐⭐ (4.1)"
  },
  {
    name: "2-Piece One Piece Lace Patent Leather Cut-Out Jumpsuit Tight Design Nightwear",
    price: "84.99 SAR",
    img: "image/9.png",
    form: "https://forms.gle/formLink9",
    rating: "⭐⭐⭐⭐☆ (4.6)"
  },
  {
    name: "Women's 2 Pcs Nightsuit Exotic Lace Sleepwear Nightwear For Womens White",
    price: "84.99 SAR",
    img: "image/10.png",
    form: "https://forms.gle/formLink10",
    rating: "⭐⭐⭐ (3.0)"
  }
];

const container = document.getElementById("productContainer");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <div class="info">
      <h3>${p.name}</h3>
      <div class="price-banner">${p.price}</div>
      <div class="rating">${p.rating}</div>
      <button class="order-btn" onclick="openForm('${p.form}')">Order Now</button>
    </div>
  `;
  container.appendChild(card);
});

function openForm(link) {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("formPopup").style.display = "block";
  document.getElementById("formFrame").src = link;
}

function closeForm() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("formPopup").style.display = "none";
  document.getElementById("formFrame").src = "";
}
