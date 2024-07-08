// lib/dataFetcher.ts
export async function getItemData(id: string) {
  const items = [
    {
      image: "/assets/image1.png",
      url: "/",
      id: "1",
      description:
        "A stunning dress that exudes elegance and sophistication, perfect for any formal occasion. The intricate design and high-quality fabric ensure a comfortable and flattering fit. This dress is sure to make you stand out and leave a lasting impression.",
      price: 150,
      name: "Elegance Gown",
    },
    {
      image: "/assets/image.png",
      url: "/",
      id: "2",
      description:
        "An exquisite piece that combines classic charm with modern style. The dress features delicate details and a beautiful silhouette, making it ideal for both daytime and evening events. Crafted with care, it offers both comfort and style.",
      price: 120,
      name: "Round Neck Cape Dress",
    },
    {
      image: "/assets/image7.png",
      url: "/",
      id: "7",
      description:
        "This dress is the epitome of chic and sophistication. Its timeless design and luxurious fabric make it a versatile addition to any wardrobe. Perfect for special occasions, it offers a perfect blend of comfort and elegance.",
      price: 180,
      name: "Sophisticated Charm",
    },
    {
      image: "/assets/image5.png",
      url: "/",
      id: "5",
      description:
        "A fashionable dress that stands out with its unique design and vibrant color. It is made from high-quality materials to ensure durability and comfort. Whether for a party or a casual outing, this dress is a perfect choice.",
      price: 130,
      name: "Stunning Elegance",
    },
    {
      image: "/assets/image5.png",
      url: "/",
      id: "5",
      description:
        "This stylish dress features a contemporary design that is both elegant and trendy. Its comfortable fit and eye-catching details make it a must-have for any fashion-forward individual. Ideal for a variety of occasions.",
      price: 140,
      name: "Fashionable Delight",
    },
    {
      image: "/assets/image.png",
      url: "/",
      id: "2",
      description:
        "A beautiful dress that combines elegance with simplicity. Its clean lines and subtle details make it suitable for any occasion, from casual gatherings to formal events. Crafted from high-quality fabric, it ensures comfort and durability.",
      price: 110,
      name: "Round Neck Cape Dress",
    },
    {
      image: "/assets/image1.png",
      url: "/",
      id: "1",
      description:
        "An elegant dress that features a classic design with a modern twist. Its flattering fit and exquisite details make it perfect for any special occasion. Made with premium materials, it promises both comfort and style.",
      price: 160,
      name: "Chic Sophistication",
    },
    {
      image: "/assets/image7.png",
      url: "/",
      id: "7",
      description:
        "This dress is a blend of sophistication and charm, featuring a unique design that is sure to turn heads. Its high-quality fabric and impeccable craftsmanship ensure a comfortable and flattering fit for any occasion.",
      price: 170,
      name: "Elegance Gown",
    },
    {
      image: "/assets/image.png",
      url: "/",
      id: "0",
      description:
        "A timeless piece that offers both elegance and comfort. The dress's classic design is enhanced by its luxurious fabric and meticulous details. Perfect for any event, it is a versatile addition to any wardrobe.",
      price: 125,
      name: "Timeless Dress",
    },
    {
      image: "/assets/image7.png",
      url: "/",
      id: "7",
      description:
        "An exquisite dress that combines classic elegance with contemporary style. Its beautiful design and high-quality fabric make it ideal for any special occasion. Crafted with care, it offers a comfortable and flattering fit.",
      price: 155,
      name: "Timeless Dress",
    },
    {
      image: "/assets/image5.png",
      url: "/",
      id: "5",
      description:
        "This chic dress features a modern design that is both stylish and sophisticated. Its high-quality material ensures a comfortable fit, while its unique details add a touch of elegance. Perfect for any formal event.",
      price: 165,
      name: "Sophisticated Charm",
    },
    {
      image: "/assets/image1.png",
      url: "/",
      id: "1",
      description:
        "A stunning dress that exudes elegance and sophistication, perfect for any formal occasion. The intricate design and high-quality fabric ensure a comfortable and flattering fit. This dress is sure to make you stand out and leave a lasting impression.",
      price: 150,
      name: "Sophisticated Charm",
    },
    {
      image: "/assets/image1.png",
      url: "/",
      id: "1",
      description:
        "An exquisite piece that combines classic charm with modern style. The dress features delicate details and a beautiful silhouette, making it ideal for both daytime and evening events. Crafted with care, it offers both comfort and style.",
      price: 120,
      name: "Fashionable Delight",
    },
    {
      image: "/assets/image5.png",
      url: "/",
      id: "5",
      description:
        "This dress is the epitome of chic and sophistication. Its timeless design and luxurious fabric make it a versatile addition to any wardrobe. Perfect for special occasions, it offers a perfect blend of comfort and elegance.",
      price: 180,
      name: "Fashionable Delight",
    },
    {
      image: "/assets/image.png",
      url: "/",
      id: "2",
      description:
        "A fashionable dress that stands out with its unique design and vibrant color. It is made from high-quality materials to ensure durability and comfort. Whether for a party or a casual outing, this dress is a perfect choice.",
      price: 130,
      name: "Round Neck Cape Dress",
    },
    {
      image: "/assets/image7.png",
      url: "/",
      id: "7",
      description:
        "This stylish dress features a contemporary design that is both elegant and trendy. Its comfortable fit and eye-catching details make it a must-have for any fashion-forward individual. Ideal for a variety of occasions.",
      price: 140,
      name: "Fashionable Delight",
    },
  ];

  return items.find((item) => item.id === id) || null;
}
