// Page-by-page viewer (no full scanned pages shown).
// Each page renders: featured clipped image + category titles + item lists.
// Search filters items across the currently visible page.

const PAGES = [
  { title: "Welcome Drinks", image: { src: "images/menu2.jpg", pos: "50% 30%" }, groups: [
    { heading: "Welcome Drinks", items: [
      "Moktails","Victoria Counter","Fresh Juice","Cold Drinks","Milk Shake",
      "Sharifa Shake","Chiku Shake","Pineapple Shake","Vanilla Shake","Pista Shake",
      "Strawberry Shake","Gola Chuski","Thandai Shake","Jal Jeera Shake","Mango Shake",
      "Jeera Chaas","Lassi","Coffee","Fruit Punch","Hot Kesharia Milk Counter"
    ] }
  ]},
  { title: "Moving Items", image: { src: "images/menu2.jpg", pos: "70% 75%" }, groups: [
    { heading: "Namkeen", items: [
      "Hara Bhara Kabab","Veg ball","Pineapple Cherry Stick","Paneer ball","Paneer tikka",
      "Paneer Finger","Paneer Seekh Kabab","Paneer Roll","Veg Tikka","Baby Corn Finger",
      "American Corn Tikka","Matar Tikka","Veg Lolly Pop","Paneer Lolly Pop","Veg Gold",
      "Corn Cheese Tikka","Hara Chana Kachori","Tandoori Mom (Veg)","Paper Corn","Mushroom Tandoori",
      "Spring Roll (Veg)","Pin Win Potato","Mini Kachori","Cheese Ball"
    ]},
    { heading: "Sweets", items: [
      "Mini Kaju Barfi","Mini Raj Bhog","Mini Gulab Jamun","Mini Kaju Pista Roll","Mini Pineapple Jalebi","Mini Angoori Petha"
    ]}
  ]},
  { title: "Hi-Tea", image: { src: "images/menu3.jpg", pos: "50% 65%" }, groups: [
    { heading: "Snacks", items: [
      "Golgappa","Aloo Tikki","Mix Chat","Chilla with Chutney","Tomato Ragda Chat",
      "Papri Chat","Palak Chat","Chinese Samosa","Hara Bhara Chat","Moth Chat",
      "Chinese Chat","Kanji Vada","Alu Lacha Kachori Chat","Puchka Chat (Ganga Jamuna)",
      "Raj Kachori Chat","Tikki Agra","Corn Stuffed Tikki Chat","Litti Counter",
      "Indian Bhel Chat","Paneer Romaniya Chat","Steam Corn","Dahi Vada Chat"
    ]},
    { heading: "Chinese", items: [
      "Veg Hakka Chowmin","Veg Garlic Manchurian","American Chopsy","Veg Fried Rice",
      "Paneer Chilly","Chana Chilly","Mushroom Chilly","Veg 65","Baby Corn Chilly",
      "Gobi Chilly","Veg Hot & Sour","Potato Chilly","American Corn Chilly","Paneer-65",
      "Veg Momo (Steamed)","Veg Momo (Fried)"
    ]},
    { heading: "Fruit Counter", items: ["Imported Fruits","Indian Fruits"] }
  ]},
  { title: "Bakery / South Indian / Daal / Rice / Soup", image: { src: "images/menu4.jpg", pos: "55% 30%" }, groups: [
    { heading: "Bakery Items", items: ["Burger","Pizza (of your choice)","Veg Patties","Paneer Patties","Pastry (different tastes)","Cheese Sandwich","Club Sandwich","Veg Sandwich"] },
    { heading: "South Indian Dishes", items: ["Plain Dosa / Masala Dosa","Idli (Mini)","Vada (Mini)","Uttapam (Mini)","Onion Uttapam","Mix Uttapam"] },
    { heading: "Daal", items: ["Daal Makhani","Dal Fried / Tarka","Chana Dal with Coconut","Daal Panchmela Butter Fry","Mung Dal Fry","Kathi Rahar Dal","Chana Dal Butter Fry","Green Mung Tarka","Dal Handi"] },
    { heading: "Rice", items: ["Jeera Pulao (Basmati)","Jeera Rice (Sonachur)","Peas Pulao","Kesaria Pulao","Mewa Pulao","Kashmiri Pulao","Veg Biryani","Veg Dum Biryani","Kashmiri Biryani","Veg Pulao","Corn Pulao","Baked Rice","Baked Corn Rice","3 Layer Biryani","Matka Pulao","Dahi Coconut Biryani"] },
    { heading: "Soup", items: ["Tomato Soup","Veg Sweet Corn Soup","Veg Hot & Sour Soup","Veg Manchow Soup","Green Soup","Palak Soup","Sweet Corn Munch Soup","Tomato Coriander Soup","Chicken S/Corn Soup","Chicken H/Sour Soup","Chicken Manchow Soup"] }
  ]},
  { title: "Vegetable Indian & Tawa", image: { src: "images/menu5.jpg", pos: "70% 40%" }, groups: [
    { heading: "Vegetable Indian", items: [
      "Kashmiri Aloo Dum","Aloo Dum Irani","Aloo Do Pyaza","Palak Kabli","Veg Tomato Puri","Aloo Palak Gravy",
      "Mixed Veg","Veg Navratan Korma","Veg Singapuri","Veg Kurkuri","Veg Jaipuri","Veg Makhanwala","Sag Mattar",
      "Veg Jhalfrazi","Capsicum Corn Fry","Paneer Babycorn Masala","Paneer Butter Masala","Paneer Sahi Korma",
      "Kaju Mushroom","Palak Corn with Cream","Palak Mushroom","Mushroom do Pyaza","Kaju Curry","Paneer Mushroom Taj",
      "Paneer Pasanda","Palak Paneer","Moti Kofta in Palak Gravy","Stuffed Capsicum","Green Peas Masala","Chana Masala",
      "Kaju Paneer","Paneer Capsicum","Paneer Tomato","Malai Kofta","Paneer Tikka Butter Masala","Paneer Pasanda",
      "Paneer Phoolchand","Paneer Keema","Matter Methi Malai","Paneer Karahi","Paneer Bagdadi"
    ]},
    { heading: "Vegetable on Tawa", items: ["Vegetable Garden","Vegetable Sizzler","Vegetable Kabab","Tawa Veg (Fried)"] }
  ]},
  { title: "Bread / Punjabi / Dahi", image: { src: "images/menu6.jpg", pos: "50% 40%" }, groups: [
    { heading: "Bread", items: ["Lacha Paratha","Pithi Kachauri","Mattar Kachauri","Palak Kachauri","Missi Roti","Stuffed Kulcha","Pudina Paratha","Gobi Paratha","Aloo Paratha","Mattar Paratha","Mircha Paratha","Paneer Paratha","Sattu Paratha","Feni Paratha","Mung Dal Paratha","Puran Puri","Butter Nan","Mughlai Paratha","Mung Kachauri","Chena Paratha","Baby Butter Nan","Rumali Roti","Tawa Roti"] },
    { heading: "Punjabi Dish", items: ["Makai Ki Roti","Sarso ka Saag","Whiter Butter","Gur","Amritsari Kulcha","Kashmiri Nan","Muli Chutni","Pindi Chana","Pheni Paratha","Chur Chur Nan"] },
    { heading: "Dahi Item", items: ["Dahi Bara","Dahi Pakora","Gujia Bara","Mix Fruit Raita","Vegetable Raita","Kheera Raita","Aloo Raita","Pineapple Raita","Imli Bara","Tiranga Dahi Bara","Bread Dahi Bara","Bundi Raita"] }
  ]},
  { title: "Rajasthani / Italian / Thai / Salad / Chutney", image: { src: "images/menu7.jpg", pos: "40% 45%" }, groups: [
    { heading: "Rajasthani Dish", items: ["Dal (Masala)","Bati","Churma","Gatte ki Sabji","Mangori Papad","Plane Mangori","Sangari ka Saag"] },
    { heading: "Italian Counter", items: ["Italian Pasta with coloured capsicum, veg rabe & sauce","Italian Crepes with two fillings (Mushroom & Mix Veg)","Baked Paneer Spaghetti Aroma","Baked Canelloni"] },
    { heading: "Thai Counter", items: ["Thai Rice with Green Curry","Thai Noodles with Red Curry","Path High with Crunchy Vegetables","Thai Pouch"] },
    { heading: "Papad Counter", items: ["Papad Fry","Papad Roll","Masala Papad","Disco Papad","Khichiya Papad"] },
    { heading: "Salad", items: ["Green Salad","Salad Bar (Indian)","Salad Bar (Imported)"] },
    { heading: "Chutneys", items: ["Lahsun Chutney","Hara Chutney","Fruit Chutney","Mango Chutney","Plastic Chutney","Pineapple Chutney","Tomato Chutney","Khajur Aamavat Chutney"] }
  ]},
  { title: "Chicken / Mutton / Fish (Gravy & Snacks)", image: { src: "images/menu8.jpg", pos: "50% 35%" }, groups: [
    { heading: "Chicken - Gravy", items: ["Chicken Butter Masala","Chicken Do Pyaza","Sahi Chicken","Chicken Curry","Chicken Roast B. Masala","Chicken Karahi","Chicken Dehati","Chicken Tikka B. Masala","Chicken Rogan Josh","Chicken Tawa","Chicken Afghani B. Masala","Chicken Pudina","Chicken Muglai","Murg Mussalam"] },
    { heading: "Non Veg Snacks - Dry", items: ["Chicken Chilly","Chicken Chilly Garlic","Chicken Chilly Boneless","Chicken Pakora","Chicken Dry Fry","Chicken Afghani","Chicken Pudina","Chicken Tandoori","Chicken Lasuni Tikka","Chicken Lolypop","Chicken Achari Tikka","Chicken Spritter"] },
    { heading: "Mutton", items: ["Mutton Curry","Tawa Mutton","Mutton Do Pyaza","Palak Mutton","Mutton Dehati","Mutton Karahi","Masala Mutton Fry","Mutton Korma","Mutton Rogon Josh","Mutton Handi","Mutton Tawa"] },
    { heading: "Fish", items: ["Fish Curry","Live Fish Fry","Fish Tomato","Fish Sarson","Fish Amritsari","Fish Patrui","Vetki Fish Fry","Fish Cutlet","Fish Finger"] }
  ]},
  { title: "Non-Vegetarian Biryani & Tandoor", image: { src: "images/menu9.jpg", pos: "70% 55%" }, groups: [
    { heading: "Non Veg Biryani", items: ["Chicken Biryani","Mutton Biryani","Chicken Dum Biryani","Mutton Dum Biryani"] },
    { heading: "Non Veg Tandoor", items: ["Chicken Seekh Kabab","Mutton Seekh Kabab","Vetki Seekh Kabab","Chicken Spring Roll","Chicken Tandoori","Chicken Manchurian","Chicken Pakora","Chicken Fry Masala","Chicken Afghani","Chicken Tikka","Chicken Lahsuni Tikka","Chicken Achari Tikka","Chicken Finger","Fish Tandoori","Prawn Fry","Prawn Kabab","Prawn Tandoori","Mutton Sami Kabab","Mutton Boti Kabab"] }
  ]},
  { title: "Sweets / Ice Cream / Kulfi / Water / Pan", image: { src: "images/menu10.jpg", pos: "55% 22%" }, groups: [
    { heading: "Sweets", items: ["Rasmalai Chilled","Gulab Jamun with Rabari","Kesaria Jalebi","Chena Decoration","Malpua with Rabri","Gazar Halwa","Badam Halwa","Mung Dal Halwa","Gond Pak","Kaju Puri Baked","Badam Puri Baked","Kaju Barfi","Stuff Hot Gulab Jamun","Kesar Bhog","Rainbow","Ghewar","Baked Rasgulla","Disco Sweets","Chena Paice with Kesar Pista","Mango Chena Pice","Mango Gulab Jamun","Malai Chamcham","Kesar Bati","Apple Jalebi with Rabari","Kaju Pista Barfi","Pineapple Jalebi","Mango Roll","Imriti"] },
    { heading: "Ice Cream", items: ["Ice Cream Parlour","Vanilla Ice Cream","Chocolate Ice Cream","Strawberry Ice Cream","Cone Ice Cream","Keshar Pista","Butter Scotch"] },
    { heading: "Kulfi", items: ["Matka Kulfi","Mango Kulfi","Kulfi Faluda","Stick Kulfi"] },
    { heading: "Water", items: ["Mineral Water","200 ml Bottle"] },
    { heading: "Pan Counter", items: ["Varieties of Pan (on request)"] }
  ]}
];

// Rendering
function renderPage(index){
  const page = PAGES[index];
  const root = document.getElementById('pageView');
  const indicator = document.getElementById('pageIndicator');
  indicator.textContent = `Page ${index+1} / ${PAGES.length}`;

  const feature = `
    <div class="feature" style="--pos:${page.image.pos}">
      <img src="${page.image.src}" alt="${page.title} representative food photo">
    </div>
  `;

  const groupsHtml = page.groups.map(g => `
    <div>
      <h2>${g.heading}</h2>
      <ul class="menu-list">
        ${g.items.map(i => `<li>${i}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  root.innerHTML = `
    <p class="page-intro">${page.title}</p>
    ${feature}
    <div class="columns">${groupsHtml}</div>
  `;

  wireSearch();
}

function wireSearch(){
  const search = document.getElementById('search');
  const items = document.querySelectorAll('#pageView .menu-list li');
  function onSearch(e){
    const q = e.target.value.trim().toLowerCase();
    items.forEach(li => {
      const t = li.textContent.toLowerCase();
      li.style.display = q && !t.includes(q) ? 'none' : '';
    });
  }
  search.oninput = onSearch;
}

let pageIndex = 0;
document.addEventListener('DOMContentLoaded', () => {
  const prev = document.getElementById('prevPage');
  const next = document.getElementById('nextPage');
  const updateNav = () => {
    prev.disabled = pageIndex === 0;
    next.disabled = pageIndex === PAGES.length - 1;
  };
  prev.onclick = () => { if(pageIndex>0){ pageIndex--; renderPage(pageIndex); updateNav(); }};
  next.onclick = () => { if(pageIndex<PAGES.length-1){ pageIndex++; renderPage(pageIndex); updateNav(); }};
  renderPage(pageIndex);
  updateNav();
});
