// Local image paths (served from client/public/images) - organized by usage

export const PHOTOS = {
  // 白い服の写真（化粧品事業向け）
  white: {
    hero: "/images/photos/white-hero.webp",     // 260128_1253
    portrait: "/images/photos/white-portrait.webp",  // 260128_0959
    gallery1: "/images/photos/white-gallery1.webp",  // 260128_1159
    gallery2: "/images/photos/white-gallery2.webp",  // 260128_0842
    gallery3: "/images/photos/white-gallery3.webp",  // 260128_0290
    gallery4: "/images/photos/white-gallery4.webp",  // 260128_0265
    gallery5: "/images/photos/white-gallery5.webp", // 260128_0196
    gallery6: "/images/photos/white-gallery6.webp", // 260128_0239
  },
  // スーツの写真（AI研修事業向け）
  suit: {
    hero: "/images/photos/suit-hero.webp",      // of8076
    portrait: "/images/photos/suit-portrait.webp",  // of8143
    gallery1: "/images/photos/suit-gallery1.webp",  // of8100
    gallery2: "/images/photos/suit-gallery2.webp",  // of8188
    gallery3: "/images/photos/suit-gallery3.webp",  // of8150
    gallery4: "/images/photos/suit-gallery4.webp",  // of8083
    gallery5: "/images/photos/suit-gallery5.webp",  // of8197
    gallery6: "/images/photos/suit-gallery6.webp",  // of8070
    gallery7: "/images/photos/suit-gallery7.webp",  // of8171
    gallery8: "/images/photos/suit-gallery8.webp",  // of8158
    gallery9: "/images/photos/suit-gallery9.webp",  // of8170
    gallery10: "/images/photos/suit-gallery10.webp", // of8167
    gallery11: "/images/photos/suit-gallery11.webp", // of8137
    gallery12: "/images/photos/suit-gallery12.webp", // of8119
    gallery13: "/images/photos/suit-gallery13.webp", // of8045
    gallery14: "/images/photos/suit-gallery14.webp", // of8067
    gallery15: "/images/photos/suit-gallery15.webp", // of8206
    gallery16: "/images/photos/suit-gallery16.webp", // of8342
    gallery17: "/images/photos/suit-gallery17.webp", // of8172
    gallery18: "/images/photos/suit-gallery18.webp", // of8352
    gallery19: "/images/photos/suit-gallery19.webp", // of8328
    gallery20: "/images/photos/suit-gallery20.webp", // of8320
  },
  // その他
  extra: {
    img1: "/images/photos/extra-img1.jpg",     // IMG_4373
    img2: "/images/photos/extra-img2.jpg",     // IMG_4363
  },
  // チーム写真
  team: {
    laughing: "/images/photos/team-laughing.webp", // 260128_1245 - 4人笑顔
    group5: "/images/photos/white-gallery2.webp",   // 260128_0842 - 5人スーツ集合
  },
} as const;

// Generated editorial images (for backgrounds / atmosphere)
export const IMAGES = {
  heroEditorial: "/images/editorial/hero-editorial.webp",
  aiEditorial: "/images/editorial/ai-editorial.webp",
  cosmeticsProcess: "/images/editorial/cosmetics-process.webp",
  brandStrategy: "/images/editorial/brand-strategy.webp",
  pillarCosmetics: "/images/editorial/pillar-cosmetics.webp",
  pillarAI: "/images/editorial/pillar-ai.webp",
  profileAtmosphere: "/images/editorial/profile-atmosphere.webp",
} as const;
