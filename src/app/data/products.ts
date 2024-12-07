// src/app/data/products.ts
import { Product } from '../models';

export const DEFAULT_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Smartphone Premium',
    price: 799.99,
    description: 'Dernier modèle avec caméra haute résolution et batterie longue durée',
    imageUrl: 'https://tangerois.ma/24349-large_default/smartphone-galaxy-a55-5g-awesome-iceblue-8-256gb-samsung.jpg',
    category: 'Électronique'
  },
  {
    id: 2,
    name: 'Ordinateur Portable',
    price: 1299.99,
    description: 'Ordinateur puissant pour le travail et le divertissement',
    imageUrl: 'https://i5.walmartimages.com/seo/HP-15-6-Screen-FHD-Laptop-Computer-AMD-Ryzen-5-5500U-8GB-RAM-256GB-SSD-Spruce-Blue-Windows-11-Home-15-ef2729wm_8dee5689-db47-45ac-9a0d-5399c95a8ee0.ad15a381ad98aa369a68bfb1527d66a9.jpeg',
    category: 'Électronique'
  },
  {
    id: 3,
    name: 'Écouteurs Sans Fil',
    price: 199.99,
    description: 'Écouteurs avec réduction de bruit active',
    imageUrl: 'https://lasolda.ma/pub/media/catalog/product/cache/bb9a79e4226b39b507bfcde48650ae93/_/c/_couteurs_sans_fil.jpg',
    category: 'Audio'
  },
  {
    id: 4,
    name: 'Montre Connectée',
    price: 249.99,
    description: 'Montre intelligente avec suivi de santé et sportif',
    imageUrl: 'https://mediazone.ma/uploads/images/products/14913/14913-oukEajrp.webp',
    category: 'Électronique'
  },
  {
    id: 5,
    name: 'Tablette',
    price: 449.99,
    description: 'Tablette polyvalente pour le travail et le divertissement',
    imageUrl: 'https://tangerois.ma/25064-large_default/tablette-galaxy-tab-a9-4-64gb-silver-samsung.jpg',
    category: 'Électronique'
  }
];
